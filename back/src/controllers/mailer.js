import axios from "axios";

export const sendEmail = async (email, subject, content) => {
  try {
    const apiKey =
      "xsmtpsib-d2299ed53b873637d2caff3ffd8252cc296a385d64b79e67f552567780971b24-EPaRIZV16SrntW9f"; // Remplacez par votre clé d'API SendinBlue

    const response = await axios.post(
      "https://api.sendinblue.com/v3/smtp/email",
      {
        sender: { email: "votre_adresse_email@example.com" }, // Remplacez par votre adresse e-mail
        to: [{ email: email }],
        subject: subject,
        htmlContent: content,
      },
      {
        headers: {
          "x-api-key":
            "xsmtpsib-d2299ed53b873637d2caff3ffd8252cc296a385d64b79e67f552567780971b24-ps3v1c9LM07krDGt",
          "Content-Type": "application/json",
        },
      }
    );

    console.log("E-mail envoyé avec succès !");
    console.log(response.data);
  } catch (error) {
    console.error("Une erreur s'est produite lors de l'envoi de l'e-mail :");
    console.error(error.response.data);
  }
};

// Exemple d'utilisation du contrôleur
const email = "destinataire@example.com";
const subject = "Test d'envoi d'e-mail";
const content =
  "<h1>Ceci est un test d'envoi d'e-mail</h1><p>Bonjour, voici le contenu de l'e-mail.</p>";

sendEmail(email, subject, content);
