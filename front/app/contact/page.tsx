"use client";

import axios from "axios";
import validator from "validator";
import { use, useEffect, useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [content, setContent] = useState<string>("");
  const handleInput = (e: any, setState: any): void => {
    const value = e.target.value;
    setState(value);
    if (validator.isEmail(value)) {
      setEmailError("Enter a valid email");
    }
  };
  const sendEmail = async () => {
    const res = axios.post("http://localhost:3000/contact", {
      email,
      content,
    });
    console.log(res);
  };
  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={(e) => handleInput(e, setEmail)}
        />
        <p>{emailError}</p>
        <input
          type="text"
          placeholder="content"
          name="content"
          onChange={(e) => handleInput(e, setContent)}
        />
      </form>
      <button
        onClick={() => {
          console.log(email, content);
          sendEmail();
        }}
      >
        log
      </button>
    </div>
  );
};

export default Contact;
