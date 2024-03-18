import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import mysql from "mysql";

dotenv.config();

const app: Express = express();
app.use(
  cors({
    origin:
      process.env.SERVER_SIDE_FRONTEND_APP ||
      process.env.SERVER_SIDE_FRONTEND_APP_TEST,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    preflightContinue: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript Server");
});

app.listen(process.env.SERVER_SIDE_PORT, () => {
  console.log("Server is running on port 3001.");
});

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

connection.connect();

connection.end();

module.exports = app;
// hello
