import React from "react";
import Link from "next/link";

export default function HomeScreen() {
  return (
    <>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </>
  );
}
