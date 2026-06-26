"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { useParams } from "next/navigation";

const products = [
  {
    id: 1,
    name: "MBC45L Brush Cutter",
    fullName: "Mechnova MBC45L | Brush Cutter | Heavy Duty Petrol Brush Cutter | 1.5kW",
    image: "/c.webp",
    images: ["/c.webp", "/mb.webp", "/mbc.webp", "/c.webp"],
    badge: "NEW",
    discount: "57%",
    price: "9,500",
    strike: "22,000",
    save: "12,500",
    category: "Brush Cutter",
    rating: 4,
    sku: "MBC-45L-001",
    model: "MBC45L",
    specs: [
      { label: "Engine Power", value: "1.5 kW" },
      { label: "Fuel Type", value: "Petrol" },
      { label: "Blade Diameter", value: "255 mm" },
      { label: "Weight", value: "8.5 kg" },
    ],
    features: [
      "Ideal for cutting grass, weeds, and light brush in agricultural fields",
      "Equipped with a powerful 1.5kW petrol engine for high performance",
      "Anti-vibration handle system for reduced operator fatigue",
      "Up to 6,500 RPM blade speed for efficient cutting",
      "Maximum blade diameter of 255mm",
      "6 + 6 months extended warranty included",
    ],
    warranty: "6 + 6 Months Extendable Warranty",
    delivery: "Get fastest delivery by 5-7 days",
    reviews: 1250,
    boxItems: [
      { label: "Brush Cutter Machine", image: "/c.webp" },
      { label: "Harness / Shoulder Strap", image: "/mbc.webp" },
      { label: "3-Tooth Metal Blade", image: "/mbc.webp" },
      { label: "Nylon String Head", image: "/c.webp" },
      { label: "Hex Tool Kit", image: "/mb.webp" },
      { label: "User Manual", image: "/mbc.webp" },
      { label: "Fuel Mixing Bottle", image: "/gaso.webp" },
    ],
  },
  {
    id: 2,
    name: "MBC37SC Brush Cutter",
    fullName: "Mechnova MBC37SC | Brush Cutter | Multi-Purpose Heavy Duty | 1.2kW",
    image: "/mb.webp",
    images: ["/mb.webp", "/c.webp", "/mbc.webp", "/mb.webp"],
    badge: "SUMMER SALE",
    discount: "57%",
    price: "11,000",
    strike: "25,500",
    save: "14,500",
    category: "Brush Cutter",
    rating: 5,
    sku: "MBC-37SC-002",
    model: "MBC37SC",
    specs: [
      { label: "Engine Power", value: "1.2 kW" },
      { label: "Fuel Type", value: "Petrol" },
      { label: "Blade Diameter", value: "230 mm" },
      { label: "Weight", value: "7.2 kg" },
    ],
    features: [
      "Ideal for all cutting purposes including footpath, lawn, and agricultural areas",
      "Equipped with a powerful 1.2kW copper motor engine",
      "Strong performance with a heavy-duty plunger mechanism",
      "Up to 7.5 litres/minute fuel flow for efficiency",
      "Maximum speed of 6,800 RPM",
      "6 + 6 months extended warranty",
    ],
    warranty: "6 + 6 Months Extendable Warranty",
    delivery: "Get fastest delivery by 5-7 days",
    reviews: 980,
    boxItems: [
      { label: "Brush Cutter Machine", image: "/mb.webp" },
      { label: "Harness / Shoulder Strap", image: "/mbc.webp" },
      { label: "3-Tooth Metal Blade", image: "/mb.webp" },
      { label: "Nylon String Head", image: "/c.webp" },
      { label: "Hex Tool Kit", image: "/mbc.webp" },
      { label: "User Manual", image: "/mb.webp" },
      { label: "Safety Goggles", image: "/mbc.webp" },
    ],
  },
  {
    id: 3,
    name: "MBC37SBC Brush Cutter",
    fullName: "Mechnova MBC37SBC | Brush Cutter | Best Seller Heavy Duty | 1.3kW",
    image: "/mbc.webp",
    images: ["/mbc.webp", "/mb.webp", "/c.webp", "/mbc.webp"],
    badge: "BEST SELLER",
    discount: "57%",
    price: "12,000",
    strike: "27,600",
    save: "15,600",
    category: "Brush Cutter",
    rating: 5,
    sku: "MBC-37SBC-003",
    model: "MBC37SBC",
    specs: [
      { label: "Engine Power", value: "1.3 kW" },
      { label: "Fuel Type", value: "Petrol" },
      { label: "Blade Diameter", value: "255 mm" },
      { label: "Weight", value: "7.8 kg" },
    ],
    features: [
      "Best seller model for professional agricultural use",
      "High-performance 1.3kW petrol engine",
      "Ergonomic dual-handle design for stability",
      "Anti-vibration system reduces operator fatigue by 40%",
      "Up to 7,200 RPM cutting speed",
      "6 + 6 months extendable warranty",
    ],
    warranty: "6 + 6 Months Extendable Warranty",
    delivery: "Get fastest delivery by 5-7 days",
    reviews: 2100,
    boxItems: [
      { label: "Brush Cutter Machine", image: "/mbc.webp" },
      { label: "Harness / Shoulder Strap", image: "/c.webp" },
      { label: "3-Tooth Metal Blade", image: "/mb.webp" },
      { label: "Nylon String Head", image: "/mbc.webp" },
      { label: "Hex Tool Kit", image: "/c.webp" },
      { label: "User Manual", image: "/mb.webp" },
      { label: "Safety Gear Kit", image: "/c.webp" },
    ],
  },
  {
    id: 4,
    name: "Chainsaw MCS58A-22SN",
    fullName: "Mechnova Chainsaw MCS58A-22SN | Heavy Duty Petrol Chainsaw | 2.2kW",
    image: "/chain.webp",
    images: ["/chain.webp", "/chain.webp", "/chain.webp", "/chain.webp"],
    badge: "",
    discount: "61%",
    price: "10,500",
    strike: "26,700",
    save: "16,200",
    category: "Chainsaw",
    rating: 4,
    sku: "MCS-58A-22SN-004",
    model: "MCS58A-22SN",
    specs: [
      { label: "Engine Power", value: "2.2 kW" },
      { label: "Fuel Type", value: "Petrol" },
      { label: "Bar Length", value: "22 inches" },
      { label: "Weight", value: "6.5 kg" },
    ],
    features: [
      "Professional-grade chainsaw for heavy-duty cutting tasks",
      "Powerful 2.2kW petrol engine for fast, efficient cutting",
      "22-inch guide bar for cutting large logs and trees",
      "Automatic chain oiling system for smooth operation",
      "Easy-start mechanism for hassle-free operation",
      "6 + 6 months extendable warranty",
    ],
    warranty: "6 + 6 Months Extendable Warranty",
    delivery: "Get fastest delivery by 5-7 days",
    reviews: 760,
    boxItems: [
      { label: "Chainsaw Machine", image: "/chain.webp" },
      { label: "Guide Bar (22 inch)", image: "/chain.webp" },
      { label: "Chainsaw Chain", image: "/chain.webp" },
      { label: "Bar & Chain Oil", image: "/gaso.webp" },
      { label: "Wrench Tool", image: "/chain.webp" },
      { label: "User Manual", image: "/chain.webp" },
      { label: "Protective Cover", image: "/chain.webp" },
    ],
  },
  {
    id: 5,
    name: "Gasoline Engine ME170A",
    fullName: "Mechnova Gasoline Engine ME170A | Multi-Purpose Engine | 1.7kW",
    image: "/gaso.webp",
    images: ["/gaso.webp", "/gaso.webp", "/gaso.webp", "/gaso.webp"],
    badge: "",
    discount: "20%",
    price: "8,500",
    strike: "10,600",
    save: "2,100",
    category: "Gasoline Engine",
    rating: 4,
    sku: "ME-170A-005",
    model: "ME170A",
    specs: [
      { label: "Engine Power", value: "1.7 kW" },
      { label: "Fuel Type", value: "Gasoline" },
      { label: "Displacement", value: "170 cc" },
      { label: "Weight", value: "12 kg" },
    ],
    features: [
      "Versatile gasoline engine for multi-purpose agricultural applications",
      "Compact 170cc displacement for efficient power output",
      "Low fuel consumption design for cost-effective operation",
      "Easy pull-start mechanism",
      "Compatible with various agricultural attachments",
      "6 + 6 months extended warranty",
    ],
    warranty: "6 + 6 Months Extendable Warranty",
    delivery: "Get fastest delivery by 5-7 days",
    reviews: 430,
    boxItems: [
      { label: "Gasoline Engine", image: "/gaso.webp" },
      { label: "Fuel Tank Cap", image: "/gaso.webp" },
      { label: "Air Filter Cover", image: "/gaso.webp" },
      { label: "Spark Plug", image: "/gaso.webp" },
      { label: "Oil Drain Plug", image: "/gaso.webp" },
      { label: "User Manual", image: "/gaso.webp" },
      { label: "Gasket Set", image: "/gaso.webp" },
    ],
  },
  {
    id: 6,
    name: "Gasoline Engine ME200A",
    fullName: "Mechnova Gasoline Engine ME200A | Heavy Duty Engine | 2.0kW",
    image: "/gaso.webp",
    images: ["/gaso.webp", "/gaso.webp", "/gaso.webp", "/gaso.webp"],
    badge: "",
    discount: "20%",
    price: "9,000",
    strike: "11,200",
    save: "2,200",
    category: "Gasoline Engine",
    rating: 4,
    sku: "ME-200A-006",
    model: "ME200A",
    specs: [
      { label: "Engine Power", value: "2.0 kW" },
      { label: "Fuel Type", value: "Gasoline" },
      { label: "Displacement", value: "200 cc" },
      { label: "Weight", value: "14 kg" },
    ],
    features: [
      "Heavy-duty 200cc gasoline engine for demanding tasks",
      "High torque output for reliable performance",
      "Advanced air filtration system for longer engine life",
      "Smooth throttle control for precision operation",
      "Compatible with various power tools and equipment",
      "6 + 6 months extended warranty",
    ],
    warranty: "6 + 6 Months Extendable Warranty",
    delivery: "Get fastest delivery by 5-7 days",
    reviews: 520,
    boxItems: [
      { label: "Gasoline Engine", image: "/gaso.webp" },
      { label: "Fuel Tank Cap", image: "/gaso.webp" },
      { label: "Air Filter Cover", image: "/gaso.webp" },
      { label: "Spark Plug", image: "/gaso.webp" },
      { label: "Oil Drain Plug", image: "/gaso.webp" },
      { label: "User Manual", image: "/gaso.webp" },
      { label: "Gasket Set", image: "/gaso.webp" },
    ],
  },
  {
    id: 7,
    name: "Petrol Water Pump 1 Inch",
    fullName: "Mechnova Petrol Water Pump 1 Inch | High Flow | 1.2kW",
    image: "/c4.webp",
    images: ["/c4.webp", "/c4.webp", "/c4.webp", "/c4.webp"],
    badge: "",
    discount: "15%",
    price: "5,500",
    strike: "6,500",
    save: "1,000",
    category: "Water Pumps",
    rating: 4,
    sku: "WP-1IN-007",
    model: "WP-1IN",
    specs: [
      { label: "Engine Power", value: "1.2 kW" },
      { label: "Fuel Type", value: "Petrol" },
      { label: "Outlet Size", value: "1 Inch" },
      { label: "Max Flow", value: "120 L/min" },
    ],
    features: [
      "Compact 1-inch petrol water pump for irrigation and water transfer",
      "High flow rate of up to 120 litres per minute",
      "Lightweight and portable design for easy transportation",
      "Easy-pull recoil starter for quick ignition",
      "Suitable for agriculture, construction, and emergency use",
      "6 months warranty included",
    ],
    warranty: "6 Months Warranty",
    delivery: "Get fastest delivery by 5-7 days",
    reviews: 310,
    boxItems: [
      { label: "Water Pump Unit", image: "/c4.webp" },
      { label: "1 Inch Inlet Pipe", image: "/c4.webp" },
      { label: "1 Inch Outlet Pipe", image: "/c4.webp" },
      { label: "Fuel Tank", image: "/c4.webp" },
      { label: "Recoil Starter", image: "/c4.webp" },
      { label: "User Manual", image: "/c4.webp" },
      { label: "Inlet Strainer", image: "/c4.webp" },
    ],
  },
  {
    id: 8,
    name: "Petrol Water Pump 2 Inch",
    fullName: "Mechnova Petrol Water Pump 2 Inch | High Capacity | 2.4kW",
    image: "/c4.webp",
    images: ["/c4.webp", "/c4.webp", "/c4.webp", "/c4.webp"],
    badge: "",
    discount: "18%",
    price: "7,200",
    strike: "8,800",
    save: "1,600",
    category: "Water Pumps",
    rating: 4,
    sku: "WP-2IN-008",
    model: "WP-2IN",
    specs: [
      { label: "Engine Power", value: "2.4 kW" },
      { label: "Fuel Type", value: "Petrol" },
      { label: "Outlet Size", value: "2 Inch" },
      { label: "Max Flow", value: "250 L/min" },
    ],
    features: [
      "High-capacity 2-inch petrol water pump for large-scale irrigation",
      "Impressive flow rate of up to 250 litres per minute",
      "Heavy-duty construction for continuous operation",
      "Self-priming pump design for easy operation",
      "Ideal for farmland, construction sites, and flood control",
      "6 months warranty included",
    ],
    warranty: "6 Months Warranty",
    delivery: "Get fastest delivery by 5-7 days",
    reviews: 415,
    boxItems: [
      { label: "Water Pump Unit", image: "/c4.webp" },
      { label: "2 Inch Inlet Pipe", image: "/c4.webp" },
      { label: "2 Inch Outlet Pipe", image: "/c4.webp" },
      { label: "Fuel Tank", image: "/c4.webp" },
      { label: "Recoil Starter", image: "/c4.webp" },
      { label: "User Manual", image: "/c4.webp" },
      { label: "Inlet Strainer", image: "/c4.webp" },
    ],
  },
  {
    id: 9,
    name: "Power Weeder MT900GA-208CC",
    fullName: "Mechnova Power Weeder MT900GA-208CC | Heavy Duty Tiller | 208CC",
    image: "/power.webp",
    images: ["/power.webp", "/power.webp", "/power.webp", "/power.webp"],
    badge: "HOT DEAL",
    discount: "54%",
    price: "31,000",
    strike: "68,000",
    save: "37,000",
    category: "Power Weeder",
    rating: 5,
    sku: "PW-MT900GA-009",
    model: "MT900GA-208CC",
    specs: [
      { label: "Engine Power", value: "5.5 kW" },
      { label: "Displacement", value: "208 CC" },
      { label: "Working Width", value: "900 mm" },
      { label: "Weight", value: "95 kg" },
    ],
    features: [
      "Heavy-duty power weeder for large-scale agricultural land preparation",
      "Powerful 208CC engine delivering 5.5kW output",
      "900mm working width for faster field coverage",
      "Adjustable tilling depth from 50mm to 200mm",
      "Electric start for effortless operation",
      "6 + 6 months extended warranty with free service",
    ],
    warranty: "6 + 6 Months Extendable Warranty",
    delivery: "Get fastest delivery by 5-7 days",
    reviews: 1890,
    boxItems: [
      { label: "Power Weeder Machine", image: "/power.webp" },
      { label: "Tiller Blades Set", image: "/power.webp" },
      { label: "Fuel Tank", image: "/power.webp" },
      { label: "Throttle Cable", image: "/power.webp" },
      { label: "Tool Kit", image: "/power.webp" },
      { label: "User Manual", image: "/power.webp" },
      { label: "Side Discs", image: "/power.webp" },
    ],
  },
  {
    id: 10,
    name: "Power Weeder MT900GA-208CC Pro",
    fullName: "Mechnova Power Weeder MT900GA-208CC Pro | Professional Tiller | 208CC",
    image: "/power.webp",
    images: ["/power.webp", "/power.webp", "/power.webp", "/power.webp"],
    badge: "",
    discount: "54%",
    price: "31,000",
    strike: "68,000",
    save: "37,000",
    category: "Power Weeder",
    rating: 4,
    sku: "PW-MT900GA-PRO-010",
    model: "MT900GA-208CC Pro",
    specs: [
      { label: "Engine Power", value: "5.5 kW" },
      { label: "Displacement", value: "208 CC" },
      { label: "Working Width", value: "900 mm" },
      { label: "Weight", value: "98 kg" },
    ],
    features: [
      "Professional-grade power weeder for commercial farming operations",
      "Same powerful 208CC engine with pro-grade gear transmission",
      "900mm working width with adjustable tine configuration",
      "Enhanced hydraulic depth control for precision tilling",
      "Reduced vibration cab for operator comfort",
      "6 + 6 months extended warranty with priority service",
    ],
    warranty: "6 + 6 Months Extendable Warranty",
    delivery: "Get fastest delivery by 5-7 days",
    reviews: 640,
    boxItems: [
      { label: "Power Weeder Machine", image: "/power.webp" },
      { label: "Tiller Blades Set", image: "/power.webp" },
      { label: "Fuel Tank", image: "/power.webp" },
      { label: "Throttle Cable", image: "/power.webp" },
      { label: "Tool Kit", image: "/power.webp" },
      { label: "User Manual", image: "/power.webp" },
      { label: "Side Discs", image: "/power.webp" },
    ],
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const productId = parseInt(params.id as string);
  const product = products.find((p) => p.id === productId);

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("features");
  const [added, setAdded] = useState(false);
  const boxScrollRef = useRef<HTMLDivElement>(null);

  const scrollBox = (dir: "left" | "right") => {
    if (boxScrollRef.current) {
      boxScrollRef.current.scrollBy({ left: dir === "right" ? 200 : -200, behavior: "smooth" });
    }
  };

  if (!product) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</h1>
          <p className="text-gray-500 mb-6">The product you are looking for does not exist.</p>
          <Link href="/products" className="bg-[#236da9] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#1a5799] transition-all">
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#236da9] transition-colors font-medium">Home</Link>
            <i className="fa-solid fa-chevron-right text-[10px] text-gray-300"></i>
            <Link href="/products" className="hover:text-[#236da9] transition-colors font-medium">{product.category}</Link>
            <i className="fa-solid fa-chevron-right text-[10px] text-gray-300"></i>
            <span className="text-[#236da9] font-semibold truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* ---- LEFT: Image Gallery ---- */}
          <div className="lg:col-span-5">
            {/* Main Image */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden relative group">
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-orange-500 text-white text-[10px] font-black px-3 py-1.5 rounded uppercase tracking-wider shadow-lg">
                    {product.badge}
                  </span>
                </div>
              )}
              <div
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md cursor-pointer hover:bg-gray-50 transition-colors"
                title="Share"
              >
                <i className="fa-solid fa-share-nodes text-gray-500 text-sm"></i>
              </div>
              <div className="relative aspect-square bg-blue-50/40">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-contain transition-all duration-500"
                />
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 bg-white ${
                    selectedImage === idx
                      ? "border-[#236da9] shadow-md scale-105"
                      : "border-gray-200 hover:border-[#236da9]/40"
                  }`}
                >
                  <Image src={img} alt={`view ${idx + 1}`} fill className="object-contain" />
                </button>
              ))}
            </div>

          </div>

          {/* ---- MIDDLE: Product Info ---- */}
          <div className="lg:col-span-4">
            {/* Category */}
            <Link
              href="/products"
              className="inline-block text-[#236da9] font-bold text-xs uppercase tracking-widest mb-3 hover:underline"
            >
              In {product.category}
            </Link>

            {/* Title */}
            <h1 className="text-xl font-black text-gray-900 leading-snug mb-3">
              {product.fullName}
            </h1>

            {/* SKU & Model */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-3">
              <span>SKU: <span className="font-semibold text-gray-700">{product.sku}</span></span>
              <span>Model No: <span className="font-semibold text-gray-700">{product.model}</span></span>
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2 mb-4">
              <i className="fa-solid fa-circle-check text-green-500 text-xs"></i>
              <span className="text-green-600 font-bold text-xs">In Stock — Ready to Ship</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-5 bg-gray-50/80 w-fit px-3 py-1.5 rounded-full border border-gray-100">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className={`fa-solid fa-star text-xs ${i < product.rating ? "text-yellow-400" : "text-gray-200"}`}></i>
                ))}
              </div>
              <span className="text-xs font-black text-gray-900">{product.rating}.0/5.0</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider ml-1">({product.reviews.toLocaleString()} reviews)</span>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-0 border border-gray-200 rounded-xl overflow-hidden mb-6">
              {product.specs.map((spec, i) => (
                <div key={i} className={`px-4 py-3 ${i % 2 === 0 ? "bg-gray-50" : "bg-white"} ${i < product.specs.length - 2 ? "border-b border-gray-200" : ""}`}>
                  <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wide">{spec.label}</p>
                  <p className="text-sm font-black text-gray-800 mt-0.5">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* Tabs: Features / Specs */}
            <div className="mb-4">
              <div className="flex border-b border-gray-200 gap-4 mb-4">
                {["features", "specs"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 text-xs font-black uppercase tracking-wide border-b-2 transition-all ${
                      activeTab === tab
                        ? "border-[#236da9] text-[#236da9]"
                        : "border-transparent text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {tab === "features" ? "Key Features" : "Specifications"}
                  </button>
                ))}
              </div>

              {activeTab === "features" && (
                <ul className="space-y-2">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <i className="fa-solid fa-circle-check text-[#236da9] text-xs mt-0.5 flex-shrink-0"></i>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === "specs" && (
                <div className="space-y-2">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-sm text-gray-500 font-medium">{spec.label}</span>
                      <span className="text-sm font-bold text-gray-800">{spec.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ---- RIGHT: Pricing & Purchase ---- */}
          <div className="lg:col-span-3 lg:sticky lg:top-6 self-start">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

              {/* Price Block */}
              <div className="mb-5">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-black text-gray-900">₹{product.price}</span>
                  <span className="text-gray-400 text-sm line-through">₹{product.strike}</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-green-100 text-green-700 text-xs font-black px-2 py-0.5 rounded">
                    {product.discount} OFF
                  </span>
                  <span className="text-green-600 text-xs font-bold">
                    You Save ₹{product.save}
                  </span>
                </div>
                <p className="text-[10px] text-gray-400 mt-1.5">Get Additional Discount on Checkout</p>
              </div>

              {/* Delivery */}
              <div className="bg-blue-50 rounded-xl px-4 py-3 mb-5 flex items-center gap-3">
                <i className="fa-solid fa-truck-fast text-[#236da9] text-lg"></i>
                <div>
                  <p className="text-xs font-bold text-[#236da9]">{product.delivery}</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">Free shipping on this order</p>
                </div>
              </div>

              {/* Perks */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                <div className="text-center">
                  <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-1.5">
                    <i className="fa-solid fa-percent text-[#236da9] text-sm"></i>
                  </div>
                  <p className="text-[9px] text-gray-600 font-semibold leading-tight">Get 18% GST on Input</p>
                </div>
                <div className="text-center">
                  <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-1.5">
                    <i className="fa-solid fa-shield-halved text-[#236da9] text-sm"></i>
                  </div>
                  <p className="text-[9px] text-gray-600 font-semibold leading-tight">{product.warranty}</p>
                </div>
                <div className="text-center">
                  <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-1.5">
                    <i className="fa-solid fa-rotate-left text-[#236da9] text-sm"></i>
                  </div>
                  <p className="text-[9px] text-gray-600 font-semibold leading-tight">Easy Returns (T&C Applied)</p>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-gray-600">Qty:</span>
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors font-bold text-lg"
                  >
                    −
                  </button>
                  <span className="w-10 text-center text-sm font-black text-gray-800">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors font-bold text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-[#236da9] hover:bg-[#1a5799] text-white py-3.5 rounded-xl font-black text-sm uppercase tracking-wide transition-all active:scale-95 shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
                  <i className="fa-solid fa-bolt"></i>
                  Buy Now
                </button>
                <button
                  onClick={handleAddToCart}
                  className={`w-full border-2 py-3.5 rounded-xl font-black text-sm uppercase tracking-wide transition-all active:scale-95 flex items-center justify-center gap-2 ${
                    added
                      ? "border-green-500 text-green-600 bg-green-50"
                      : "border-[#236da9] text-[#236da9] hover:bg-blue-50"
                  }`}
                >
                  <i className={`fa-solid ${added ? "fa-circle-check" : "fa-cart-plus"}`}></i>
                  {added ? "Added!" : "Add to Cart"}
                </button>
                <Link
                  href="/contact"
                  className="w-full border-2 border-green-500 text-green-600 hover:bg-green-50 py-3.5 rounded-xl font-black text-sm uppercase tracking-wide transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <i className="fa-brands fa-whatsapp text-base"></i>
                  Chat with us
                </Link>
              </div>

              {/* Trust Badge */}
              <div className="mt-4 flex items-center justify-center gap-2 text-gray-400">
                <i className="fa-solid fa-lock text-xs"></i>
                <p className="text-[10px] font-medium">All transactions are secure and encrypted</p>
              </div>
            </div>

            {/* Buy Bulk CTA */}
            <div className="mt-4 bg-gradient-to-r from-[#1a5799] to-[#236da9] rounded-2xl px-5 py-4">
              <p className="text-white font-bold text-sm mb-1">Want to buy a large quantity?</p>
              <p className="text-blue-200 text-xs mb-3">Get special pricing for bulk orders</p>
              <Link
                href="/dealer"
                className="block w-full text-center bg-white text-[#1a5799] text-xs font-black px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Get Bulk Quote
              </Link>
            </div>
          </div>

        </div>

        {/* ---- WHAT'S IN THE BOX ---- */}
        {product.boxItems && product.boxItems.length > 0 && (
          <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 bg-blue-50/50 rounded-[3rem] border border-blue-100/50 py-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">What&apos;s in the box</h2>
              <div className="w-16 h-1 bg-[#236da9] mx-auto mt-3 rounded-full"></div>
            </div>
            
            <div className="relative px-4">
              {/* Left Arrow */}
              <button
                onClick={() => scrollBox("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-gray-100 shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all active:scale-90"
              >
                <i className="fa-solid fa-chevron-left text-[#236da9] text-sm"></i>
              </button>

              {/* Scrollable Container */}
              <div
                ref={boxScrollRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide pb-8 pt-2 px-1 justify-start"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {product.boxItems.map((item, idx) => (
                  <div key={idx} className="flex-shrink-0 w-[200px]">
                    <div className="group border border-gray-100 rounded-[2rem] overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      {/* Product Image area */}
                      <div className="h-[160px] relative bg-gradient-to-b from-gray-50/50 to-white">
                        <Image
                          src={item.image}
                          alt={item.label}
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      {/* Label Bar */}
                      <div className="bg-[#236da9] px-4 py-3.5">
                        <p className="text-white text-[12px] font-black text-center leading-tight tracking-wide uppercase">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => scrollBox("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-gray-100 shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all active:scale-90"
              >
                <i className="fa-solid fa-chevron-right text-[#236da9] text-sm"></i>
              </button>
            </div>
          </div>
        )}

      </div>

      {/* ---- TABS SECTION: Description, Specs, Video ---- */}
      <div className="bg-white border-y border-gray-100 mt-6">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto scrollbar-hide">
            {["Description", "Specifications", "How to Use"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`py-4 text-sm font-bold uppercase tracking-wider whitespace-nowrap border-b-2 transition-all duration-300 ${
                  activeTab === tab.toLowerCase()
                    ? "border-[#236da9] text-[#236da9]"
                    : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Tab Content Rendering */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm min-h-[350px]">
              {activeTab === "description" && (
                <div className="animate-in fade-in duration-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Product Overview</h3>
                  <p className="text-gray-600 leading-relaxed text-base font-medium whitespace-pre-line">
                    The {product.fullName} is engineered for professional performance and maximum durability. 
                    Whether you are a serious gardener or a professional farmer, this machine provides the power you need to tackle the toughest tasks.
                    \n\n
                    {product.features.join(". ")}.
                    \n\n
                    Built with high-quality materials and backed by our intensive {product.warranty}, it ensures peace of mind and long-term reliability.
                  </p>
                  <div className="mt-6">
                    <button className="text-[#236da9] font-bold underline underline-offset-4 hover:text-blue-700 transition-all">
                      Read Technical Whitepaper
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "specifications" && (
                <div className="animate-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-sm transition-all">
                        <span className="text-gray-500 font-bold uppercase text-[10px] tracking-wider">{spec.label}</span>
                        <span className="text-gray-900 font-bold text-sm">{spec.value}</span>
                      </div>
                    ))}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <span className="text-gray-500 font-bold uppercase text-[10px] tracking-wider">Warranty</span>
                      <span className="text-gray-900 font-bold text-sm">{product.warranty}</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "how to use" && (
                <div className="animate-in fade-in duration-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Setup & Operation Guide</h3>
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border-2 border-white group">
                    <Image src={product.image} alt="Video Preview" fill className="object-cover opacity-60 grayscale-[50%]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform cursor-pointer">
                        <i className="fa-solid fa-play text-2xl ml-1"></i>
                      </div>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                      <p className="text-lg font-bold">How to use: {product.name}</p>
                      <p className="text-xs opacity-80">Official Mechnova Training Video</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Ratings & Reviews Section */}
            <div id="reviews">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ratings and reviews</h2>
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Summary */}
                  <div className="md:w-1/3 text-center md:border-r border-gray-100 md:pr-8">
                    <h4 className="text-5xl font-bold text-gray-900 mb-1">{product.rating}.0</h4>
                    <div className="flex justify-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`fa-solid fa-star text-sm ${i < product.rating ? "text-yellow-400" : "text-gray-200"}`}></i>
                      ))}
                    </div>
                    <p className="text-gray-400 font-bold uppercase text-[9px] tracking-widest">{product.reviews} Total Reviews</p>
                  </div>
                  {/* Detailed Review List */}
                  <div className="flex-1 space-y-6">
                    <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 relative group">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Amit Sharma</p>
                          <div className="flex gap-0.5 mt-0.5">
                            {[...Array(5)].map((_, i) => (
                              <i key={i} className="fa-solid fa-star text-[9px] text-yellow-500"></i>
                            ))}
                          </div>
                        </div>
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">2 days ago</span>
                      </div>
                      <p className="font-bold text-gray-800 text-base mb-1.5">Best {product.category} I&apos;ve used!</p>
                      <p className="text-gray-600 text-sm leading-relaxed font-medium">
                        Product is very good and packaging also good. Customer service also very good response. Highly recommended for professionals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Questions Section */}
            <div id="qna">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Customer questions</h2>
                <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all">
                  Ask a question
                </button>
              </div>
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-comments-question text-[#236da9] text-xl"></i>
                </div>
                <p className="text-gray-500 font-bold text-base mb-1">No questions asked yet</p>
                <p className="text-gray-400 text-sm font-medium">Be the first to ask a question about this product!</p>
              </div>
            </div>

          </div>

          {/* Right Area: Support & Sidebar Content */}
          <div className="lg:col-span-4 space-y-8">
            {/* Help Banner */}
            <div className="bg-gradient-to-br from-[#1a5799] to-[#236da9] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 group-hover:scale-125 transition-transform duration-700"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                  <i className="fa-solid fa-headset text-xl"></i>
                </div>
                <h4 className="text-xl font-bold mb-2">Need more help?</h4>
                <p className="text-blue-100 text-sm font-medium mb-6">Our product experts are ready to assist you season after season.</p>
                <Link href="tel:+917428642333" className="w-full bg-white text-[#236da9] py-3 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:translate-y-[-2px] transition-all">
                  <i className="fa-solid fa-phone text-sm"></i>
                  Call Now
                </Link>
              </div>
            </div>

            {/* Why Buy Here Sidebar */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h4 className="font-bold text-lg text-gray-900 mb-5">Our Commitment</h4>
              <div className="space-y-5">
                {[
                  { icon: "fa-certificate", title: "100% Genuine Products", desc: "Sourced directly from Mechnova factories." },
                  { icon: "fa-truck-ramp-box", title: "Free & Fast Delivery", desc: "Pan India reach with real-time tracking." },
                  { icon: "fa-screwdriver-wrench", title: "Installation Support", desc: "On-site and video-based training." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-[#236da9] shrink-0 border border-gray-100">
                      <i className={`fa-solid ${item.icon} text-xs`}></i>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-xs">{item.title}</p>
                      <p className="text-[10px] text-gray-400 font-medium mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ---- EXPLORE MORE PRODUCTS ---- */}
      <div className="bg-gray-50/50 py-16 mb-8 mt-10">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Explore more products</h2>
              <p className="text-gray-400 font-bold mt-1 uppercase text-[10px] tracking-widest">Recommended for you</p>
            </div>
            <Link href="/products" className="text-[#236da9] font-bold flex items-center gap-1.5 hover:underline tracking-widest text-[10px] uppercase">
              See All <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.slice(0, 5).map((p) => (
              <Link key={p.id} href={`/products/${p.id}`} className="bg-white rounded-3xl border border-gray-100 p-4 group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative">
                {/* Discount Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-[#236da9] text-white text-[9px] font-black px-2 py-1 rounded-lg shadow-lg">
                    {p.discount} OFF
                  </span>
                </div>
                
                <div className="aspect-square relative mb-4 bg-gray-50 rounded-2xl overflow-hidden">
                  <Image src={p.image} alt={p.name} fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h4 className="font-bold text-gray-800 text-[13px] mb-1 truncate">{p.name}</h4>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-base font-bold text-gray-900">₹{p.price}</span>
                  <span className="text-gray-400 text-[10px] line-through">₹{p.strike}</span>
                </div>
                <div className="w-full bg-[#236da9] text-white py-2 rounded-lg font-bold text-[9px] uppercase tracking-widest text-center shadow-md shadow-blue-50 group-hover:bg-[#1a5799] transition-colors">
                  View Details
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
