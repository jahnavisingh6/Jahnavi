import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
  variant = 'primary',
  href,
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-pink-400 to-purple-400 text-white hover:shadow-lg shadow-pink-200/50 hover:from-purple-400 hover:to-pink-400',
    secondary: 'bg-gradient-to-r from-lavender-200 to-pink-200 text-gray-700 hover:shadow-lg shadow-lavender-200/50',
    outline: 'border-2 border-pink-300 text-gray-700 hover:bg-pink-50',
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

export default Button; 