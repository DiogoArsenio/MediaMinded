"use client";
import Image, { StaticImageData } from "next/image";
import Modal from "@/components/modal";
import Work from "@/public/images/work.jpg";
import Work1 from "@/public/images/work1.jpeg";
import Work2 from "@/public/images/work2.jpeg";
import Work3 from "@/public/images/work3.jpeg";
import Work4 from "@/public/images/work4.jpeg";
import Work5 from "@/public/images/work5.jpeg";
import Work6 from "@/public/images/work6.jpeg";
import Work7 from "@/public/images/work7.jpeg";
import Work8 from "@/public/images/work8.jpeg";
import Work9 from "@/public/images/work9.jpeg";

import Work11 from "@/public/images/work11.jpeg";
import Work12 from "@/public/images/work12.jpeg";
import Work13 from "@/public/images/work13.jpeg";
import Work14 from "@/public/images/work14.jpeg";
import Work15 from "@/public/images/work15.jpeg";
import Work16 from "@/public/images/work16.jpeg";
import Work17 from "@/public/images/work17.jpeg";
import Work18 from "@/public/images/work18.jpeg";
import Work19 from "@/public/images/work19.jpeg";
import Work20 from "@/public/images/work20.jpeg";
import Work21 from "@/public/images/work21.jpeg";
import Work22 from "@/public/images/work22.jpeg";
import Work23 from "@/public/images/work23.jpeg";

import Work25 from "@/public/images/work25.jpeg";
import Work26 from "@/public/images/work26.jpeg";
import Work27 from "@/public/images/work27.jpeg";
import Work28 from "@/public/images/work28.jpeg";
import Work29 from "@/public/images/work29.jpeg";
import { useState } from "react";

interface MasonryItemProps {
  src?: StaticImageData;
  alt: string;
  videoSrc?: string;
  onClick: () => void;
}

export default function GraphicDesign() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);

  const openModal = (content: JSX.Element) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl font-light text-gray-900 mb-12 text-center">Interior Design Portfolio</h1>
        {/* Masonry Layout using CSS Columns */}
        <div className="masonry-container">
          <MasonryItem
            src={Work}
            alt="Project 1"
            onClick={() => openModal(<Image src={Work} alt="Project 1" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            videoSrc="/videos/work1.mp4"
            onClick={() => openModal(<video src="/videos/work1.mp4" controls className="w-full h-auto object-cover rounded-lg" />)}
            alt="ad"
          />
          <MasonryItem
            src={Work2}
            alt="Project 2"
            onClick={() => openModal(<Image src={Work2} alt="Project 2" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Work1}
            alt="Project 3"
            onClick={() => openModal(<Image src={Work1} alt="Project 3" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Work3}
            alt="Project 4"
            onClick={() => openModal(<Image src={Work3} alt="Project 4" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Work4}
            alt="Project 5"
            onClick={() => openModal(<Image src={Work4} alt="Project 5" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Work5}
            alt="Project 6"
            onClick={() => openModal(<Image src={Work5} alt="Project 6" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Work6}
            alt="Project 7"
            onClick={() => openModal(<Image src={Work6} alt="Project 7" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Work7}
            alt="Project 8"
            onClick={() => openModal(<Image src={Work7} alt="Project 8" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            videoSrc="/videos/work2.mp4"
            onClick={() => openModal(<video src="/videos/work2.mp4" controls className="w-full h-auto object-cover rounded-lg" />)}
            alt="ad"
          />
          <MasonryItem
            src={Work8}
            alt="Project 9"
            onClick={() => openModal(<Image src={Work8} alt="Project 9" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Work9}
            alt="Project 10"
            onClick={() => openModal(<Image src={Work9} alt="Project 10" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Work11}
            alt="Project 11"
            onClick={() => openModal(<Image src={Work11} alt="Project 11" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Work12}
            alt="Project 12"
            onClick={() => openModal(<Image src={Work12} alt="Project 12" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Work13}
            alt="Project 13"
            onClick={() => openModal(<Image src={Work13} alt="Project 13" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Work14}
            alt="Project 14"
            onClick={() => openModal(<Image src={Work14} alt="Project 14" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Work15}
            alt="Project 15"
            onClick={() => openModal(<Image src={Work15} alt="Project 15" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            videoSrc="/videos/work3.mp4"
            onClick={() => openModal(<video src="/videos/work3.mp4" controls className="w-full h-auto object-cover rounded-lg" />)}
            alt="ad"
          />
          <MasonryItem
            src={Work16}
            alt="Project 16"
            onClick={() => openModal(<Image src={Work16} alt="Project 16" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Work17}
            alt="Project 17"
            onClick={() => openModal(<Image src={Work17} alt="Project 17" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Work18}
            alt="Project 18"
            onClick={() => openModal(<Image src={Work18} alt="Project 18" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Work19}
            alt="Project 19"
            onClick={() => openModal(<Image src={Work19} alt="Project 19" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Work20}
            alt="Project 20"
            onClick={() => openModal(<Image src={Work20} alt="Project 20" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Work21}
            alt="Project 21"
            onClick={() => openModal(<Image src={Work21} alt="Project 21" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Work22}
            alt="Project 22"
            onClick={() => openModal(<Image src={Work22} alt="Project 22" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Work23}
            alt="Project 23"
            onClick={() => openModal(<Image src={Work23} alt="Project 23" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            videoSrc="/videos/work4.mp4"
            onClick={() => openModal(<video src="/videos/work4.mp4" controls className="w-full h-auto object-cover rounded-lg" />)}
            alt="ad"
          />
          <MasonryItem
            src={Work25}
            alt="Project 25"
            onClick={() => openModal(<Image src={Work25} alt="Project 25" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Work26}
            alt="Project 26"
            onClick={() => openModal(<Image src={Work26} alt="Project 26" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Work27}
            alt="Project 27"
            onClick={() => openModal(<Image src={Work27} alt="Project 27" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Work29}
            alt="Project 29"
            onClick={() => openModal(<Image src={Work29} alt="Project 29" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Work28}
            alt="Project 28"
            onClick={() => openModal(<Image src={Work28} alt="Project 28" layout="responsive" width={400} height={500} />)}
          />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    </div>
  );
}

function MasonryItem({ src, alt, videoSrc, onClick }: MasonryItemProps) {
  if (videoSrc) {
    return (
      <div className="masonry-item cursor-pointer" onClick={onClick}>
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out"
        />
      </div>
    );
  }

  return (
    <div className="masonry-item cursor-pointer" onClick={onClick}>
      {src && alt && (
        <Image
          src={src}
          alt={alt}
          layout="responsive"
          width={400}
          height={500}
          className="object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out"
        />
      )}
    </div>
  );
}
