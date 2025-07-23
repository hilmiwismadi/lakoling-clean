"use client";
import React, { useState } from "react";

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

  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="absolute top-20 left-40 w-[400px] h-[400px] bg-gradient-to-br from-[#1F9DB6] to-[#ffffff00] rounded-full blur-3xl opacity-40 pointer-events-none z-0"></div>
        <div className="absolute top-70 right-20 w-[400px] h-[400px] bg-gradient-to-br from-[#1F9DB6] to-[#ffffff00] rounded-full blur-3xl opacity-40 pointer-events-none z-0"></div>

        {/* Header Section */}

        {/* Overlapping Photo Gallery */}
        <div className="relative h-[800px] mx-auto max-w-6xl scale-[0.8]">
          <div className="absolute -top-[7vw] right-0 p-4 flex flex-col items-end text-[40px]/[45px]">
            <p className=" font-extrabold bg-gradient-to-br from-[#01ACA6] to-[#184980] bg-clip-text text-transparent">
              Past
            </p>
            <p className=" font-extrabold bg-gradient-to-br from-[#01ACA6] to-[#184980] bg-clip-text text-transparent">
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
              {/* Photo Container */}
              <div className="relative w-full h-full">
                {/* Photo Frame */}
                <div className="w-full h-full bg-white/10 backdrop-blur-md p-3 shadow-xl rounded-lg border border-white/40 transform transition-all duration-300 group-hover:shadow-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Hover Overlay with Info */}
                {/* <div className={`absolute inset-0 bg-black bg-opacity-80 rounded-lg flex items-center justify-center p-4 transition-all duration-300 ${
                  hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-white text-center">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm leading-relaxed">{item.description}</p>
                    <div className="mt-3">
                      <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                        Lihat Detail
                      </button>
                    </div>
                  </div>
                </div> */}

                {/* Photo Caption (like Polaroid) */}
                {/* <div className="absolute -bottom-2 left-3 right-3 bg-white p-2 shadow-md">
                  <p className="text-xs text-gray-600 text-center font-medium truncate">
                    {item.title}
                  </p>
                </div> */}
              </div>
            </div>
          ))}

          {/* Decorative Elements */}
        </div>

        {/* Mission Statement */}
        <div className="text-center mt-20 relative z-10">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Misi Lab Komputer Keliling
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Memberikan akses teknologi dan pendidikan digital kepada
              masyarakat di daerah terpencil, membantu mengurangi kesenjangan
              digital, dan memberdayakan komunitas lokal melalui pelatihan
              praktis.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  150+
                </div>
                <div className="text-sm text-gray-500">Lokasi Dikunjungi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-500 mb-1">
                  2000+
                </div>
                <div className="text-sm text-gray-500">Peserta Terlatih</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-sm text-gray-500">Program Selesai</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-500 mb-1">3+</div>
                <div className="text-sm text-gray-500">Tahun Beroperasi</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Bergabung dengan Misi Kami
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
