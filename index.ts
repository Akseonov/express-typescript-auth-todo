import express from 'express'
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from 'dotenv'
dotenv.config({path: `.${process.env.NODE_ENV}.env`})

import router from "./router/index";
import errorMiddleware from "./middleware/error.middleware";

const app = express()
const port = process.env.PORT || 5000

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  // origin: process.env.CLIENT_URL
}));

app.use('/api', router);
// @ts-ignore
app.use(errorMiddleware);

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server started on PORT = ${port}`))
  } catch (e) {
    console.log(e);
  }
}

start()
