"use client";

import { Star } from "lucide-react";

const testimonials = [
  { id: 1, name: "Budi Santoso", review: "Hasil asah sangat presisi dan tahan lama. Mesin jadi optimal kembali." },
  { id: 2, name: "Ahmad Wijaya", review: "Pelayanan cepat dan profesional. Sudah jadi langganan perusahaan kami." },
  { id: 3, name: "Jennifer Black", review: "Quality sharpening service with impressive durability." },
  { id: 4, name: "Phillip Colligan", review: "Very responsive support and excellent finishing quality." },
  { id: 5, name: "Rudi Hermawan", review: "Pisau kembali tajam seperti baru. Highly recommended." },
  { id: 6, name: "Dewi Kartika", review: "Sambungan gergaji sangat rapi dan kuat." },
  { id: 7, name: "Colin Mandry", review: "Reliable service for industrial blade maintenance." },
  { id: 8, name: "Hendra Setiawan", review: "Teknisi berpengalaman dan detail dalam pengerjaan." },
  { id: 9, name: "Leslie Brown", review: "Professional and fast turnaround time." },
  { id: 10, name: "Satria Putra", review: "Maintenance rutin membuat mesin kami lebih awet." },
];

export default function Testimonials() {
  const loopingTestimonials = [...testimonials, ...testimonials];

  return (
    <section
    id="Testimonials"
      className="relative py-28 "
      style={{
        background: "linear-gradient(180deg, #FFF0D9 0%, #FFE0B0 100%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-16">
          Produk & Service kami Disukai oleh<br></br> Ribuan Customer.
        </h2>

        <div className="relative ">
          <div className="flex gap-8 marquee">
            {loopingTestimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-[340px] max-w-[380px] bg-white rounded-[36px] p-8 shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex gap-1 text-[#F59E0B] mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" stroke="none" />
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {item.review}
                </p>

                <p className="font-semibold text-gray-900">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          animation: scroll 45s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}