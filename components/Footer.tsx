import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#FFF0D9] text-gray-800"
      style={{
        background: "linear-gradient(180deg, #FFF0D9 0%, #FFE0B0 100%)",
      }} >
      <div className="max-w-[1300px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
  <div className="relative w-12 h-12 bg-[#F59E0B] rounded-xl flex items-center justify-center">
    <Image
      src="/logo.png"
      alt="Logo"
      fill
      className="object-contain p-2"
      priority
    />
  </div>
  <span className="font-semibold text-lg text-[#F59E0B]">
    Pisau Industri
  </span>
</div>

            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              Spesialis jasa asah & sambung pisau industri untuk kebutuhan
              woodworking, packaging, dan manufaktur.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">
              Menu
            </h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#home" className="hover:text-[#F59E0B] transition">Home</a></li>
              <li><a href="#products" className="hover:text-[#F59E0B] transition">Product</a></li>
              <li><a href="#testimonials" className="hover:text-[#F59E0B] transition">Feedback</a></li>
              <li><a href="#services" className="hover:text-[#F59E0B] transition">Service</a></li>
              <li><a href="#contact" className="hover:text-[#F59E0B] transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">
              Layanan
            </h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Asah Bandsaw</li>
              <li>Sambung Gergaji Pita</li>
              <li>Asah Pisau Profil</li>
              <li>Maintenance Hollow Punch</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">
              Contact
            </h4>

            <div className="space-y-3 text-gray-600 text-sm">
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <p>Bandung, Jawa Barat, Indonesia</p>
              </div>

              <div className="flex gap-2">
                <Phone className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <p>+62 812-3456-7890</p>
              </div>

              <div className="flex gap-2">
                <Mail className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <p>admin@pisaindustri.com</p>
              </div>
            </div>

            <div className="mt-5">
            <div className="w-full h-32 rounded-xl overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15857.11477773966!2d107.04214389999999!3d-6.4863484499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69bd02856afd99%3A0xca2fdd9799d9d890!2sCity%20Park%20Citra%20Indah%20City!5e0!3m2!1sid!2sid!4v1771572986866!5m2!1sid!2sid"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-10 pt-6 border-t border-[#F3D9B5] text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Pisau Industri. All rights reserved. created by
          <a href="https://github.com/zynly" target="_blank" rel="noopener noreferrer" className="hover:text-[#F59E0B] transition"> Paitua__</a>
        </div>
      </div>
    </footer>
  );
}