import HeroSlider from "./components/HeroSlider";
import GallerySlider from "./components/GallerySlider";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Power Weeder", image: "/c.webp" },
  { name: "Brush Cutter", image: "/c1.webp" },
  { name: "Chainsaw", image: "/c3.webp" },
  { name: "Water Pumps", image: "/c4.webp" },
  { name: "Gasoline Engine", image: "/c6.webp" },
  { name: "Spare Parts", image: null, isIcon: true },
];

const products = [
  { id: 2, name: "MBC37SC", image: "/mb.webp", badge: "SUMMERSALE", discount: "57%", price: "11,000", strike: "25,500", save: "14,500" },
  { id: 3, name: "MBC37SBC", image: "/mbc.webp", badge: "BEST SELLER", discount: "57%", price: "12,000", strike: "27,600", save: "15,600" },
  { id: 4, name: "Chainsaw MCS58A-22SN", image: "/chain.webp", discount: "61%", price: "10,500", strike: "26,700", save: "16,200" },
  { id: 6, name: "Gasoline Engine ME200A", image: "/gaso.webp", discount: "20%", price: "9,000", strike: "11,200", save: "2,200" },
  { id: 9, name: "Power Weeder MT900GA-208CC", image: "/power.webp", discount: "54%", price: "31,000", strike: "68,000", save: "37,000" },
];

