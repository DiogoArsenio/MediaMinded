import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 bg-gray-900 text-gray-400 text-center">
      <p>&copy; 2024 Sara Jacinto. All rights reserved.</p>
      <div className="mt-4 space-x-4">
        <FooterLink href="https://linkedin.com" text="LinkedIn" />
      </div>
    </footer>
  );
}

function FooterLink({ href, text }) {
  return (
    <a href={href} className="hover:text-white transition duration-300">
      {text}
    </a>
  );
}
