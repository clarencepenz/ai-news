import React from "react";
import OtherArticles from "./news/components/other-articles";
import HomePage from "./components/home-page";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomePage />
      <OtherArticles />
    </main>
  );
}
