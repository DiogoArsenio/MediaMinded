import React from "react";

// Define props types for FooterLink component
interface FooterLinkProps {
  href: string;
  text: string;
}

// Define the Footer component
const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-gray-900 text-gray-400 text-center">
      <p>&copy; 2024 Sara Jacinto. All rights reserved.</p>
      <div className="mt-4 space-x-4">
        <FooterLink href="https://linkedin.com" text="LinkedIn" />
      </div>
    </footer>
  );
};

// Define the FooterLink component
const FooterLink: React.FC<FooterLinkProps> = ({ href, text }) => {
  return (
    <a href={href} className="hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
};

export default Footer;
