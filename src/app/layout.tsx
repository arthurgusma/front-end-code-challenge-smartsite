import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartFit - Smart Locations",
  description: "Smart Locations from SmartFit, find the best gym for you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
