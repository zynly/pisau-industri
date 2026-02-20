"use client";

import Image from "next/image";

export default function CTA() {
  return (
    <section id="contact" className="bg-white py-20">
  <div className="max-w-[1300px] mx-auto px-6">
    <div
      className="relative 
                 rounded-[50px]
                 px-16 py-12
                 flex items-center justify-between
                 overflow-visible"
                 style={{
        background: "linear-gradient(180deg, #FFF0D9 0%, #FFE0B0 100%)",
      }}
    >
      {/* IMAGE */}
      <div className="absolute left top-1/2 -translate-y-1/2 w-[360px] h-[360px]">
        <Image
          src="/tools.png"
          alt="Tools"
          fill
          className="object-contain scale-110"
          priority
        />
      </div>

      {/* Spacer */}
      <div className="w-[35%]" />

      {/* Content */}
      <div className="w-[60%]">
        <h2 className="text-[30px] font-bold text-gray-900 leading-tight">
          Melayani Jasa Asah & <br /> Sambung Pisau Industri.
        </h2>

        <div className="mt-6">
          <input
            type="text"
            placeholder="Nomor Whatsapp"
            className="w-full bg-white rounded-full px-6 py-4
                       shadow-sm outline-none text-gray-700"
          />

          <button
            className="mt-4 px-6 py-3 bg-[#F59E0B]
                       hover:bg-[#D97706]
                       text-white rounded-full
                       shadow-md transition-all duration-300"
          >
            Contact Now!
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}