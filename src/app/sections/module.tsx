"use client";
import React, { useState } from 'react';

interface LearningModule {
  id: number;
  title: string;
  description: string;
  backgroundImage: string;
  backgroundColor: string;
  textColor: string;
  icon: string;
  link: string;
  category: string;
  imageUrl?: string; // Optional image URL
}

const Learning: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const modules: LearningModule[] = [
    {
      id: 1,
      title: "Algoritma & Struktur Data",
      description: "Apaya tulisan apa kek ok sih hrsnya tar dipikirin deh tapi intinya gini dulu ok guys selamat sore. Mmmmmm mmm gimana ya isinya jujur bingung ok bye.",
      backgroundImage: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
      backgroundColor: "bg-gradient-to-br from-sky-400 to-blue-600",
      textColor: "text-white",
      icon: "🔗",
      link: "/modules/algorithms",
      category: "Programming",
      imageUrl: "/images/lakoling-1.png/';." // Add your image path here
    },
    {
      id: 2,
      title: "Web Development",
      description: "Pelajari HTML, CSS, JavaScript dan framework modern untuk membangun website yang interaktif dan responsif.",
      backgroundImage: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
      backgroundColor: "bg-gradient-to-br from-gray-800 to-gray-900",
      textColor: "text-white",
      icon: "💻",
      link: "/modules/web-development",
      category: "Web",
      imageUrl: "/images/learning/web-dev-bg.jpg" // Add your image path here
    },
    {
      id: 3,
      title: "Data Science & AI",
      description: "Eksplorasi dunia data science, machine learning, dan artificial intelligence dengan tools modern.",
      backgroundImage: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)",
      backgroundColor: "bg-gradient-to-br from-blue-700 to-blue-900",
      textColor: "text-white",
      icon: "🤖",
      link: "/modules/data-science",
      category: "AI/ML",
      imageUrl: "/images/learning/data-science-bg.jpg" // Add your image path here
    }
  ];

  const handleCardClick = (link: string) => {
    // Redirect to module link
    window.open(link, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Start Learning!
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Mulai perjalanan belajar Anda dengan modul-modul pembelajaran interaktif yang dirancang khusus untuk mengembangkan skill teknologi Anda.
          </p>
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            <div
              key={module.id}
              className={`group relative h-80 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 transform ${
                hoveredCard === module.id 
                  ? 'scale-105 shadow-2xl -translate-y-2' 
                  : 'shadow-xl hover:shadow-2xl'
              }`}
              onMouseEnter={() => setHoveredCard(module.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(module.link)}
            >
              {/* Background with Image or Gradient */}
              <div className="absolute inset-0">
                {module.imageUrl ? (
                  <>
                    {/* Background Image */}
                    <img 
                      src={module.imageUrl} 
                      alt={module.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Optional: Gradient overlay on image */}
                    <div 
                      className="absolute inset-0 opacity-70"
                      style={{ background: module.backgroundImage }}
                    />
                  </>
                ) : (
                  // Fallback to gradient with pattern if no image
                  <div 
                    className="transition-all duration-500"
                    style={{
                      background: module.id === 1 
                        ? `${module.backgroundImage}, url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='10' r='2'/%3E%3Ccircle cx='10' cy='50' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3Cpath d='M30 10 L50 30 L30 50 L10 30 Z' stroke='%23ffffff' stroke-opacity='0.1' stroke-width='1' fill='none'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        : module.id === 2
                        ? `${module.backgroundImage}, url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3Cpath d='M5 5h30v30H5z' fill='none' stroke='%23ffffff' stroke-opacity='0.1'/%3E%3Cpath d='M10 10h20v20H10z' fill='none' stroke='%23ffffff' stroke-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`
                        : `${module.backgroundImage}, url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M0 0h80v80H0z'/%3E%3Cpath d='M20 20h40v40H20z' fill='none' stroke='%23ffffff' stroke-opacity='0.1'/%3E%3Ccircle cx='40' cy='40' r='15' fill='none' stroke='%23ffffff' stroke-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`
                    }}
                  />
                )}
              </div>

              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-between">
                {/* Top Section - Category & Icon */}
                <div className="flex justify-between items-start">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {module.category}
                  </span>
                  <div className="text-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {module.icon}
                  </div>
                </div>

                {/* Bottom Section - Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors duration-300">
                      {module.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed line-clamp-4">
                      {module.description}
                    </p>
                  </div>

                  {/* Call to Action */}
                  <div className="flex items-center justify-between">
                    <button className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group-hover:bg-cyan-500 group-hover:shadow-lg">
                      Mulai Belajar
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${
                          hoveredCard === module.id ? 'translate-x-1' : ''
                        }`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Progress indicator (optional) */}
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                      <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                      <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 border-2 border-transparent rounded-2xl transition-all duration-300 ${
                hoveredCard === module.id ? 'border-cyan-400 shadow-cyan-400/25' : ''
              }`}></div>

              {/* Shimmer Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                hoveredCard === module.id ? 'animate-pulse' : ''
              }`}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        {/* <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Tidak menemukan modul yang Anda cari?
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Lihat Semua Modul
          </button>
        </div> */}

        {/* Stats Section */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600 text-sm">Modul Pembelajaran</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-500 mb-2">10K+</div>
            <div className="text-gray-600 text-sm">Siswa Aktif</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600 text-sm">Tingkat Kepuasan</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-500 mb-2">24/7</div>
            <div className="text-gray-600 text-sm">Akses Belajar</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Learning;