"use client";
import React from "react";
import Link from "next/link";
import Button from "@/components/common/Button";

function HomePage() {

  return (
    <section className="container-screen flex flex-col items-center justify-center gap-4 mb-8 h-screen">
      <h1 className="text-3xl sm:text-5xl md:text-6xl text-center  md:w-10/12 font-semibold tracking-tight md:tracking-tighter leading-[2.5rem] md:leading-[3.5rem] my-4">
        Mars is set to have half of all new vehicles to be zero emissions by
        20301
      </h1>
      <p className="text-evfy-neutral-300 leading-6 tracking-wider">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <Link href="#articles-you-may-like">
          <Button size="medium" variant="primary">
            Explore
          </Button>
        </Link>
        <Link href="/news" className="hidden md:block">
          <Button variant="secondary" size="medium">
            View More
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default HomePage;
