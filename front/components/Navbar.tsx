import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/looby">Looby</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
};

export default Navbar;
