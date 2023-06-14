"use client";
import { useState } from "react";
import axios from "axios";
import { input } from "../../types/myInterface";

const Signin = () => {
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
      "http://localhost:3000/authentification/signin",
      inputs
    );
    console.log(response);
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
          placeholder="Email"
          value={inputs.email || ""}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={inputs.password || ""}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Signin;
