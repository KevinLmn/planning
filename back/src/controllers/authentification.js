import argon2 from "argon2";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const hashPassword = async (req, res, next) => {
  const { password } = req.body;
  const hashedPassword = await argon2.hash(password);
  req.body.password = hashedPassword;
  next();
};

export const authentification = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.User.create({
    data: { email: email, password: password },
  });
  res.json(user);
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.User.findUnique({
    where: {
      email: email,
    },
  });
  console.log(user);
  const isValid = await argon2.verify(user.password, password);
  if (isValid) {
    res.json({ message: "Vous êtes connecté" });
  } else {
    res.json({ message: "Erreur de connexion" });
  }
};
