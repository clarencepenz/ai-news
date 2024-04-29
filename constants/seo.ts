import { Metadata, Viewport } from "next";

const WEB_APP_URL = "https://evfy-spa.vercel.app/";

const SEO_KEYWORDS = ["News", "Cars"];

const DEFAULT_METADATA: Metadata = {
  title: "EVFY - Track recent news",
  description: "Track recent news",
  authors: {
    name: "EVFY O",
    url: WEB_APP_URL,
  },
  generator: "Next.js",
  keywords: SEO_KEYWORDS,
  referrer: "origin-when-cross-origin",
  creator: "EVFY J",
  publisher: "EVFY K",
  icons: [
    "/favicon.ico",
    "/favicon-16x16.png",
    "/favicon-32x32.png",
    "/apple-touch-icon.png",
    "/android-chrome-192x192.png",
    "/android-chrome-512x512.png",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: WEB_APP_URL,
    siteName: "EVFY X",
    title: "EVFY - News Network",
    description:
      "EVFY: Track recent news. Elevate News tracking with EVFY's user-friendly platform. Try it now!",
    images: [
      {
        url: "/images/lg-og-image.webp",
        width: 192,
        height: 192,
        alt: "EVFY",
      },
    ],
  },
  twitter: {
    creator: "@EVFY",
    title: "EVFY - News Network",
    description: "Track recent news 💼💡 #EVFY #NEWS #NewsSimplified",
    site: "@EVFY V",
    card: "summary_large_image",
    images: [
      {
        url: "/images/lg-og-image.webp",
        width: 512,
        height: 512,
        alt: "EVFY",
      },
    ],
  },
  metadataBase: new URL(WEB_APP_URL),
};

const VIEWPORT_METADATA: Viewport = {
  width: 1,
  themeColor: "#040a13",
  colorScheme: "dark",
};

export { DEFAULT_METADATA, VIEWPORT_METADATA, WEB_APP_URL };
