import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"], variable: "--default-font" });
export const spoqaHanSansNeoFont = localFont({
  src: [
    {
      path: "../public/SpoqaHanSansNeo-Light.woff",
      weight: "400",
    },
    {
      path: "../public/SpoqaHanSansNeo-Regular.woff",
      weight: "500",
    },
    {
      path: "../public/SpoqaHanSansNeo-Bold.woff",
      weight: "700",
    },
  ],
  variable: "--korean-font",
});
