"use client";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/ui/footer";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.onpointermove = (event) => {
      const { pageX, pageY } = event;

      document.getElementById("blob")?.animate(
        {
          left: `${pageX}px`,
          top: `${pageY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };
  });

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <main className="grow overflow-hidden">{children}</main>
      <Footer />
    </>
  );
}
