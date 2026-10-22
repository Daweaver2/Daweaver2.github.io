import React, { useState, useEffect } from 'react';
import './Carousel.css';

const DEFAULT_SLIDES = [
  {
    id: 1,
    title: 'Featured Project 1',
    description: 'A full-stack application built with React, Node, and MySQL.',
    bg: '#1e293b', // Replace with image URL or custom content
  },
  {
    id: 2,
    title: 'Featured Project 2',
    description: 'Desktop software built for high performance and low latency.',
    bg: '#334155',
  },
  {
    id: 3,
    title: 'Featured Project 3',
    description: 'Hardware, microcontrollers, and 3D design projects.',
    bg: '#475569',
  },
];

export default function Carousel({ slides = DEFAULT_SLIDES, autoPlayInterval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides after autoPlayInterval (default 5 seconds)
  useEffect(() => {
    if (!autoPlayInterval) return;

    const timer = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    // Clear interval when user manually changes slide or unmounts component
    return () => clearInterval(timer);
  }, [currentIndex, autoPlayInterval]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
      {/* Navigation Buttons */}
      <button className="carousel-arrow left" onClick={handlePrev} aria-label="Previous Slide">
        &#10094;
      </button>
      <button className="carousel-arrow right" onClick={handleNext} aria-label="Next Slide">
        &#10095;
      </button>

      {/* Carousel Track */}
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(calc(-${currentIndex * 70}% + 15%))`,
          }}
        >
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={slide.id || index}
                className={`carousel-slide ${isActive ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                style={{ backgroundColor: slide.bg }}
              >
                <div className="slide-content">
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}