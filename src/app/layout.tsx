import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./registry";
import { ajouFont, taomFont } from "./fonts";
import "./globals.css";
import GoogleAnalytics from "@/lib/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "중앙도서관 첫문장 서비스",
  description: "25학년도 하반기 아주대학교 중앙도서관 대출실 이벤트페이지",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${inter.className} ${ajouFont.variable} ${taomFont.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap" rel="stylesheet" />
      </head>
      <body>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
					<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
				) : null}
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
