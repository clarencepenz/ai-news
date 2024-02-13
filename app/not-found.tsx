import Link from "next/link";
import React from "react";

export default function Custom404() {
  return (
    <div className="container-screen h-screen flex flex-col gap-8 justify-center items-center">
      <h4 className="text-black font-bold md:text-4xl">404 - You are lost</h4>
      <Link href="/" className="text-evfy-primary transition-colors hover:text-evfy-primary/60 hover:underline"> Go Back </Link>
    </div>
  );
}
