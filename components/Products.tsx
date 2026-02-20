"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const products = [
  { id: 1, image: "/products/pr1.png" },
  { id: 2, image: "/products/pr2.png" },
  { id: 3, image: "/products/pr3.png" },
  { id: 4, image: "/products/pr4.png" },
];

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Reveal animation (lebih smooth & tidak lebay)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative bg-white py-32"
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* LEFT SIDE */}
          <div
            className={`transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-[56px] leading-tight font-bold text-gray-900">
              <span className="text-[#F59E0B] italic">Eksplor</span>{" "}
              Semua <br />
              Produk.
            </h2>

            <p className="mt-6 text-gray-600 max-w-md leading-relaxed">
              Kebutuhan alat pertukangan kayu & 
              <br />packaging industry.
            </p>

            <a
              href="#contact"
              className="inline-block mt-8 px-8 py-3 bg-[#F59E0B] hover:bg-[#D97706] text-white rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              See All
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 gap-16">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`relative group transition-all duration-700 ease-out ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Floating product */}
                <div className="relative h-44 floating-wrapper">
                  <Image
                    src={product.image}
                    alt="Product"
                    fill
                    className="object-contain transition-all duration-400 group-hover:scale-[1.05]"
                  />
                </div>

                {/* Realistic floating shadow */}
               <div className="floating-shadow absolute bottom-3 left-1/2 -translate-x-1/2 w-40 h-10 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating animation (natural & smooth) */}
      <style jsx>{`
  .floating-wrapper {
    animation: floatNatural 6s ease-in-out infinite;
  }

  .floating-shadow {
    animation: shadowMove 6s ease-in-out infinite;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.35) 0%,
      rgba(0, 0, 0, 0.25) 40%,
      rgba(0, 0, 0, 0.05) 70%,
      transparent 100%
    );
    filter: blur(18px);
  }

  @keyframes floatNatural {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-14px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes shadowMove {
    0% {
      transform: translateX(-50%) scale(1);
      opacity: 0.35;
      filter: blur(18px);
    }
    50% {
      transform: translateX(-50%) scale(0.75);
      opacity: 0.18;
      filter: blur(12px);
    }
    100% {
      transform: translateX(-50%) scale(1);
      opacity: 0.35;
      filter: blur(18px);
    }
  }
`}</style>
    </section>
  );
}