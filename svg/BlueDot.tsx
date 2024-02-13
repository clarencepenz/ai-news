import * as React from "react";
import { SVGProps } from "@/types";

function SVGComponent(props: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={3}
      height={3}
      viewBox="0 0 3 3"
      fill="none"
      {...props}
    >
      <circle cx={1.5} cy={1.5} r={1.5} fill="#0036C3" />
    </svg>
  );
}
export default SVGComponent;
