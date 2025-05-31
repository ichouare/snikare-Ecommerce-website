import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "/assets/styles/globals.css";




const arimo = Arimo({
  subsets: ['hebrew']
})
export const metadata: Metadata = {
  title: "E-commerce",
  description: "an ecommerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arimo.className}  p-0`}
      >
        {children}
      </body>
    </html>
  );
}
