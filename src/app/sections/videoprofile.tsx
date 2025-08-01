"use client";
import React, { useState } from "react";

const Videoprofile1: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Video Profile Cards */}
        <div className="relative flex justify-center items-center py-8">
          <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%] relative">
            {/* Teks atas */}
            <p className="absolute -top-8 md:-top-12 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-br from-[#01ACA6] to-[#184980] bg-clip-text text-transparent">
              Meet Our...
            </p>
            <img
              src="/images/Rectangle-61.png"
              alt="Lakoling Logo"
              className="h-25 w-auto absolute -top-12  -right-15 "
            />

            <div className="rounded-2xl overflow-hidden shadow-lg relative">
              <div style={{ aspectRatio: "16 / 9" }}>
                <iframe
                  src="https://www.youtube.com/embed/m9e_botrenc"
                  title="Memahami Mindfulness"
                  allowFullScreen
                  className="w-full h-full"
                  onLoad={() => setIsVideoLoaded(true)}
                />
              </div>

              {/* Loader */}
              {!isVideoLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-[#01ACA6] flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-lg font-semibold">Memuat video...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Teks bawah */}
            <p className="absolute -bottom-8 md:-bottom-12 right-0 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-br from-[#01ACA6] to-[#184980] bg-clip-text text-transparent">
              Local Hero!
            </p>
            <img
              src="/images/Rectangle-62.png"
              alt="Lakoling Logo"
              className="h-25 w-auto absolute -bottom-12 -left-20 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videoprofile1;
