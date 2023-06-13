"use client";

import axios from "axios";
import { useState } from "react";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const getData = async () => {
    const response = await axios.get("http://localhost:3000/login");
    setEmail(response.data);
  };
  return (
    <div>
      <button type="button" onClick={getData}>
        fetch
      </button>
      <button type="button" onClick={() => console.log(email)}>
        log
      </button>
      {email ? <p>{email}</p> : <p>hello</p>}
    </div>
  );
};

export default Login;
