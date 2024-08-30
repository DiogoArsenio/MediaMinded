import "./css/style.css";

import { Inter, Architects_Daughter } from "next/font/google";

import Header from "@/components/ui/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Sara Jacinto Design",
  description: "Sara Jacinto Design Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${inter.variable} ${architects_daughter.variable} font-nohemi antialiased`}>
        <div className="flex flex-col z-10 min-h-screen">
          <div
            id="blob"
            className="h-1/3 w-1/3 bg-white -z-10 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-gray-100 to-gray-800 opacity-10 "
          ></div>
          <Header />
          {children}
        </div>
        <div
          className="fixed top-0 left-0 w-full -z-10 backdrop-blur-3xl h-full flex flex-col items-center justify-center"
          style={{ filter: "blur(0.01px) grayscale(0.001)" }}
        ></div>
      </body>
    </html>
  );
}
