'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiHeart, FiStar, FiCode, FiBook, FiMail, FiArrowUp, FiGithub, FiLinkedin, FiClock, FiTool, FiCheckCircle, FiMapPin, FiBriefcase } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

const projects = [
  {
    title: 'AI-Powered Resume Optimization Tool',
    timeline: 'Spring 2025',
    tech: 'Python, Flask, spaCy, PyResparser, PostgreSQL, Snowflake, AWS (S3, Lambda), OpenAI GPT API',
    description: `This is a full-stack AI-driven web application designed to analyze resumes and job descriptions to enhance job seeker success. I built it to automate resume matching and optimize job application outcomes.\n\n• Used PyResparser and spaCy to extract skills, experiences, and metadata from resumes and job descriptions.\n• Developed an NLP-powered similarity engine (TF-IDF + cosine similarity) to calculate match scores between resumes and job listings.\n• Integrated OpenAI’s GPT API to provide personalized content improvement suggestions like keyword insertion, grammar improvements, and achievement phrasing.\n• Built the frontend in Flask and hosted the app using AWS Lambda and S3, enabling scalable performance.\n• Designed and managed PostgreSQL and Snowflake databases for structured data and user profiles.\n• Achieved over 85% skill extraction accuracy, with match suggestions and updates rendered in under 3 seconds.`,
    result: '🚀 Result: Provided users with actionable insights on resume improvement, matching their profiles to job posts more intelligently and quickly.'
  },
  {
    title: 'Automated Video Processing with YOLO & Custom OCR Engine',
    timeline: 'Summer 2024',
    tech: 'Python, YOLOv5, OpenCV, OCR, PostgreSQL, AWS S3, REST APIs',
    description: `This project focused on extracting container IDs from video frames for a logistics use case.\n\n• Integrated YOLOv5 object detection to detect bounding boxes of containers in real-time video footage.\n• Built a custom OCR engine using OpenCV + pytesseract to extract container numbers from the detected boxes.\n• Images were uploaded to AWS S3, processed via Python, and data extracted from the frames was formatted to JSON.\n• This data was transmitted to a remote server via REST APIs, and stored in a PostgreSQL database for tracking and analysis.`,
    result: '📦 Result: Automated what was once a manual data entry process for container tracking, saving hours of labor and reducing human error.'
  },
  {
    title: 'School Similarity Matching Model',
    timeline: 'Spring 2024',
    tech: 'Python, scikit-learn, pandas, KNN, K-means, t-SNE, cosine similarity',
    description: `Designed to help users discover similar schools based on academic and geographic data.\n\n• Cleaned and preprocessed a dataset of 300+ schools using pandas.\n• Engineered a similarity pipeline using KNN and cosine similarity to find schools that matched user preferences.\n• Applied K-means clustering to group similar institutions based on feature vectors.\n• Used t-SNE for dimensionality reduction and visual clustering to better understand relationships in data.`,
    result: '🎓 Result: Achieved 89% similarity accuracy, enabling useful data-driven recommendations for students or policy makers.'
  },
  {
    title: 'Data Visualization & Reporting for Coffee Shop Chain',
    timeline: 'Spring 2024',
    tech: 'Tableau, Power BI, Tableau Prep Builder, Excel',
    description: `Worked on visualizing and analyzing over 149,000+ transactions from a chain of coffee shops to uncover business insights.\n\n• Conducted ETL (Extract, Transform, Load) using Tableau Prep Builder and Power Query in Excel.\n• Created interactive dashboards in Power BI and Tableau that allowed slicing by revenue, region, products, time, and customer segments.\n• Included visual KPIs, weekly trends, anomalies, and performance summaries for management.`,
    result: '☕ Result: Helped stakeholders understand key revenue drivers and optimize product mix and inventory decisions.'
  },
  {
    title: 'Hotel Reservation System Database',
    timeline: 'Fall 2023',
    tech: 'PostgreSQL',
    description: `Built a fully relational hotel reservation database with robust backend functionality.\n\n• Designed multi-table schema to manage rooms, customers, bookings, payments, and services.\n• Developed stored procedures for automated operations like booking updates, check-ins, and cancellations.\n• Created triggers for auto-calculating revenue and room occupancy rates.\n• Optimized queries for reporting real-time statistics on revenue, occupancy, and guest history.`,
    result: '🏨 Result: Simulated a real-world backend for a hotel management system, improving operations and reporting accuracy.'
  },
  {
    title: 'SIDS Monitoring System (IoT Project)',
    timeline: 'Fall 2022',
    tech: 'Python, Raspberry Pi, sensors, Android App (MIT App Inventor)',
    description: `Developed a Sudden Infant Death Syndrome (SIDS) prevention system using IoT and mobile tech.\n\n• Integrated sensors on Raspberry Pi to monitor infant vital signs such as heartbeat and temperature.\n• Developed an Android app that connected with the device to display real-time data.\n• Built logic for anomaly detection and push alerts to caregivers during emergencies.\n• Implemented cloud data storage for historical data access.`,
    result: '👶 Result: Created a potentially life-saving product concept with real-time monitoring and alerting.'
  },
];

