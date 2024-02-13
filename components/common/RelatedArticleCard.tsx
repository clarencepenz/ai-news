import * as React from "react";

import Image from "next/image";
import Link from "next/link";
import { ArticlesProps } from "@/types";
import Badge from "./Badge";

type CardProps = {
  data: ArticlesProps;
};

export default function RelatedArticleCard({ data }: CardProps) {
  return (
    <Link href={`/news/${data.slug}`}>
      <figure className="flex gap-5 items-center border border-none outline-none bg-transparent shadow-none">
        <div className="p-0 w-40 rounded-sm">
          <Image
            src={data.coverImage}
            alt={data.title}
            height={78}
            width={78}
          />
        </div>
        <figcaption className="px-0 py-0 block">
          <Badge is_featured={data.is_featured} tag={data.tag} />
          <h3 className="text-md font-bold mt-2 text-evfy-neutral-300 leading-5 transition-colors hover:text-evfy-primary/80 cursor-pointer">
            {data.title}
          </h3>
        </figcaption>
      </figure>
    </Link>
  );
}
