"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to next section
  const scrollToNext = () => {
    const nextSection = document.querySelector('#next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If no specific section, scroll down by viewport height
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Program', href: '#programs' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Kontak', href: '#contact' }
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#01ACA6] to-[#184980] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-[#184980]">Lakoling</h1>
                  <p className="text-xs text-gray-600 -mt-1">Lab Komputer Keliling</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-[#01ACA6] px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-gray-50 rounded-lg"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Button */}
            <div className="hidden md:block">
              <button className="bg-gradient-to-r from-[#01ACA6] to-[#184980] text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105">
                Hubungi Kami
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-[#01ACA6] p-2 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#01ACA6] block px-3 py-2 text-base font-medium hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 pb-2">
                <button className="w-full bg-gradient-to-r from-[#01ACA6] to-[#184980] text-white px-6 py-2 rounded-full text-sm font-medium">
                  Hubungi Kami
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/lakoling-hero.png')`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="space-y-6">
            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-white">LAKOLING</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-light mt-2">
                Lab Komputer Keliling
              </span>
            </h1>

            {/* Subtitle */}
            <div className="space-y-2 text-lg md:text-xl lg:text-2xl font-bold">
              <p>Dari desa, untuk desa.</p>
              <p className="font-bold">Gratis. Aksesibel. Nyata.</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button className="bg-gradient-to-r from-[#01ACA6] to-[#184980] text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Mulai Sekarang
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-[#184980] transition-all duration-300">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-white text-sm font-medium mb-2 tracking-wider">
            SCROLL DOWN
          </div>
          <button 
            onClick={scrollToNext}
            className="text-white hover:text-[#01ACA6] transition-colors duration-300 focus:outline-none"
            aria-label="Scroll to next section"
          >
            <ChevronDown 
              size={32} 
              className="animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300" 
            />
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-[#01ACA6]/20 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-[#184980]/20 to-transparent rounded-full blur-xl"></div>
      </section>

      
    </>
  );
};

export default Hero;