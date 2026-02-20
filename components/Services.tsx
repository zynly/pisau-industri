"use client";

import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Asah Bandsaw",
    subtitle: "(Gergaji Pita)",
    image: "/services/s1.png",
  },
  {
    id: 2,
    title: "Jasa Sambung",
    subtitle: "Gergaji Putus",
    image: "/services/s2.png",
  },
  {
    id: 3,
    title: "Jasa Asah Pisau",
    subtitle: "Profil",
    image: "/services/s3.png",
  },
  {
    id: 4,
    title: "Jasa Maintenance",
    subtitle: "Hollow Punch",
    image: "/services/s4.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#ffffff] py-16">
  <div className="max-w-[1300px] mx-auto px-6">
    
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-[34px] font-bold text-gray-900">
        <span className="text-[#F59E0B] italic">Jasa</span> Asah & Sambung
      </h2>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service) => (
        <div
          key={service.id}
          className="bg-white rounded-[18px] 
                     shadow-[0_8px_18px_rgba(0,0,0,0.08)] 
                     hover:shadow-[0_16px_30px_rgba(0,0,0,0.12)]
                     transition-all duration-300 
                     hover:-translate-y-1
                     p-6 text-center"
        >
          {/* Image */}
          <div className="relative h-48 mb-4 flex items-center justify-center">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-contain scale-110"
            />
          </div>

          <h3 className="text-base font-semibold text-gray-900">
            {service.title}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {service.subtitle}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}