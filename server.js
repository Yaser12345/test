import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/Connect.js";
import AuthRouter from "./routes/AuthRoutes.js";
import JobsRouter from "./routes/JobsRoutes.js";

import 'express-async-errors'
import morgan from "morgan"
//middleware
import errorHandlerMiddleware from "./middleware/Error-handler.js";
import notFoundMiddleware from "./middleware/Not-found.js";

dotenv.config();

const app = express();

if(process.env.NODE_ENV !== 'production'){
  app.use(morgan('dev'))
}

app.use(express.json());

app.get("/", (req, res) => {
  res.json({msg:"welcome"});
});
app.get("/api/v1", (req, res) => {
  res.json({msg:"api v1"});
});
app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/jobs", JobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000; 

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`SERVER is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
