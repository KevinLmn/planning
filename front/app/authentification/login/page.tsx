"use client";
import { useState } from "react";
import axios from "axios";
import { input } from "../../types/myInterface";

const Login = () => {
  const [inputs, setInputs] = useState<input>({ email: "", password: "" });
  const handleSubmit = (e: any, setState: any) => {
    const value = e.target.value;
    setState(value);
  };
  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values: input) => ({ ...values, [name]: value }));
  };

  const handleSignin = async () => {
    const response = await axios.post(
      "http://localhost:3000/authentification/login",
      inputs
    );
    console.log(response);
    return response;
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(inputs);
          handleSignin();
        }}
      >
        <input
          type="text"
          name="email"
          value={inputs.email || ""}
          placeholder="Email"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          name="password"
          value={inputs.password || ""}
          placeholder="Password"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Login;
