import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/looby">Looby</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/todolist">To Do List</Link>
      <Link href="/authentification/signin">Signin</Link>
      <Link href="/authentification/login">Log in</Link>
    </div>
  );
};

export default Navbar;
