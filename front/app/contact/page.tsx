"use client";

import Link from "next/link";
import { useState } from "react";
import { Statement } from "typescript";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleInput = (e: any, setState: any) => {
    const value = e.target.value;
    setState(value);
  };
  return (
    <div>
      <Link href="/">
        <button> Back to Looby </button>
      </Link>
      <form>
        <input
          type="email"
          placeholder="ID"
          name="email"
          onClick={(e) => handleInput(e, setName)}
        />
        <input
          type="text"
          placeholder="Message"
          name="message"
          onClick={(e) => handleInput(e, setMessage)}
        />
      </form>
    </div>
  );
};

export default Contact;
