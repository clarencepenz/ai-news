import React from "react";

import Image from "next/image";
import PREVIEW_IMAGE from "@/utils/image";
import { ArticlesProps } from "@/types";

type CardProps = {
  data: ArticlesProps
};

export default function ArticleCard({ data }: CardProps) {
  return (
    <figure className="border border-none outline-none bg-transparent shadow-none transition-colors hover:text-evfy-primary/80 cursor-pointer">
      <div className="p-0 h-auto md:h-[200px]">
        <Image
          src={data.coverImage ?? PREVIEW_IMAGE("image_one")}
          alt={data.title}
          height={448}
          width={760}
          className="h-full w-full"
        />
      </div>
      <figcaption className="px-0 py-6">
        <h3 className="font-semibold tracking-tight text-sm text-clip">{data.title}</h3>
        <small className="text-sm text-muted-foreground mt-2">{data.alt}</small>
      </figcaption>
    </figure>
  );
}
