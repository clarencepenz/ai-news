"use client";

import React from "react";
import { useParams } from "next/navigation";
import MainNews from "@/app/news/components/main-news";
import articlesData from "@/constants/article";

function Page() {
  const params = useParams();

  const data = articlesData.find((item) => params.slug === item.slug);

  if (!data) return "loading...";

  return (
    <div className="mb-16">
      <MainNews article_data={data} />
    </div>
  );
}

export default Page;
