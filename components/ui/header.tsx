import Link from "next/link";
import MobileMenu from "./mobile-menu";
import dynamic from "next/dynamic";

const Header = () => {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="flex text-xl flex-row text-gray-100 items-center  font-bold" aria-label="Cruip">
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

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="#services"
                  className="font-light hover:font-bold text-gray-100 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  className="font-light hover:font-bold scroll-smooth text-gray-100 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link href="#contact" className="btn-sm text-gray-800 bg-gray-100 hover:bg-gray-800 hover:text-gray-100 ml-3">
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
