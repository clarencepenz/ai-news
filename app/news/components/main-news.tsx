import React from "react";
import Image from "next/image";
import { BlueDot } from "@/svg";
import { ArticlesProps } from "@/types";
import RecentArticles from "./related-articles";

type NewsProp = {
  article_data: ArticlesProps;
};

function MainNews({ article_data }: NewsProp) {
  return (
    <section className="pt-24 container-screen  grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-2">
        <div className="flex gap-2 items-center">
          <span className="text-evfy-primary uppercase text-xs font-semibold tracking-widest leading-4">
            {article_data.tag}
          </span>
          <BlueDot />
          <span className="text-evfy-neutral-100 leading-5 tracking-wide">
            {article_data.created_at}
          </span>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight md:tracking-tighter leading-[2.5rem] md:leading-[3.5rem] my-4">
            {article_data.title}
          </h2>
          <Image
            src={article_data.coverImage}
            alt={article_data.title}
            height={448}
            width={760}
            className="mb-4 mt-10 h-full w-full"
            priority
          />
          <small className="text-evfy-neutral-300 leading-6 tracking-wider">
            {article_data.alt}
          </small>
          <div
            // use DOMPurify when data is getting displayed from an actual server
            dangerouslySetInnerHTML={{ __html: article_data.description }}
            className="mt-8 text-evfy-neutral-300 font-normal leading-8 tracking-wide"
          />
        </div>
      </div>
      <RecentArticles />
    </section>
  );
}

export default MainNews;
