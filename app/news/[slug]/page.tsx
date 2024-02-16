"use client";

import React from "react";
import { useParams } from "next/navigation";
import MainNews from "@/app/news/components/main-news";
import articlesData from "@/constants/data.json";

function Page() {
  const params = useParams();

  /*
    To display a single article, the slug gotten from the params is used to find the article from the JSON file.
  */
  const data = articlesData.find((item) => params.slug === item.slug);

  if (!data) return "loading..."; // This is to check if data exists

  return (
    <div className="mb-16">
      <MainNews article_data={data} />
    </div>
  );
}

export default Page;
