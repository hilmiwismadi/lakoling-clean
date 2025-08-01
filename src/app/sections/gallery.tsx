"use client";
import React, { useState, useEffect } from "react";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  description: string;
  position: {
    top: string;
    left: string;
    rotation: string;
    zIndex: number;
    width: string;
    height: string;
  };
}

const Gallery: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Data foto kegiatan Lab Komputer Keliling dengan posisi overlapping
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: "/images/lakoling-1.png",
      title: "Pelatihan Digital untuk Santri",
      description:
        "Kegiatan pelatihan komputer dan digital marketing untuk santri",
      position: {
        top: "10%",
        left: "5%",
        rotation: "-8deg",
        zIndex: 1,
        width: "300px",
        height: "200px",
      },
    },
    {
      id: 2,
      image: "/images/lakoling-1.png",
      title: "Workshop Coding Anak",
      description: "Mengajarkan dasar-dasar programming kepada anak-anak",
      position: {
        top: "25%",
        left: "25%",
        rotation: "5deg",
        zIndex: 2,
        width: "280px",
        height: "190px",
      },
    },
    {
      id: 3,
      image: "/images/lakoling-1.png",
      title: "Lab Keliling di Desa",
      description: "Membawa teknologi langsung ke desa-desa terpencil",
      position: {
        top: "5%",
        left: "45%",
        rotation: "12deg",
        zIndex: 3,
        width: "320px",
        height: "220px",
      },
    },
    {
      id: 4,
      image: "/images/lakoling-1.png",
      title: "Pelatihan Komunitas",
      description: "Workshop teknologi untuk komunitas lokal",
      position: {
        top: "40%",
        left: "15%",
        rotation: "-12deg",
        zIndex: 4,
        width: "290px",
        height: "200px",
      },
    },
    {
      id: 5,
      image: "/images/lakoling/kids-learning.jpg",
      title: "Belajar Komputer Anak",
      description: "Anak-anak antusias belajar komputer",
      position: {
        top: "50%",
        left: "40%",
        rotation: "8deg",
        zIndex: 5,
        width: "310px",
        height: "210px",
      },
    },
    {
      id: 6,
      image: "/images/lakoling/collaboration.jpg",
      title: "Kerjasama Institusi",
      description: "Kolaborasi dengan berbagai lembaga pendidikan",
      position: {
        top: "20%",
        left: "65%",
        rotation: "-5deg",
        zIndex: 6,
        width: "270px",
        height: "180px",
      },
    },
    {
      id: 7,
      image: "/images/lakoling/setup-equipment.jpg",
      title: "Persiapan Peralatan",
      description: "Tim sedang menyiapkan peralatan lab keliling",
      position: {
        top: "60%",
        left: "10%",
        rotation: "15deg",
        zIndex: 7,
        width: "300px",
        height: "200px",
      },
    },
    {
      id: 8,
      image: "/images/lakoling/presentation.jpg",
      title: "Presentasi Materi",
      description: "Sesi presentasi dan diskusi dengan peserta",
      position: {
        top: "35%",
        left: "70%",
        rotation: "-10deg",
        zIndex: 8,
        width: "285px",
        height: "195px",
      },
    },
  ];

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const renderDesktopGallery = () => (
    <div className="relative h-[800px] mx-auto max-w-6xl scale-[0.8]">
      <div className="absolute -top-[vw] right-0 p-4 flex flex-col items-end text-[40px]/[45px]">
        <p className="font-extrabold bg-gradient-to-br from-[#01ACA6] to-[#184980] bg-clip-text text-transparent">
          Past
        </p>
        <p className="font-extrabold bg-gradient-to-br from-[#01ACA6] to-[#184980] bg-clip-text text-transparent">
          Projects
        </p>
      </div>

      {galleryItems.map((item) => (
        <div
          key={item.id}
          className={`absolute cursor-pointer transition-all duration-500 ease-out group ${
            hoveredItem === item.id ? "z-50" : ""
          }`}
          style={{
            top: item.position.top,
            left: item.position.left,
            transform: `rotate(${item.position.rotation}) ${
              hoveredItem === item.id ? "scale(1.1)" : "scale(1)"
            }`,
            zIndex: hoveredItem === item.id ? 50 : item.position.zIndex,
            width: item.position.width,
            height: item.position.height,
          }}
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-white/10 backdrop-blur-md p-3 shadow-xl rounded-lg border border-white/40 transform transition-all duration-300 group-hover:shadow-2xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Alternative 1: Simple Card Stack with Fade Transition
  const renderCardStack = () => (
    <div className="relative w-full max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold bg-gradient-to-br from-[#01ACA6] to-[#184980] bg-clip-text text-transparent">
          Past Projects
        </h2>
      </div>

      {/* Card Stack Container */}
      <div className="relative h-[500px] rounded-2xl overflow-hidden">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 transform scale-100' 
                : 'opacity-0 transform scale-95'
            }`}
          >
            <div className="h-full bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 overflow-hidden">
              <div className="h-[60%] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 h-[40%] flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex space-x-2">
          {galleryItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gradient-to-r from-[#01ACA6] to-[#184980] scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );

  // Alternative 2: Vertical Scrolling Grid
  const renderVerticalGrid = () => (
    <div className="w-full max-w-lg mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold bg-gradient-to-br from-[#01ACA6] to-[#184980] bg-clip-text text-transparent">
          Past Projects
        </h2>
      </div>

      {/* Scrollable Grid */}
      <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Alternative 3: CSS-only Horizontal Scroll
  const renderHorizontalScroll = () => (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold bg-gradient-to-br from-[#01ACA6] to-[#184980] bg-clip-text text-transparent">
          Past Projects
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        <div className="flex space-x-6 px-4" style={{ width: 'max-content' }}>
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-80 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/40 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center mt-4 text-sm text-gray-500">
        ← Scroll horizontally to see more →
      </div>
    </div>
  );

  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Background Elements */}
        
        {/* Conditional Rendering */}
        <div className="relative z-10">
          {isMobile ? (
            // Choose one of these alternatives:
            renderCardStack()        // Option 1: Card stack with fade
            // renderVerticalGrid()  // Option 2: Vertical scrolling
            // renderHorizontalScroll() // Option 3: Horizontal scroll
          ) : (
            renderDesktopGallery()
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;