import express, { Application, json } from "express";
import { mainConnection } from "./utils/dbConfig";
import cors from "cors";
import { mainApp } from "./mainApp";

const app: Application = express();

app.use(cors());
app.use(json());

const port: number = 4000;

mainApp(app);

const server = app.listen(port, () => {
  mainConnection();
});

process.on("uncaughtException", (error: Error) => {
  console.log(error);
  process.exit(1);
});

process.on("unhandledRejection", (reason: unknown) => {
  console.log(reason);
  server.close(() => {
    process.exit(1);
  });
});
