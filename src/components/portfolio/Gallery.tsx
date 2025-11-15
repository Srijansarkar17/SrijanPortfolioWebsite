"use client";
import { useRef } from "react";
import DomeGallery from "@/components/ui/DomeGallery";

// Your project images - replace these with your actual project images
const PROJECT_IMAGES = [
  {
    src: '/public/static/img1.jpeg',
    alt: 'AI Project 1'
  },
  {
    src: '/public/static/img2.jpeg',
    alt: 'Machine Learning Model'
  },
  {
    src: '/public/static/img3.jpeg',
    alt: 'Neural Network Visualization'
  },
  {
    src: '/public/static/img4.jpeg',
    alt: 'Data Analysis Dashboard'
  },
  {
    src: '/public/static/img5.jpeg',
    alt: 'Computer Vision Project'
  },
  {
    src: '/public/static/img6.jpeg',
    alt: 'Deep Learning Architecture'
  },
  {
    src: '/public/static/img7.jpeg',
    alt: 'AI Application Interface'
  },
  // Add more of your project images here
  {
    src: '/public/static/img8.jpg',
    alt: 'Code Implementation'
  },
  {
    src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'AI Deployment'
  }
];

export const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  return (
    <section id="gallery" className="min-h-screen py-20 px-4 relative overflow-hidden bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90 z-0" />
      
      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Explore my journey through this interactive 3D gallery. 
            Click and drag to navigate, and click on any image to view it in detail.
          </p>
        </div>

        {/* Dome Gallery Container */}
        <div 
          ref={galleryRef}
          className="w-full h-[70vh] min-h-[500px] max-h-[800px] rounded-2xl overflow-hidden bg-background/50 backdrop-blur-sm"
        >
          <DomeGallery
            images={PROJECT_IMAGES}
            fit={0.7}
            fitBasis="auto"
            minRadius={400}
            maxRadius={800}
            padFactor={0.15}
            overlayBlurColor="hsl(220 20% 7%)"
            maxVerticalRotationDeg={10}
            dragSensitivity={25}
            enlargeTransitionMs={400}
            segments={40}
            dragDampening={1.5}
            openedImageWidth="500px"
            openedImageHeight="500px"
            imageBorderRadius="16px"
            openedImageBorderRadius="20px"
            grayscale={false}
          />
        </div>

        {/* Gallery Info */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Interactive 3D Gallery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>Click & Drag to Navigate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>Click Images to Enlarge</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};