"use client";
import Image, { StaticImageData } from "next/image";
import Modal from "@/components/modal";
import Wor1 from "@/public/images/wor1.jpg";
import Wor2 from "@/public/images/wor2.jpg";
import Wor3 from "@/public/images/wor3.jpg";
import Wor4 from "@/public/images/wor4.jpg";
import Wor5 from "@/public/images/wor5.jpg";
import Wor6 from "@/public/images/wor6.jpg";
import Wor7 from "@/public/images/wor7.jpg";
import Wor8 from "@/public/images/wor8.jpg";
import Wor9 from "@/public/images/wor9.jpg";
import Wor10 from "@/public/images/wor10.png";
import Wor11 from "@/public/images/wor11.jpg";
import Wor12 from "@/public/images/wor12.jpg";
import Wor13 from "@/public/images/wor13.png";
import Wor14 from "@/public/images/wor14.png";
import Wor15 from "@/public/images/wor15.png";
import Wor16 from "@/public/images/wor16.jpg";
import Wor17 from "@/public/images/wor17.jpg";
import Wor18 from "@/public/images/wor18.jpg";
import Wor19 from "@/public/images/wor19.jpg";
import Wor20 from "@/public/images/wor20.png";
import Wor21 from "@/public/images/wor21.png";
import Wor22 from "@/public/images/wor22.jpg";
import Wor23 from "@/public/images/wor23.jpg";
import Wor24 from "@/public/images/wor24.jpg";
import Wor25 from "@/public/images/wor25.jpg";
import Wor26 from "@/public/images/wor26.jpg";
import Wor27 from "@/public/images/wor27.jpg";
import Wor28 from "@/public/images/wor28.png";
import Wor29 from "@/public/images/wor29.png";
import Wor30 from "@/public/images/wor30.png";

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
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl font-light text-gray-900 mb-12 text-center">Graphic Design Portfolio</h1>
        {/* Masonry Layout using CSS Columns */}
        <div className="masonry-container">
          <MasonryItem
            videoSrc="/videos/wor1.mp4"
            onClick={() => openModal(<video src="/videos/wor1.mp4" controls className="w-full h-auto object-cover rounded-lg" />)}
            alt="ad"
          />
          <MasonryItem
            src={Wor2}
            alt="Project 2"
            onClick={() => openModal(<Image src={Wor2} alt="Project 2" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor1}
            alt="Project 3"
            onClick={() => openModal(<Image src={Wor1} alt="Project 3" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor3}
            alt="Project 4"
            onClick={() => openModal(<Image src={Wor3} alt="Project 4" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor4}
            alt="Project 5"
            onClick={() => openModal(<Image src={Wor4} alt="Project 5" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor5}
            alt="Project 6"
            onClick={() => openModal(<Image src={Wor5} alt="Project 6" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor6}
            alt="Project 7"
            onClick={() => openModal(<Image src={Wor6} alt="Project 7" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor7}
            alt="Project 8"
            onClick={() => openModal(<Image src={Wor7} alt="Project 8" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            videoSrc="/videos/wor2.mp4"
            onClick={() => openModal(<video src="/videos/wor2.mp4" controls className="w-full h-auto object-cover rounded-lg" />)}
            alt="ad"
          />
          <MasonryItem
            src={Wor8}
            alt="Project 9"
            onClick={() => openModal(<Image src={Wor8} alt="Project 9" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor9}
            alt="Project 10"
            onClick={() => openModal(<Image src={Wor9} alt="Project 10" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor10}
            alt="Project 10"
            onClick={() => openModal(<Image src={Wor10} alt="Project 10" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor11}
            alt="Project 11"
            onClick={() => openModal(<Image src={Wor11} alt="Project 11" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor12}
            alt="Project 12"
            onClick={() => openModal(<Image src={Wor12} alt="Project 12" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor13}
            alt="Project 13"
            onClick={() => openModal(<Image src={Wor13} alt="Project 13" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor14}
            alt="Project 14"
            onClick={() => openModal(<Image src={Wor14} alt="Project 14" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor15}
            alt="Project 15"
            onClick={() => openModal(<Image src={Wor15} alt="Project 15" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor16}
            alt="Project 16"
            onClick={() => openModal(<Image src={Wor16} alt="Project 16" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor17}
            alt="Project 17"
            onClick={() => openModal(<Image src={Wor17} alt="Project 17" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor18}
            alt="Project 18"
            onClick={() => openModal(<Image src={Wor18} alt="Project 18" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor19}
            alt="Project 19"
            onClick={() => openModal(<Image src={Wor19} alt="Project 19" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor20}
            alt="Project 20"
            onClick={() => openModal(<Image src={Wor20} alt="Project 20" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor21}
            alt="Project 21"
            onClick={() => openModal(<Image src={Wor21} alt="Project 21" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor22}
            alt="Project 22"
            onClick={() => openModal(<Image src={Wor22} alt="Project 22" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor23}
            alt="Project 23"
            onClick={() => openModal(<Image src={Wor23} alt="Project 23" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor24}
            alt="Project 23"
            onClick={() => openModal(<Image src={Wor24} alt="Project 24" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor25}
            alt="Project 25"
            onClick={() => openModal(<Image src={Wor25} alt="Project 25" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor26}
            alt="Project 26"
            onClick={() => openModal(<Image src={Wor26} alt="Project 26" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor27}
            alt="Project 27"
            onClick={() => openModal(<Image src={Wor27} alt="Project 27" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor29}
            alt="Project 29"
            onClick={() => openModal(<Image src={Wor29} alt="Project 29" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor28}
            alt="Project 28"
            onClick={() => openModal(<Image src={Wor28} alt="Project 28" layout="responsive" width={400} height={500} />)}
          />
          <MasonryItem
            src={Wor30}
            alt="Project 30"
            onClick={() => openModal(<Image src={Wor30} alt="Project 28" layout="responsive" width={400} height={500} />)}
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
