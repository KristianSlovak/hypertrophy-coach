import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
const cors = require("cors");

dotenv.config();

const app: Express = express();
app.use(cors());
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Express + Typescript Server" });
});

app.listen(port, () => {
  console.log("Server is running on port 3000.");
});
