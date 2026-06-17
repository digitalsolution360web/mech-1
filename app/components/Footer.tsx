import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div>
              <Image
                src="/logo (2).webp"
                alt="Mechnova"
                width={180}
                height={55}
                className="object-contain"
              />
              <div className="w-12 h-0.5 bg-[#3d9fd8] mt-4 rounded-full"></div>
            </div>
            <p className="text-[#8899aa] text-sm leading-relaxed font-medium max-w-xs">
              Premium agricultural machinery for modern farming. Built for performance, designed for durability.
            </p>

            {/* Social Icons */}
            <div>
              <p className="text-[10px] font-black tracking-[0.25em] uppercase text-[#8899aa] mb-4">Follow Us</p>
              <div className="flex items-center gap-3">
                {[
                  { icon: "fa-facebook-f", href: "#", color: "hover:bg-blue-600 hover:border-blue-600" },
                  { icon: "fa-instagram", href: "#", color: "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:border-pink-500" },
                  { icon: "fa-x-twitter", href: "#", color: "hover:bg-gray-900 hover:border-gray-700" },
                  { icon: "fa-youtube", href: "#", color: "hover:bg-red-600 hover:border-red-600" },
                  { icon: "fa-whatsapp", href: "#", color: "hover:bg-green-500 hover:border-green-500" },
                ].map((s) => (
                  <Link
                    key={s.icon}
                    href={s.href}
                    className={`w-10 h-10 rounded-full border border-[#2a3f55] text-[#8899aa] hover:text-white flex items-center justify-center transition-all duration-300 ${s.color}`}
                  >
                    <i className={`fa-brands ${s.icon} text-sm`}></i>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-black tracking-[0.25em] uppercase text-white mb-4">Quick Links</h3>
              <div className="w-8 h-0.5 bg-[#3d9fd8] rounded-full mb-6"></div>
            </div>
            <ul className="space-y-4">
              {["Home", "About Us", "Blog", "Become a Dealer", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-[#8899aa] hover:text-[#3d9fd8] transition-colors font-medium text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-[#3d9fd8] transition-all duration-300 rounded-full"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-black tracking-[0.25em] uppercase text-white mb-4">Support</h3>
              <div className="w-8 h-0.5 bg-[#3d9fd8] rounded-full mb-6"></div>
            </div>
            <ul className="space-y-4">
              {["Warranty Registration", "Installation Guide", "FAQs", "Video Tutorials"].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-[#8899aa] hover:text-[#3d9fd8] transition-colors font-medium text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-[#3d9fd8] transition-all duration-300 rounded-full"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-black tracking-[0.25em] uppercase text-white mb-4">Contact</h3>
              <div className="w-8 h-0.5 bg-[#3d9fd8] rounded-full mb-6"></div>
            </div>
            <ul className="space-y-5">
              {[
                {
                  icon: "fa-phone",
                  content: "+91 7428 642 333",
                  href: "tel:+917428642333",
                },
                {
                  icon: "fa-envelope",
                  content: "info@mechnovamachines.com",
                  href: "mailto:info@mechnovamachines.com",
                },
                {
                  icon: "fa-whatsapp",
                  content: "WhatsApp Chat",
                  href: "#",
                  brand: true,
                },
                {
                  icon: "fa-location-dot",
                  content: "2nd Floor, Plot No. 756, Udyog Vihar Phase V, Gurugram, Haryana 122015",
                  href: "#",
                },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-[#8899aa] hover:text-[#3d9fd8] transition-colors text-sm flex items-start gap-3 group"
                  >
                    <span className="mt-0.5 w-8 h-8 rounded-full border border-[#2a3f55] flex items-center justify-center flex-shrink-0 group-hover:border-[#3d9fd8] group-hover:bg-[#3d9fd8]/10 transition-all">
                      <i className={`${item.brand ? "fa-brands" : "fa-solid"} ${item.icon} text-[#3d9fd8] text-xs`}></i>
                    </span>
                    <span className="font-medium leading-relaxed">{item.content}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-[#1e2e3e]">
        <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#5a7080] text-xs font-medium">
            © 2026 Bonhoeffer Machines Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[#5a7080] text-xs font-medium flex-wrap justify-center">
            {["Privacy Policy", "Terms of Service", "Shipping Policy", "Warranty Registration"].map((item, idx, arr) => (
              <span key={item} className="flex items-center gap-2">
                <Link href="#" className="hover:text-[#3d9fd8] transition-colors">{item}</Link>
                {idx < arr.length - 1 && <span className="text-[#2a3f55]">•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
