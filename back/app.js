import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { sendEmail } from "./src/controllers/mailer.js";
import {
  hashPassword,
  authentification,
  login,
} from "./src/controllers/authentification.js";

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/login", (req, res) => {
  res.send("Hello World!");
});

app.post("/contact", sendEmail);

app.post("/authentification/login", login);

app.post("/authentification/signin", hashPassword, authentification);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
