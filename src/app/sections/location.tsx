'use client';
import React, { useEffect, useRef, useState } from 'react';

interface LakolingLocation {
  id: number;
  name: string;
  address: string;
  coordinates: [number, number]; // [latitude, longitude]
  program: string;
  participants: number;
  date: string;
  description: string;
}

const Locations: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [selectedLocationId, setSelectedLocationId] = useState<number | null>(null);

  // Data 12 lokasi Lakoling di Indonesia
  const locations: LakolingLocation[] = [
    {
      id: 1,
      name: "Pondok Pesantren Al-Hikmah",
      address: "Brebes, Jawa Tengah",
      coordinates: [-6.8731, 109.0324],
      program: "Digital Literacy for Santri",
      participants: 85,
      date: "2024-03-15",
      description: "Pelatihan literasi digital dan komputer dasar untuk santri"
    },
    {
      id: 2,
      name: "SDN Margasari",
      address: "Tegal, Jawa Tengah",
      coordinates: [-6.8694, 109.1402],
      program: "Kids Coding Workshop",
      participants: 45,
      date: "2024-04-02",
      description: "Workshop coding dan robotika untuk siswa sekolah dasar"
    },
    {
      id: 3,
      name: "Desa Wisata Kampung Batik",
      address: "Pekalongan, Jawa Tengah",
      coordinates: [-6.8886, 109.6753],
      program: "Digital Marketing for UMKM",
      participants: 32,
      date: "2024-04-18",
      description: "Pelatihan digital marketing untuk pengrajin batik"
    },
    {
      id: 4,
      name: "SMKN 1 Slawi",
      address: "Slawi, Jawa Tengah",
      coordinates: [-6.9830, 109.1356],
      program: "Web Development Bootcamp",
      participants: 67,
      date: "2024-05-10",
      description: "Bootcamp pengembangan website untuk siswa SMK"
    },
    {
      id: 5,
      name: "Balai Desa Kedungwuni",
      address: "Kedungwuni, Jawa Tengah",
      coordinates: [-6.9667, 109.6483],
      program: "E-Government Training",
      participants: 28,
      date: "2024-05-25",
      description: "Pelatihan sistem pemerintahan digital untuk perangkat desa"
    },
    {
      id: 6,
      name: "Yayasan Pendidikan Sejahtera",
      address: "Pemalang, Jawa Tengal",
      coordinates: [-6.8918, 109.3781],
      program: "Computer Literacy Program",
      participants: 52,
      date: "2024-06-08",
      description: "Program literasi komputer untuk anak-anak kurang mampu"
    },
    {
      id: 7,
      name: "Pondok Pesantren Darul Ulum",
      address: "Bumiayu, Jawa Tengah",
      coordinates: [-7.2550, 109.0297],
      program: "Islamic Digital Content",
      participants: 73,
      date: "2024-06-20",
      description: "Pelatihan pembuatan konten digital islami"
    },
    {
      id: 8,
      name: "Koperasi Tani Makmur",
      address: "Adiwerna, Jawa Tengah",
      coordinates: [-6.9500, 109.0667],
      program: "Agricultural Tech Training",
      participants: 41,
      date: "2024-07-05",
      description: "Pelatihan teknologi pertanian modern"
    },
    {
      id: 9,
      name: "SMA Negeri 2 Brebes",
      address: "Brebes, Jawa Tengah",
      coordinates: [-6.8706, 109.0405],
      program: "AI & Machine Learning Intro",
      participants: 89,
      date: "2024-07-18",
      description: "Pengenalan AI dan machine learning untuk siswa SMA"
    },
    {
      id: 10,
      name: "Pasar Traditional Larangan",
      address: "Larangan, Jawa Tengah",
      coordinates: [-6.9333, 109.3333],
      program: "Digital Payment Workshop",
      participants: 36,
      date: "2024-08-02",
      description: "Workshop pembayaran digital untuk pedagang pasar"
    },
    {
      id: 11,
      name: "Rumah Pintar Komunitas",
      address: "Bojong, Jawa Tengah",
      coordinates: [-6.9167, 109.6167],
      program: "Community Tech Hub",
      participants: 58,
      date: "2024-08-15",
      description: "Pembentukan tech hub komunitas lokal"
    },
    {
      id: 12,
      name: "Masjid Agung Tegal",
      address: "Tegal, Jawa Tengah",
      coordinates: [-6.8705, 109.1244],
      program: "Digital Dakwah Training",
      participants: 64,
      date: "2024-08-30",
      description: "Pelatihan dakwah digital dan media sosial"
    }
  ];

  useEffect(() => {
    // Load Leaflet dynamically
    const loadLeaflet = async () => {
      if (typeof window !== 'undefined' && !window.L) {
        // Load Leaflet CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
        document.head.appendChild(link);

        // Load Leaflet JS
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
        script.onload = initializeMap;
        document.head.appendChild(script);
      } else if (window.L) {
        initializeMap();
      }
    };

    const initializeMap = () => {
      if (mapRef.current && !mapInstanceRef.current) {
        // Initialize map centered on Central Java
        const map = window.L.map(mapRef.current).setView([-6.9, 109.3], 9);

        // Add tile layer
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Custom icon for all locations
        const createCustomIcon = () => {
          return window.L.divIcon({
            className: 'custom-marker',
            html: `
              <div style="
                width: 24px; 
                height: 24px; 
                background-color: #3b82f6; 
                border: 3px solid white; 
                border-radius: 50%; 
                box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
              ">
                <div style="
                  width: 8px; 
                  height: 8px; 
                  background-color: white; 
                  border-radius: 50%;
                "></div>
              </div>
            `,
            iconSize: [24, 24],
            iconAnchor: [12, 12]
          });
        };

        // Add markers for each location
        locations.forEach(location => {
          const marker = window.L.marker(location.coordinates, {
            icon: createCustomIcon()
          }).addTo(map);

          // Add popup
          marker.bindPopup(`
            <div class="p-2 min-w-64">
              <h3 class="font-bold text-lg mb-2">${location.name}</h3>
              <p class="text-gray-600 text-sm mb-2">${location.address}</p>
              <p class="text-blue-600 font-medium text-sm mb-1">${location.program}</p>
              <p class="text-gray-500 text-xs">${location.participants} peserta • ${new Date(location.date).toLocaleDateString('id-ID')}</p>
            </div>
          `);

          // Add click event to highlight in list
          marker.on('click', () => {
            setSelectedLocationId(location.id);
          });
        });

        mapInstanceRef.current = map;
      }
    };

    loadLeaflet();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-slate-800">Lokasi</span>
            <span className="text-blue-600 ml-2">Lakoling</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Jangkauan Lab Komputer Keliling telah mencakup berbagai daerah di Jawa Tengah, 
            membawa teknologi langsung ke masyarakat yang membutuhkan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Map Container - 3/4 proportion */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-96 lg:h-[600px] relative">
                <div ref={mapRef} className="w-full h-full"></div>
              </div>
            </div>
          </div>

          {/* Location List - 1/4 proportion */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 h-fit lg:h-[600px] overflow-hidden flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">Daftar Lokasi</h3>
                <div className="text-sm text-gray-500">
                  {locations.length} lokasi
                </div>
              </div>
              
              {/* Scrollable Location List */}
              <div className="flex-1 overflow-y-auto space-y-3 pr-2">
                {locations.map((location, index) => (
                  <div
                    key={location.id}
                    onClick={() => setSelectedLocationId(location.id)}
                    className={`cursor-pointer p-4 rounded-lg transition-all duration-300 border ${
                      selectedLocationId === location.id
                        ? 'bg-blue-50 border-blue-200 shadow-md'
                        : 'hover:bg-gray-50 border-gray-100 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Number Badge */}
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        selectedLocationId === location.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {index + 1}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 text-sm leading-tight mb-1">
                          {location.name}
                        </h4>
                        <p className="text-gray-500 text-xs mb-2">
                          {location.address}
                        </p>
                        <p className="text-blue-600 text-xs font-medium mb-1">
                          {location.program}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>{location.participants} peserta</span>
                          <span>{new Date(location.date).toLocaleDateString('id-ID', { 
                            month: 'short', 
                            year: 'numeric' 
                          })}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary Stats */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">
                      {locations.length}
                    </div>
                    <div className="text-xs text-gray-500">Total Lokasi</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-500">
                      {locations.reduce((sum, loc) => sum + loc.participants, 0)}
                    </div>
                    <div className="text-xs text-gray-500">Total Peserta</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ingin mengundang Lab Komputer Keliling ke daerah Anda?
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  );
};

export default Locations;