const skills = [
  {
    icon: '🧑‍💻',
    title: 'Programming Languages',
    tags: [
      'Python (Advanced)', 'PyTorch', 'OpenCV', 'pandas', 'NumPy', 'scikit-learn', 'spaCy', 'PyResparser', 'fpdf', 'Matplotlib', 'pytesseract',
      'SQL (PostgreSQL, MySQL)', 'R', 'Bash', 'JavaScript', 'HTML', 'CSS', 'Bootstrap (basic)'
    ],
    color: 'skill-tag-pink',
  },
  {
    icon: '🧠',
    title: 'Machine Learning & AI',
    tags: [
      'Regression-based CNN', 'KNN', 'K-Means Clustering', 't-SNE', 'TF-IDF', 'Cosine Similarity', 'Euclidean Distance',
      'Time Series Analysis', 'Precision', 'Recall', 'F1 Score', 'Feature Engineering', 'Data Cleaning', 'Dimensionality Reduction',
      'Resume Matching', 'NLP Pipelines', 'Statistical Analysis', 'A/B Testing', 'OCR', 'Anomaly Detection'
    ],
    color: 'skill-tag-lavender',
  },
  {
    icon: '🗂️',
    title: 'Data Engineering & Databases',
    tags: [
      'PostgreSQL (Schema, Procedures, Triggers)', 'MySQL', 'Snowflake', 'AWS S3', 'AWS Lambda', 'Flask REST APIs',
      'JSON + API integration', 'ETL: Tableau Prep', 'pandas', 'Excel'
    ],
    color: 'skill-tag-peach',
  },
  {
    icon: '📊',
    title: 'Data Visualization & BI',
    tags: [
      'Power BI', 'Tableau', 'Tableau Prep Builder', 'Excel (Pivot, VLOOKUP, Macros)', 'Matplotlib', 'Seaborn'
    ],
    color: 'skill-tag-pink',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    tags: [
      'AWS: S3, Lambda, EC2, Redshift, EMR, Kinesis, Firehose, IAM', 'Docker (basic)', 'Git & GitHub', 'Heroku', 'Kafka', 'ZeroMQ', 'Databricks', 'GCP (learning)'
    ],
    color: 'skill-tag-lavender',
  },
  {
    icon: '🧠',
    title: 'Natural Language Processing',
    tags: [
      'spaCy', 'PyResparser', 'TF-IDF', 'Cosine Similarity', 'OpenAI GPT APIs', 'Resume Parsing', 'ChatGPT', 'NER'
    ],
    color: 'skill-tag-peach',
  },
  {
    icon: '🔧',
    title: 'Tools & IDEs',
    tags: [
      'Jupyter Notebook', 'Anaconda', 'VS Code', 'MS Office (Excel)', 'Photoshop', 'Canva'
    ],
    color: 'skill-tag-pink',
  },
  {
    icon: '🤖',
    title: 'Embedded / IoT & Image Systems',
    tags: [
      'Raspberry Pi', 'Tinker Board integration', 'Spectroscope programming', 'Camera-based inspection systems',
      'Machine vision cameras', 'Point Cloud (laser profiling)', 'Real-time image streaming (OpenCV)', 'IoT-based monitoring (SIDS)'
    ],
    color: 'skill-tag-lavender',
  },
];

