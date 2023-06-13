"use client";

import Link from "next/link";
import { useState } from "react";
import { Statement } from "typescript";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleInput = (e: any, setState: any): void => {
    const value = e.target.value;
    setState(value);
  };
  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="ID"
          name="email"
          onChange={(e) => handleInput(e, setName)}
        />
        <input
          type="text"
          placeholder="Message"
          name="message"
          onChange={(e) => handleInput(e, setMessage)}
        />
      </form>
      <button onClick={() => console.log(name, message)}>log</button>
    </div>
  );
};

export default Contact;
