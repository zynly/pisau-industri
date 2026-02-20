"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollDown = () => {
    const next = document.getElementById("products");
    next?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-40"
      style={{
        background:
          "linear-gradient(180deg, #FFF0D9 0%, #FFE8C2 60%, #FFF0D9 100%)",
      }}
    >
      {/* Decorative dots */}
      <span className="absolute top-28 left-20 w-4 h-4 bg-[#F59E0B]/20 rounded-full"></span>
      <span className="absolute top-52 left-1/2 w-3 h-3 bg-[#F59E0B]/20 rounded-full"></span>
      <span className="absolute bottom-52 left-32 w-5 h-5 bg-[#F59E0B]/20 rounded-full"></span>

      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-center gap-20">
          {/* LEFT SIDE */}
          <div className="relative flex justify-center">
            {/* Background Circle */}
            <div
              className="absolute w-[450px] h-[450px] bg-[#F59E0B]/20 rounded-full"
              style={{ transform: `translateY(${offsetY * 0.3}px)` }}
            />

            {/* Floating Image */}
            <div className="relative w-[390px] h-[390px] animate-float z-10">
              <Image
                src="/hero.png"
                alt="Circular Saw"
                fill
                priority
                className="object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.25)]"
              />
            </div>

            {/* Realistic Ground Shadow */}
            <div className="absolute bottom-4 w-72 h-16 bg-black/30 blur-3xl rounded-full opacity-40"></div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <h1 className="text-[48px] leading-tight font-bold text-gray-900">
              <span className="text-[#F59E0B] italic">Spesialis</span>{" "}
              Pisau Kayu,
              <br />
              Pisau Industry umum
              <br />
              dan Packaging
            </h1>

            <p className="mt-6 text-gray-600 max-w-xl leading-relaxed">
              Menjual berbagai macam kebutuhan alat pertukangan kayu,
              packaging industry, menerima jasa asah dan sambung, buat
              baru atau ganti mata pisau.
            </p>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              className="inline-flex items-center gap-2 mt-8 bg-[#F59E0B] hover:bg-[#D97706] text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:scale-105"
            >
              Contact Now!
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        onClick={scrollDown}
        className="absolute left-1/2 bottom-6 -translate-x-1/2"
      >
        <div className="w-16 h-16 bg-white shadow-xl rounded-full flex items-center justify-center animate-bounce hover:scale-110 transition">
          <ArrowDown size={22} />
        </div>
      </div>

      {/* Floating animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-18px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}