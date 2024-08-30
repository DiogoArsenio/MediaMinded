import Sara from "@/public/images/sara.jpg";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side - Profile Info */}
            <div className="flex flex-col justify-center space-y-6 md:space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-tight animate-fadeIn">
                Hi, I'm <span className="font-semibold">Sara Jacinto</span>,<br />a Creative Designer.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-md animate-fadeIn delay-200">
                I specialize in crafting clean, elegant, and functional designs that resonate with users and make brands shine.
              </p>
              <div className="space-x-4 animate-fadeIn delay-400">
                <a
                  href="#contact"
                  className="border border-gray-900 py-3 px-6 rounded-full text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition duration-300"
                >
                  Contact Me
                </a>
              </div>
            </div>
            {/* Right Side - Image */}
            <div className="relative flex justify-center md:justify-end animate-fadeIn delay-600">
              <img
                src={Sara.src}
                alt="Profile Picture"
                className="w-72 object-cover object-top h-72 rounded-full border-4 border-gray-200 shadow-lg transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-8 animate-fadeIn">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-600 animate-fadeIn delay-200">
            I'm Sara Jacinto, a creative designer with a passion for minimalist, user-centric design. With experience in UI/UX, branding, visual design, and
            interior design, I aim to craft beautiful and functional digital and physical experiences that speak to the audience.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-12 animate-fadeIn">My Skills</h2>
          <div className="flex justify-center flex-wrap gap-12 animate-fadeIn delay-200">
            {/* UI/UX Design Skills */}
            <SkillItem skill="Figma" />
            <SkillItem skill="Adobe XD" />
            <SkillItem skill="Sketch" />

            {/* Graphic Design Skills */}
            <SkillItem skill="Adobe Photoshop" />
            <SkillItem skill="Adobe Illustrator" />
            <SkillItem skill="CorelDRAW" />

            {/* Interior Design Skills */}
            <SkillItem skill="AutoCAD" />
            <SkillItem skill="SketchUp" />
            <SkillItem skill="V-Ray" />
            <SkillItem skill="3ds Max" />
            <SkillItem skill="Blender" />
            <SkillItem skill="D5 Render" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-8 animate-fadeIn">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-4 animate-fadeIn delay-200">
            I'm always open to discuss design projects or potential collaborations. Feel free to reach out via any of the following:
          </p>
          <div className="space-y-4 text-lg text-gray-700 animate-fadeIn delay-400">
            <ContactItem href="mailto:sarajacintodesign@gmail.com" text="sarajacintodesign@gmail.com" external={false} />
            <ContactItem href="https://www.linkedin.com/in/sara-jacinto-2112741b1/" text="linkedin.com/in/sara-jacinto" external />
          </div>
        </div>
      </section>
    </div>
  );
}

function SkillItem({ skill }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-lg font-medium text-gray-700 hover:text-gray-900 transition duration-300">{skill}</span>
    </div>
  );
}

function ContactItem({ href, text, external }) {
  return (
    <div className="flex items-center justify-center space-x-4">
      <a
        href={href}
        target={external ? "_blank" : ""}
        rel={external ? "noopener noreferrer" : ""}
        className="font-medium text-gray-700 hover:text-gray-900 hover:underline transition duration-300"
      >
        {text}
      </a>
    </div>
  );
}
