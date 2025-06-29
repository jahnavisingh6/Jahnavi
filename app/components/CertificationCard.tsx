import React from 'react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  date,
  link,
}) => {
  return (
    <div className="card group hover:scale-[1.02] transition-all duration-300">
      <div className="p-6">
        <h3 className="text-xl font-playfair font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{issuer}</p>
        <p className="text-gray-500 text-sm mb-4">{date}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blush-pink hover:text-blush-pink/80 transition-colors"
          >
            View Certificate →
          </a>
        )}
      </div>
    </div>
  );
};

export default CertificationCard; 