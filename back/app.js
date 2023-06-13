import express from "express";
import cors from "cors";
import { sendEmail } from "./src/controllers/mailer.js";

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/login", (req, res) => {
  res.send("Hello World!");
});

// app.get("/email", (req, res) => {
//   sendEmail("kevinlemniai@gmail.com", "hello", "hello");
//   res.send("?");
// });
import SibApiV3Sdk from "sib-api-v3-sdk";

app.get("/email", (req, res) => {
  var defaultClient = SibApiV3Sdk.ApiClient.instance;

  // Configure API key authorization: api-key
  var apiKey = defaultClient.authentications["api-key"];
  apiKey.apiKey =
    "xsmtpsib-d2299ed53b873637d2caff3ffd8252cc296a385d64b79e67f552567780971b24-ps3v1c9LM07krDGt";

  var apiInstance = new SibApiV3Sdk.ContactsApi();

  var createContact = new SibApiV3Sdk.CreateContact(); // CreateContact | Values to create a contact
  createContact = { email: "john@doe.com" };
  res.send("?");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
