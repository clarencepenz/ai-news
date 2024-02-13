import React from "react";

import cn from "@/lib/utils";

type props = {
  tag: string;
  is_featured: boolean;
};

function Badge({ tag, is_featured }: props) {
  return (
    <span
      className={cn(
        "text-evfy-primary uppercase text-xs font-semibold rounded-sm px-2 py-1",
        is_featured ? "bg-evfy-outline" : "px-0 bg-transparent "
      )}
    >
      {is_featured ? "Featured" : tag}
    </span>
  );
}

export default Badge;
