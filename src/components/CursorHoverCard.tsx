"use client";
import { useState } from "react";

interface CursorHoverCardProps {
  backgroundColor?: string;
  size: number;
  blur: number;
  gradientColor?: string;
  children: React.ReactNode;
}

const CursorHoverCard: React.FC<CursorHoverCardProps> = ({
  backgroundColor,
  size,
  blur,
  gradientColor,
  children,
}) => {
  const [showGradient, setShowGradient] = useState(false);
  const [mouseXPercentage, setMouseXPercentage] = useState(0);
  const [mouseYPercentage, setMouseYPercentage] = useState(0);

  const handleMouseEnter = () => {
    setShowGradient(true);
  };

  const handleMouseLeave = () => {
    setShowGradient(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (showGradient) {
      const rect = event.currentTarget.getBoundingClientRect();
      const windowWidth = rect.width;
      const windowHeight = rect.height;

      const newMouseXPercentage = Math.round(
        ((event.clientX - rect.left) / windowWidth) * 100
      );
      const newMouseYPercentage = Math.round(
        ((event.clientY - rect.top) / windowHeight) * 100
      );

      setMouseXPercentage(newMouseXPercentage);
      setMouseYPercentage(newMouseYPercentage);
    }
  };

  const gradientStyle = {
    background: showGradient
      ? `radial-gradient(at ${mouseXPercentage}% ${mouseYPercentage}%, ${gradientColor} ${size}px, rgba(0, 0, 0, 0) ${
          size + blur
        }px)`
      : backgroundColor,
  };

  return (
    <div
      className="radial-gradient  rounded-xl"
      style={gradientStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};

export default CursorHoverCard;
