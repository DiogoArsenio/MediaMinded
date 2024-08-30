import Image from "next/image";
import Sara from "@/public/images/sara.jpg"; // Replace with actual project images
// import Project1 from "@/public/images/project1.jpg"; // Replace with actual project images
// import Project2 from "@/public/images/project2.jpg"; // Replace with actual project images
// import Project3 from "@/public/images/project3.jpg"; // Replace with actual project images
// import Project4 from "@/public/images/project4.jpg"; // Replace with actual project images

export default function GraphicDesign() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl font-light text-gray-900 mb-12 text-center">Interior Design Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Images/Videos Column */}
          <div className="space-y-8">
            {/* Project Item */}
            <div className="relative group">
              <Image
                src={Sara}
                alt="Project 1"
                className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* Another Project Item */}
            <div className="relative group">
              <Image
                src={Sara}
                alt="Project 2"
                className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Additional Images/Videos Column */}
          <div className="space-y-8">
            {/* Project Item */}
            <div className="relative group">
              <Image
                src={Sara}
                alt="Project 3"
                className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* Another Project Item */}
            <div className="relative group">
              <Image
                src={Sara}
                alt="Project 4"
                className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
