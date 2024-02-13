import React from "react";
import cn from "@/lib/utils";

type props = {
  className?: string;
};

function Separator({ className }: props) {
  return <div className={cn("bg-evfy-neutral-400 h-[0.5px]", className)} />;
}

export default Separator;
