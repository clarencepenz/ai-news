import React from "react";
import ArticleCard from "@/components/common/ArticleCard";
import Link from "next/link";
import articlesData from "@/constants/data.json";

function OtherArticles() {
  return (
    <section id="articles-you-may-like" className="bg-evfy-neutral-200 py-24">
      <div className="container-screen">
        <h3 className="text-3xl md:text-4xl text-evfy-neutral-600 font-semibold">
          Articles You May Like
        </h3>
        <div className="mt-6 grid grid-cols-1 gap-6 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {articlesData.map((item) => (
            <Link href={`/news/${item.slug}`} key={item.slug}>
              <ArticleCard data={item} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OtherArticles;