const experiences = [
  {
    company: 'AI4M Technology Pvt. Ltd.',
    role: 'Machine Vision & Automation Intern',
    duration: 'January 2023 – July 2023',
    location: 'Pune, India',
    focus: 'Computer Vision, Automation, Deep Learning, Real-time Systems, AWS, PostgreSQL, Embedded Hardware',
    icon: '💼',
    projects: [
      {
        name: 'Online Coating Weight Estimation System (OCWES)',
        color: 'bg-purple-50',
        goal: 'Automate the measurement and reporting of coating weights in manufacturing using image processing and machine learning.',
        contributions: [
          'Built a Python-based automation pipeline for generating coating reports using the fpdf library.',
          'Integrated the report system with AWS S3 for secure storage and Lambda to trigger email alerts, cutting down manual intervention significantly.',
          'Developed and optimized a PostgreSQL database schema to store, retrieve, and query coating weight data for each batch.',
          'Used PyTorch, OpenCV, and NumPy to preprocess spectroscopic images, applying filters like Gaussian blur and edge detection to enhance feature clarity.',
          'Trained a regression-based convolutional neural network (CNN) to estimate continuous coating weights from visual input data — this eliminated the need for manual binning or operator inference.',
          'Worked on high-speed data collection from hardware-integrated systems such as Raspberry Pi and Tinker Boards, improving sampling accuracy.',
          'Ensured precise calibration of spectroscope sensors and built logic for real-time scientific data acquisition.'
        ],
        impact: '🧪 Impact: Reduced manual QA processes by over 70% and enabled scalable, automated quality control for a production environment.'
      },
      {
        name: 'Automated Surface Inspection',
        color: 'bg-yellow-50',
        goal: 'Replace manual defect inspection with an AI-powered, real-time system for surface quality assurance.',
        contributions: [
          'Designed a real-time video processing pipeline using segmentation models to detect multiple types of surface defects.',
          'Integrated machine vision cameras with hardware systems to capture high-resolution, real-time frames.',
          'Applied ROI (Region of Interest) extraction and image enhancement techniques (noise filtering, contrast enhancement) using OpenCV to isolate problem areas.',
          'Cleaned and structured data using NumPy and pandas for training and evaluation.',
          'Implemented Kafka for streaming sensor and image data in real-time, ensuring low-latency updates across distributed systems.',
          'Used ZeroMQ (ZMQ) as a lightweight message-passing interface to enable high-speed communication between system modules.',
          'Collaborated on point cloud creation using laser-based profiling to capture surface texture in 3D.'
        ],
        impact: '⚙️ Impact: Increased defect detection accuracy by 75%, enabling real-time alerts and reducing inspection delays and quality lapses on the production line.'
      }
    ]
  },
  {
    company: 'S-Cube Storage Systems Pvt. Ltd.',
    role: 'Infrastructure Intern',
    duration: 'June 2022 – July 2022',
    location: 'Pune, India',
    focus: 'Storage Architecture, Data Security, Infrastructure Planning',
    icon: '🧷',
    projects: [
      {
        name: 'Infrastructure & Data Security',
        color: 'bg-blue-50',
        goal: 'Improve scalable storage and data security systems for mid-size clients.',
        contributions: [
          'Assisted in analyzing client infrastructure needs for scalable storage and data security systems.',
          'Helped design storage frameworks for backup, replication, and access control across distributed environments.',
          'Supported the deployment of secure storage policies using access control rules and encryption methods.',
          'Gained hands-on exposure to on-prem and hybrid cloud environments.'
        ],
        impact: '🛡️ Impact: Contributed to improving the company\'s ability to scale secure, reliable data infrastructure solutions for mid-size clients.'
      }
    ]
  }
];

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
              className="object-cover object-top"
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

      {/* Education Section */}
      <section id="education" className="py-20 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">
            <span className="text-2xl">🏫</span> Education
          </h2>
          <div className="flex flex-col gap-8">
            {/* ASU */}
            <div className="card bg-purple-50">
              <h3 className="text-lg font-semibold mb-1">Arizona State University</h3>
              <div className="text-pink-500 mb-1">Master of Science in Information Technology<br/>(Information Systems Management)</div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span>📍 Tempe, AZ</span> <span>—</span> <span>GPA: 3.87/4.0</span>
              </div>
              <div className="text-sm text-purple-600 font-semibold mb-1">Relevant Coursework:</div>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Advanced Big Data Analytics & AI</li>
                <li>Analyzing Big Data</li>
                <li>Natural Language Processing</li>
                <li>Cloud Architecture</li>
                <li>Data Visualization & Reporting</li>
                <li>Advanced DBMS</li>
                <li>Information Systems Development</li>
              </ul>
            </div>
            {/* SIT */}
            <div className="card bg-pink-50">
              <h3 className="text-lg font-semibold mb-1">Symbiosis Institute of Technology</h3>
              <div className="text-pink-500 mb-1">B.Tech. in Electronics & Telecommunications</div>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span>📍 Pune, India</span> <span>—</span> <span>GPA: 3.5/4.0</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">
            <FiStar className="section-title-icon" />
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((group, idx) => (
              <div key={group.title} className="card">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">{group.icon}</span> {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map((skill, i) => (
                    <span key={i} className={`skill-tag ${group.color}`}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
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
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={exp.company} className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{exp.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-0">{exp.company}</h3>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-pink-500 mb-2 items-center">
                  <FiBriefcase /> <span>{exp.role}</span>
                  <FiClock /> <span>{exp.duration}</span>
                  <FiMapPin /> <span>{exp.location}</span>
                </div>
                <div className="text-xs text-purple-500 mb-4">Focus: {exp.focus}</div>
                <div className="space-y-8">
                  {exp.projects.map((proj, pidx) => (
                    <div key={proj.name} className={`rounded-xl p-6 shadow-sm border-l-4 ${proj.color} border-pink-200`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{exp.icon}</span>
                        <span className="font-semibold text-gray-700">{proj.name}</span>
                      </div>
                      <div className="text-sm text-gray-500 mb-2 italic">Goal: {proj.goal}</div>
                      <ul className="list-disc list-inside text-gray-600 mb-2 space-y-1">
                        {proj.contributions.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                      <div className="text-green-600 font-medium flex items-center gap-2">
                        <FiCheckCircle className="text-green-400" />
                        <span>{proj.impact}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
            {projects.map((project, idx) => (
              <div key={project.title} className="card relative">
                <div className="flex items-center gap-2 mb-2">
                  <FiBook className="text-pink-400" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-0">{project.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-pink-500 mb-2">
                  <FiClock />
                  <span>{project.timeline}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-purple-500 mb-2">
                  <FiTool />
                  <span>{project.tech}</span>
                </div>
                <div className="text-gray-600 whitespace-pre-line mb-2">
                  {project.description}
                </div>
                <div className="text-green-600 font-medium flex items-center gap-2">
                  <FiCheckCircle className="text-green-400" />
                  <span>{project.result}</span>
                </div>
              </div>
            ))}
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
