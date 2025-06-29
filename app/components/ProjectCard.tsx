import React, { useState } from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  tools: string[];
  tags: string[];
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tools,
  tags,
  link,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="hover-card bg-white/80 backdrop-blur-sm">
      {imageUrl && !imageError && (
        <div className="relative h-64 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transform group-hover:scale-105 transition-transform duration-500"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-400/50 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      <div className="p-6 relative z-10">
        <h3 className="text-2xl font-playfair font-semibold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="pill bg-gradient-to-r from-pink-100 to-lavender-100"
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="pill bg-gradient-to-r from-lavender-100 to-pink-100"
            >
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 
            hover:from-purple-400 hover:to-pink-400 transition-all duration-300 group"
          >
            View Project
            <svg
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 