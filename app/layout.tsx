import React from "react";

import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import cn from "@/lib/utils";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { DEFAULT_METADATA } from "@/constants/seo";

const rubikTitle = Rubik({ subsets: ["latin"], variable: "--title-font" });
const rubikBody = Rubik({ subsets: ["latin"], variable: "--body-font" });

export const metadata: Metadata = DEFAULT_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          rubikTitle.variable,
          rubikBody.className,
          rubikBody.variable
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
