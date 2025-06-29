'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiHeart, FiStar, FiCode, FiBook, FiMail, FiArrowUp, FiGithub, FiLinkedin } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8 relative mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg animate-float">
            <Image
              src="/profile.JPG"
              alt="Jahnavi Singh"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Jahnavi Singh
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 flex items-center justify-center gap-2">
            <HiSparkles className="text-pink-400" />
            Data-Driven Dreamer 💻✨
            <HiSparkles className="text-pink-400" />
          </p>
          <div className="flex items-center justify-center gap-4 mb-8 text-gray-600">
            <a href="mailto:jahnavisingh6@gmail.com" className="hover:text-pink-400 transition-colors">
              jahnavisingh6@gmail.com
            </a>
            <span>•</span>
            <a href="tel:+16025743737" className="hover:text-pink-400 transition-colors">
              (602) 574-3737
            </a>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="https://linkedin.com/in/jahnavisingh6"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/80 hover:bg-pink-50 transition-all duration-300"
            >
              <FiLinkedin className="w-6 h-6 text-gray-600 hover:text-pink-400" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/80 hover:bg-pink-50 transition-all duration-300"
            >
              <FiGithub className="w-6 h-6 text-gray-600 hover:text-pink-400" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">
            <FiHeart className="section-title-icon" />
            About Me
          </h2>
          <div className="card">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Data Scientist and AI Engineer pursuing my Master's in Information Technology at Arizona State University. 
              With a strong foundation in machine learning, computer vision, and data engineering, I love creating innovative solutions 
              that bridge the gap between data and real-world applications. When I'm not coding, you'll find me exploring new AI technologies 
              and mentoring others in their tech journey! ✨
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">
            <FiStar className="section-title-icon" />
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-pink-400">Programming & Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'R', 'SQL', 'JavaScript', 'Bash'].map((skill, index) => (
                  <span key={index} className="skill-tag skill-tag-pink">{skill}</span>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Data Engineering & ML</h3>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'AWS', 'TensorFlow', 'PyTorch', 'scikit-learn'].map((skill, index) => (
                  <span key={index} className="skill-tag skill-tag-lavender">{skill}</span>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'Kafka', 'Power BI', 'Tableau'].map((skill, index) => (
                  <span key={index} className="skill-tag skill-tag-peach">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">
            <FiCode className="section-title-icon" />
            Experience
          </h2>
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-800">AI4M Technology Pvt. Ltd.</h3>
            <p className="text-pink-400 mb-4">Intern • January 2023 – July 2023</p>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Online Coating Weight Estimation System (OCWES)</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Automated report generation using Python and FPDF library</li>
                  <li>Processed spectroscopic images with PyTorch and OpenCV</li>
                  <li>Developed PostgreSQL database schema</li>
                  <li>Trained regression-based CNN for predictions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Automated Surface Inspection</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Engineered real-time video processing pipeline</li>
                  <li>Enhanced defect detection accuracy by 75%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">
            <FiBook className="section-title-icon" />
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">AI-Powered Resume Builder</h3>
              <p className="text-gray-600 mb-4">
                Built a full-stack AI-driven resume optimization tool with 85% skill extraction accuracy.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag skill-tag-pink">Python</span>
                <span className="skill-tag skill-tag-lavender">NLP</span>
                <span className="skill-tag skill-tag-peach">AWS</span>
              </div>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Video Processing with YOLO & OCR</h3>
              <p className="text-gray-600 mb-4">
                Developed a PostgreSQL-backed pipeline for container number extraction using YOLO.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag skill-tag-pink">Computer Vision</span>
                <span className="skill-tag skill-tag-lavender">YOLO</span>
                <span className="skill-tag skill-tag-peach">OCR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">
            <FiMail className="section-title-icon" />
            Let's Connect
          </h2>
          <div className="card">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="input-field"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="input-field"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="input-field"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-pink-400 to-purple-400
                text-white font-medium hover:from-purple-400 hover:to-pink-400 transition-all duration-300
                hover:shadow-lg shadow-pink-200/50 flex items-center justify-center gap-2"
              >
                <FiHeart className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-pink-400 text-white rounded-full p-3 shadow-lg
          hover:bg-pink-500 transition-all duration-300 hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <FiArrowUp className="w-6 h-6" />
        </button>
      )}
    </main>
  );
}
