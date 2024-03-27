import cors from "cors";
import dotenv from "dotenv";
import express, { Application, NextFunction, Request, Response } from "express";
import mysql from "mysql";

dotenv.config();

const env_settings = {
  dbConnSettings: {
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  },
  port: process.env.SERVER_SIDE_PORT,
  frontend_port: process.env.SERVER_SIDE_FRONTEND_APP,
};

const connection_pool = mysql.createPool(env_settings.dbConnSettings);

connection_pool.on("error", (err) => {
  console.error("MySQL Pool Error:", err);
});

const app: Application = express();

app.use(
  cors({
    origin: env_settings.frontend_port || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    preflightContinue: true,
  })
);

app.options("*", cors());

app.use(function (req: Request, res: Response, next: NextFunction) {
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type");
  next();
});

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Express + Typescript Server" });
});

app.listen(env_settings.port, () => {
  console.log(`Server is running on port ${env_settings.port}.`);
});

module.exports = app;
