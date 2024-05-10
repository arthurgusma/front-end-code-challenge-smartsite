import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartFit - Reabertura",
  description: "Encontra a SmartFit mais próxima e consulta o estado de abertura.",
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
