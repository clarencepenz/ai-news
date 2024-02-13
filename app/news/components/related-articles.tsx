import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "@/svg";
import RelatedArticleCard from "@/components/common/RelatedArticleCard";
import articlesData from "@/constants/article";
import Separator from "@/components/common/Separator";

function RecentArticles() {
  const params = useParams();
  return (
    <aside className="pt-8 md:pt-44">
      <h3 className="text-md font-semibold leading-6 tracking-wide mb-4">
        Related Articles
      </h3>

      {articlesData
        .filter((item) => item.slug !== params.slug) // filter out the article currently displayed from the related article section
        .map((item, index) => (
          <div key={item.slug}>
            <RelatedArticleCard data={item} />
            {index !== articlesData.length - 2 && ( // prevent the separator from showing at the bottom of the last article card
              <Separator className="bg-evfy-neutral-400/50 h-[0.5px] my-7" />
            )}
          </div>
        ))}
      <Link
        href="/news"
        className="flex items-center gap-4 mt-8 cursor-pointer"
      >
        <span className="text-evfy-primary leading-5 tracking-wider font-normal transition-colors hover:text-evfy-primary/80 hover:mr-0.5">
          View more
        </span>
        <ArrowLeft className="transition-colors hover:text-evfy-primary/80 hover:ml-0.5" />
      </Link>
    </aside>
  );
}

export default RecentArticles;
