import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="#home" className="flex flex-row text-gray-100 items-center text-xl font-bold" aria-label="MediaMinded">
                  <svg
                    className="w-8 h-8 mr-3 fill-current text-gray-100"
                    width="64"
                    height="71"
                    viewBox="0 0 64 71"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M56.12 48.01C60.56 42.91 63.26 36.19 63.26 28.82C63.26 12.91 50.69 0 35.18 0C10.8435 0 8.31435 18.5719 7.37087 25.5001C7.30134 26.0107 7.24042 26.458 7.18002 26.83C7.02002 27.88 6.67002 28.89 6.15002 29.81L0.250021 40.06C-0.329979 41.09 0.120021 42.39 1.22002 42.83L5.30002 44.46C6.38002 44.89 7.08002 45.92 7.08002 47.08L8.63002 58.01C8.63002 60.17 10.35 61.92 12.51 61.95C13.1521 61.9573 13.8192 61.9356 14.496 61.9137C18.478 61.7845 22.7913 61.6445 24.27 67.32C24.86 69.59 27.25 70.88 29.47 70.12L53.34 61.98C54.63 61.54 55.5 60.33 55.5 58.96V49.63C55.5 49.03 55.73 48.46 56.12 48.01ZM23.45 12.73C25.09 9.35 28.58 7.81 32.37 7.45C33.78 7.32 35.18 7.53 36.53 7.94C37.1909 8.14147 37.885 8.32732 38.5888 8.51577C41.8672 9.39366 45.3563 10.3279 46.69 13.16C47.49 14.85 48.88 16.14 50.49 17.03C60.67 22.69 52.57 33.62 41.54 28.5C39.1469 27.0266 36.3706 27.5018 33.6545 27.9667C30.5823 28.4926 27.587 29.0054 25.31 26.67C24.6336 25.3862 23.2162 25.0383 21.7971 24.6899C20.1322 24.2812 18.4651 23.8719 17.99 21.95C17.34 19.91 18.51 18.32 20.04 17.05C21.46 15.87 22.63 14.41 23.45 12.73Z" />
                  </svg>
                  Media
                  <span className="font-light">Minded</span>
                </Link>
              </div>
              <div className="text-gray-400">Elevate Your Social Presence with MediaMinded</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
              {/* 2nd block */}
              <div className="text-sm">
                <ul>
                  <li className="mb-1">
                    <Link href="#services" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                      Services
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <ul>
                  <li className="mb-1">
                    <Link href="#process" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                      Process
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <ul>
                  <li className="mb-1">
                    <Link href="#contact" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link
                  href="/"
                  className="flex justify-center items-center text-gray-100 bg-gray-800 hover:text-gray-800 hover:bg-gray-100 rounded-full transition duration-150 ease-in-out"
                  aria-label="Twitter"
                >
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-gray-100 bg-gray-800 hover:text-gray-800 hover:bg-gray-100 rounded-full transition duration-150 ease-in-out"
                  aria-label="Facebook"
                >
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-gray-100 bg-gray-800 hover:text-gray-800 hover:bg-gray-100 rounded-full transition duration-150 ease-in-out"
                  aria-label="Instagram"
                >
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-gray-100 bg-gray-800 hover:text-gray-800 hover:bg-gray-100 rounded-full transition duration-150 ease-in-out"
                  aria-label="Linkedin"
                >
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; MediaMinded.com. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
