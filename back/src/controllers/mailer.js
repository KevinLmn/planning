import axios from "axios";

export const sendEmail = async (req, res) => {
  const { email, content } = req.body;
  console.log(req.body);
  try {
    const apiKey = process.env.SENDINBLUE_API_KEY;

    const response = await axios.post(
      "https://api.sendinblue.com/v3/smtp/email",
      {
        sender: { email: email },
        to: [{ email: "kevinlemniai@gmail.com" }],
        subject: "Contact",
        htmlContent: content,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
          accept: "application/json",
        },
      }
    );

    console.log("E-mail envoyé avec succès !");
    console.log(response.data);
  } catch (error) {
    console.error("Une erreur s'est produite lors de l'envoi de l'e-mail :");
    console.log(error.response.data);
  }
};
