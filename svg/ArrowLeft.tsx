import * as React from "react";
import { SVGProps } from "@/types";

function SVGComponent(props: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_59_217)">
        <path
          d="M7.99999 2.66663L7.05999 3.60663L10.78 7.33329H2.66666V8.66663H10.78L7.05999 12.3933L7.99999 13.3333L13.3333 7.99996L7.99999 2.66663Z"
          fill="#0036C3"
        />
      </g>
      <defs>
        <clipPath id="clip0_59_217">
          <rect width={16} height={16} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default SVGComponent;