export default function Home() {
  return (
    <main className="flex-1 bg-white">
      <HeroSlider />

      {/* Categories Section */}
      <section className="max-w-[1100px] ml-38 px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 px-2">Categories (6)</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <Link key={cat.name} href="#" className="flex flex-col items-center group">
              <div className="w-full aspect-square  rounded-3xl flex items-center justify-center p-4 border border-gray-50 transition-all duration-300 group-hover:shadow-md group-hover:bg-white overflow-hidden relative">
                {cat.isIcon ? (
                  <div className="text-primary flex flex-col items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                ) : (
                  <div className="relative w-full h-full transform transition-transform duration-500 ">
                    <Image
                      src={cat.image || ""}
                      alt={cat.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
              <span className="mt-4 text-center font-semibold text-gray-700 group-hover:text-primary transition-colors text-sm sm:text-base">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-4xl font-extrabold text-gray-900">Featured Products</h2>
          <Link href="/products" className="text-[#236da9] font-bold flex items-center gap-1 hover:underline">
            View All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((prod) => (
            <Link key={prod.id} href={`/products/${prod.id}`} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all p-4 flex flex-col relative group cursor-pointer">
              {/* Discount Badge with Zigzag Bottom */}
              <div
                className="absolute top-0 right-4 bg-[#007bff] text-white text-[10px] sm:text-[11px] font-black px-2.5 pt-3 pb-4 z-10 shadow-md flex flex-col items-center leading-none"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 85% 92%, 70% 100%, 50% 92%, 30% 100%, 15% 92%, 0 100%)"
                }}
              >
                <span>{prod.discount}</span>
                <span className="mt-0.5">OFF</span>
              </div>

              {/* Product Image Area */}
              <div className="aspect-square relative mb-6 mt-4 bg-gray-50/50 rounded-xl overflow-hidden">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Content Area */}
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  {prod.badge && (
                    <span className="bg-orange-600 text-white text-[9px] font-black px-2 py-1 rounded shadow-sm uppercase tracking-wider">
                      {prod.badge}
                    </span>
                  )}
                  <div className="flex items-center text-yellow-400 text-xs gap-1 ml-auto">
                    <i className="fa-solid fa-star"></i>
                    <span className="text-gray-500 font-bold">4.5</span>
                  </div>
                </div>

                <h3 className="text-gray-800 font-extrabold text-sm sm:text-base mb-4 line-clamp-2 leading-tight h-10 sm:h-12">
                  {prod.name}
                </h3>

                <div className="mt-auto space-y-4">
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-xl sm:text-2xl font-black text-gray-900">₹{prod.price}</span>
                      <span className="text-gray-400 text-sm line-through decoration-red-400/50">₹{prod.strike}</span>
                    </div>
                    <p className="text-green-600 text-xs sm:text-sm font-bold flex items-center gap-1">
                      <span className="bg-green-100 px-1.5 py-0.5 rounded">You Save</span>
                      <span className="text-green-700">₹{prod.save}</span>
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    <div className="w-full bg-[#236da9] text-white py-3 rounded-xl font-black text-sm uppercase tracking-wide text-center shadow-md shadow-blue-200">
                      Buy Now
                    </div>
                    <div className="w-full border-2 border-[#236da9] text-[#236da9] py-3 rounded-xl font-black text-sm uppercase tracking-wide text-center">
                      Add to Cart
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50/50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-[1700px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-50 text-[#236da9] text-[11px] font-black tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-6">
              Why Choose Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Built for Farmers, <span className="text-[#236da9]">Trusted by Thousands</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
              Every Mechnova machine is engineered to deliver power, reliability and after-sales peace of mind — season after season.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { id: "01", title: "High Performance", desc: "Engineered for maximum output with powerful engines that handle the toughest field conditions with ease.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, color: "bg-blue-50 text-blue-600" },
              { id: "02", title: "Durable Quality", desc: "Built with premium-grade materials to withstand years of intensive agricultural use without compromise.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, color: "bg-green-50 text-green-600" },
              { id: "03", title: "Easy Maintenance", desc: "Simple modular design for hassle-free servicing with readily available spare parts across India.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, color: "bg-orange-50 text-orange-600" },
              { id: "04", title: "Nationwide Service", desc: "Extensive dealer & service network ensuring fast support and reach across every state in India.", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>, color: "bg-purple-50 text-purple-600" },
            ].map((feature) => (
              <div key={feature.id} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 relative group overflow-hidden border border-gray-100">
                <span className="absolute -top-4 -right-2 text-8xl font-black text-gray-50 opacity-50 group-hover:opacity-100 transition-opacity">
                  {feature.id}
                </span>
                <div className={`${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-sm group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4 inline-block border-b-2 border-transparent group-hover:border-[#236da9] transition-all">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Banner */}
          <div className="bg-[#236da9] rounded-[2.5rem] p-10 sm:p-16 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-5 transition-opacity"></div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {[
                { label: "Machines Sold", val: "10,000+", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
                { label: "Dealer Partners", val: "500+", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
                { label: "Years of Trust", val: "15+", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg> },
                { label: "Service Satisfaction", val: "98%", icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
              ].map((stat) => (
                <div key={stat.label} className="text-center flex flex-col items-center group/stat transition-transform hover:-translate-y-2">
                  <div className="bg-white/10 p-3 rounded-full mb-6 group-hover/stat:bg-white/20 transition-colors">
                    {stat.icon}
                  </div>
                  <span className="text-4xl sm:text-5xl font-black text-white mb-2 block tracking-tight">
                    {stat.val}
                  </span>
                  <span className="text-blue-100 font-bold uppercase text-xs tracking-[0.2em]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Limited Time Offer Section */}
      <section className="relative w-full py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-[#1a5a8f] via-[#236da9] to-[#004e8c]">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,500 C200,400 400,600 600,500 C800,400 1000,600 1000,500" stroke="white" fill="transparent" strokeWidth="2" />
            <path d="M0,600 C200,500 400,700 600,600 C800,500 1000,700 1000,600" stroke="white" fill="transparent" strokeWidth="2" />
          </svg>
        </div>

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest border border-white/30">
              <i className="fa-solid fa-tag"></i>
              Limited Time Offer
            </div>

            <div className="space-y-4">
              <h2 className="text-5xl sm:text-7xl font-black text-white leading-none tracking-tight">
                Power Weeder<br />
                <span className="text-[#FFC107]">Pro 200</span>
              </h2>
              <p className="text-blue-50 max-w-lg text-lg sm:text-xl font-medium leading-relaxed opacity-90 mx-auto lg:mx-0">
                High performance farming machine. Built for power, durability and efficiency.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
              <Link href="#" className="bg-white text-[#236da9] px-10 py-4 rounded-xl font-black text-lg flex items-center gap-3 hover:bg-blue-50 transition-all hover:translate-x-1 shadow-2xl shadow-black/20 group">
                Shop Now
                <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </Link>

              <div className="flex flex-col">
                <span className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-1">Starting from</span>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl sm:text-5xl font-black text-white">₹31,000</span>
                  <span className="text-white/40 text-lg line-through font-bold">₹68,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-2xl group">
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[120%] aspect-[4/1] bg-gradient-to-t from-black/30 to-transparent blur-3xl opacity-50"></div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-[#D1D5DB]/30 rounded-full blur-xl border-t border-white/20"></div>

            <div className="relative z-10 transition-transform duration-700 group-hover:-translate-y-5">
              <Image
                src="/power.webp"
                alt="Power Weeder Pro 200"
                width={800}
                height={600}
                className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        </div>

        <span className="absolute bottom-4 right-8 text-white/40 text-[10px] font-bold uppercase tracking-widest">
          *T&C Apply
        </span>
      </section>

      {/* Our Brand Range Section */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1700px] mx-auto text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-12">Our Brand Range</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-100 rounded-2xl overflow-hidden mb-20 shadow-sm">
            <div className="py-12 border-b md:border-b-0 md:border-r border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Image src="/bonofer.webp" alt="Bonhoeffer" width={180} height={60} className="object-contain" />
            </div>
            <div className="py-12 border-b md:border-b-0 md:border-r border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Image src="/stevron_black_logo.webp" alt="Stevron" width={180} height={60} className="object-contain" />
            </div>
            <div className="py-12 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Image src="/logo (2).webp" alt="Mechnova" width={180} height={60} className="object-contain" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 tracking-tight">
              Shop Online for Best-Quality Chainsaws, Brush Cutters, Water Pumps & Engines
            </h3>
            <p className="text-gray-500 text-lg leading-relaxed font-medium px-4">
              We offer a diverse range of agricultural and utility machinery. Our core products include chainsaws, brush cutters, water pumps, engines, and power weeders. Our 7 HP petrol power weeder with a 208-cc engine is designed to deliver strong performance, reliability, and efficiency across different soil conditions.
            </p>
          </div>

          {/* Gallery Slider Section */}
          <div className="mt-12">
            <GallerySlider />
          </div>
        </div>
      </section>
      {/* Video Demo Section */}
      <section className="py-24 bg-blue-50/30 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Dots Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#004b8d 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

        <div className="max-w-[1700px] mx-auto text-center mb-16">
          <span className="inline-block bg-blue-100 text-[#236da9] text-[12px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-6">
            Watch
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
            See Our Machines <span className="text-[#236da9]">in Action</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            See exactly how Mechnova machines perform in real field conditions — powerful, reliable and built for Indian farmers.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Video Preview */}
          <div className="flex-1 relative group w-full">
            <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl group-hover:scale-[1.02] transition-transform duration-700">
              <Image
                src="/banner1.webp"
                alt="Mechnova Pro Weeder 200 Demo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-24 h-24 bg-[#236da9] text-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(35,109,169,0.5)] group-hover:scale-110 transition-transform pulse-animation">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              {/* Video Title Bar */}
              <div className="absolute bottom-10 left-10 text-white z-10">
                <h4 className="text-2xl font-black mb-1">Mechnova Pro Weeder 200 — Product Demo</h4>
                <p className="font-bold opacity-80 uppercase tracking-widest text-xs">Real field performance</p>
              </div>
            </div>

            {/* Branding Logo in Video */}
            <div className="absolute top-8 right-12 z-20 opacity-90 invert grayscale brightness-200">
              <Image src="/logo (2).webp" alt="Mechnova" width={140} height={40} className="object-contain" />
            </div>
          </div>

          {/* Right: Content & Features */}
          <div className="lg:w-[450px] space-y-10">
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              The <span className="font-black text-gray-900 leading-tight">Mechnova Pro Weeder 200</span> is engineered for maximum efficiency across all Indian soil types. Watch the live demo to understand why thousands of farmers rely on it every season.
            </p>

            <ul className="space-y-6">
              {[
                "Powerful 7 HP petrol engine",
                "Works in all soil conditions",
                "Fuel-efficient & low maintenance",
                "Trusted by 10,000+ farmers"
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full border-2 border-[#236da9] text-[#236da9] flex items-center justify-center group-hover:bg-[#236da9] group-hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xl font-black text-gray-800 tracking-tight">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="#" className="inline-block bg-[#236da9] text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-100 hover:bg-[#1a5a8f] hover:translate-y-[-4px] active:translate-y-0 transition-all">
              Explore All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1700px] mx-auto text-center mb-16">
          <span className="inline-block text-[#236da9] text-[15px] font-bold tracking-[0.3em] uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
        </div>

        <div className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Rajesh Kumar", loc: "Punjab", text: "The Mechnova Pro Weeder has completely transformed my farming operations. It saves me hours of manual labor every day....", rating: 5 },
            { name: "Suresh Patil", loc: "Maharashtra", text: "Best brush cutter I have ever used. The build quality is exceptional and the after-sales service is top-notch. Worth every rupee!", rating: 5 },
            { name: "Anita Sharma", loc: "Uttar Pradesh", text: "I bought the sprayer for my small orchard and it works perfectly. Battery life is excellent and the spray coverage is uniform.", rating: 4 },
            { name: "Mohammed Ali", loc: "Karnataka", text: "We have been using Mechnova machines for 3 years now. The durability is unmatched. Even the spare parts are readily available.", rating: 5 },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group">
              <div className="mb-6">
                <svg className="w-10 h-10 text-blue-100 group-hover:text-blue-200 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.5693 13 6.017 13H5.017V21H6.017Z" />
                </svg>
              </div>
              <p className="text-gray-600 font-medium leading-relaxed mb-8 flex-1 italic line-clamp-4">
                "{item.text}"
              </p>
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className={`fa-solid fa-star text-xs ${i < item.rating ? "text-yellow-400" : "text-gray-200"}`}></i>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#236da9] group-hover:bg-[#236da9] group-hover:text-white transition-colors">
                  <i className="fa-solid fa-user text-lg"></i>
                </div>
                <div>
                  <h4 className="font-black text-gray-900 leading-none mb-1">{item.name}</h4>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{item.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Blog Section */}
      <section className="py-24 bg-gray-50/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1700px] mx-auto flex flex-col sm:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="inline-block text-[#236da9] text-[15px] font-bold tracking-[0.3em] uppercase mb-4">
              Latest News
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-none">
              From Our Blog
            </h2>
          </div>
          <Link href="#" className="bg-white border-2 border-gray-100 text-gray-900 px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-50 transition-all shadow-sm">
            View All
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </Link>
        </div>

        <div className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { tag: "power-weeder", date: "10 Mar 2026", title: "How to Choose the Right Power Weeder for Your Farm", desc: "A comprehensive guide to selecting the perfect power weeder based on your farm size, soil type, and crop requirements.", img: "/banner.webp" },
            { tag: "brush-cutter", date: "5 Mar 2026", title: "Essential Maintenance Tips for Brush Cutters", desc: "Keep your brush cutter running at peak performance with these essential maintenance tips from the Mechnova experts.", img: "/c1.webp" },
            { tag: "sprayer", date: "28 Feb 2026", title: "Top 5 Benefits of Using Agricultural Sprayers", desc: "Discover how modern agricultural sprayers can transform your pest control and fertilization strategies for better yields.", img: "/c4.webp" },
          ].map((blog, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700 group flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={blog.img} alt={blog.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 left-6">
                  <span className="bg-[#236da9] text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    {blog.tag}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">
                  <i className="fa-regular fa-calendar"></i>
                  <span>{blog.date}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>Mechnova Team</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight group-hover:text-[#236da9] transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed mb-6 line-clamp-3">
                  {blog.desc}
                </p>
                <Link href="#" className="mt-auto inline-flex items-center gap-2 text-[#236da9] font-black text-sm uppercase tracking-widest group/link">
                  Read More
                  <i className="fa-solid fa-arrow-right transition-transform group-hover/link:translate-x-1"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Dealer CTA Section */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1700px] mx-auto mb-20 overflow-hidden group">
          <div className="relative aspect-[21/6] overflow-hidden shadow-2xl">
            <Image
              src="/dealership.webp"
              alt="Become a Dealer"
              fill
              className="object-cover"
            />
            {/* Overlay for Text Legibility */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div> */}

            {/* Banner Text Layout */}

          </div>
        </div>

        {/* Center CTA Text */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Want to Grow Your <span className="text-[#236da9]">Farming Business?</span>
          </h2>
          <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto">
            Join our dealer network or request a callback to get started with Mechnova.
          </p>
          <div className="pt-2">
            <Link href="#" className="inline-flex items-center gap-3 bg-[#236da9] text-white px-8 py-3 rounded-xl font-bold text-xl shadow-2xl shadow-blue-200 hover:bg-[#1a5a8f] ">
              Become Dealer
              <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-2"></i>
            </Link>
          </div>
        </div>
      </section>
      {/* Trusted Marketplaces Section */}
      <section className="py-20 bg-gray-50/100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1700px] mx-auto text-center mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6">
            Available Across Trusted Marketplaces
          </h2>
          <p className="text-gray-500 text-lg font-medium">
            Find Mechnova products at India's trusted online marketplaces
          </p>
        </div>

        <div className="max-w-[1700px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { name: "amazon", logo: "/amazon.png" },
            { name: "Flipkart", logo: "/flipkart.png" },
            { name: "Industrybuying", logo: "/indstybuying.png" },
            { name: "JioMart", logo: "/jiomart.png" },
            { name: "moglix", logo: "/moglix.png" },
            { name: "TOOLSVILLA", logo: "/toolsvila.png" },
          ].map((brand) => (
            <div key={brand.name} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center ">
              <div className="relative w-full h-12 ">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
