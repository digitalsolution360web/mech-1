"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const categories = [
  { name: "All Products", count: 11 },
  { name: "Power Weeder", count: 2 },
  { name: "Brush Cutter", count: 2 },
  { name: "Chainsaw", count: 2 },
  { name: "Water Pumps", count: 2 },
  { name: "Gasoline Engine", count: 2 },
  { name: "Spare Parts", count: 1 },
];

const products = [
  { id: 1, name: "MBC45L", image: "/c.webp", badge: "NEW", discount: "57%", price: "9,500", strike: "22,000", save: "12,500", category: "Brush Cutter", rating: 4 },
  { id: 2, name: "MBC37SC", image: "/mb.webp", badge: "SUMMER SALE", discount: "57%", price: "11,000", strike: "25,500", save: "14,500", category: "Brush Cutter", rating: 5 },
  { id: 3, name: "MBC37SBC", image: "/mbc.webp", badge: "BEST SELLER", discount: "57%", price: "12,000", strike: "27,600", save: "15,600", category: "Brush Cutter", rating: 5 },
  { id: 4, name: "Chainsaw MCS58A-22SN", image: "/chain.webp", badge: "", discount: "61%", price: "10,500", strike: "26,700", save: "16,200", category: "Chainsaw", rating: 4 },
  { id: 5, name: "Gasoline Engine ME170A", image: "/gaso.webp", badge: "", discount: "20%", price: "8,500", strike: "10,600", save: "2,100", category: "Gasoline Engine", rating: 4 },
  { id: 6, name: "Gasoline Engine ME200A", image: "/gaso.webp", badge: "", discount: "20%", price: "9,000", strike: "11,200", save: "2,200", category: "Gasoline Engine", rating: 4 },
  { id: 7, name: "Petrol Water Pump 1 Inch", image: "/c4.webp", badge: "", discount: "15%", price: "5,500", strike: "6,500", save: "1,000", category: "Water Pumps", rating: 4 },
  { id: 8, name: "Petrol Water Pump 2 Inch", image: "/c4.webp", badge: "", discount: "18%", price: "7,200", strike: "8,800", save: "1,600", category: "Water Pumps", rating: 4 },
  { id: 9, name: "Power Weeder MT900GA-208CC", image: "/power.webp", badge: "HOT DEAL", discount: "54%", price: "31,000", strike: "68,000", save: "37,000", category: "Power Weeder", rating: 5 },
  { id: 10, name: "Power Weeder MT900GA-208CC", image: "/power.webp", badge: "", discount: "54%", price: "31,000", strike: "68,000", save: "37,000", category: "Power Weeder", rating: 4 },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortOrder, setSortOrder] = useState("default");

  // Update search query if URL param changes
  useEffect(() => {
    const search = searchParams.get("search");
    if (search !== null) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  let filtered = activeCategory === "All Products"
    ? products
    : products.filter((p) => p.category === activeCategory);

  if (searchQuery.trim()) {
    filtered = filtered.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (sortOrder === "price-asc") {
    filtered = [...filtered].sort((a, b) => parseInt(a.price.replace(/,/g, "")) - parseInt(b.price.replace(/,/g, "")));
  } else if (sortOrder === "price-desc") {
    filtered = [...filtered].sort((a, b) => parseInt(b.price.replace(/,/g, "")) - parseInt(a.price.replace(/,/g, "")));
  } else if (sortOrder === "discount") {
    filtered = [...filtered].sort((a, b) => parseInt(b.discount) - parseInt(a.discount));
  }

  return (
    <main className="flex-1 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-[#1a5799] py-14 px-6">
        <div className="max-w-[1400px]  ml-43">
          <h1 className="text-4xl  font-bold  text-white mb-2">
            {searchQuery ? `Search: "${searchQuery}"` : activeCategory}
          </h1>
          <p className="text-blue-200 font-medium text-base">
            Browse our complete range of agricultural machines and equipment
          </p>
        </div>
      </div>

      {/* Search & Sort Toolbar */}
      <div>
        <div className="max-w-full px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <i className="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#236da9]/30 focus:border-[#236da9] transition-all"
            />
          </div>

          {/* Right: Sort + Count */}
          <div className="flex items-center  gap-4">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#236da9]/30 focus:border-[#236da9] transition-all bg-white cursor-pointer"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="discount">Best Discount</option>
            </select>
            <span className="text-sm font-bold text-gray-500 whitespace-nowrap">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-5 border-b border-gray-100 flex items-center gap-2">
                <i className="fa-solid fa-filter text-[#236da9] text-sm"></i>
                <span className="font-black text-gray-900 text-sm uppercase tracking-wide">Categories</span>
              </div>
              <ul>
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <button
                      onClick={() => setActiveCategory(cat.name)}
                      className={`w-full text-left px-5 py-3.5 text-sm flex items-center justify-between transition-all group border-l-4 ${activeCategory === cat.name
                        ? "border-[#236da9] bg-blue-50 text-[#236da9] font-black"
                        : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-[#236da9] hover:border-blue-200 font-medium"
                        }`}
                    >
                      <span>{cat.name}</span>
                      <span className={`text-xs rounded-full px-2 py-0.5 font-bold ${activeCategory === cat.name
                        ? "bg-[#236da9] text-white"
                        : "bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-[#236da9]"
                        }`}>
                        {cat.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((prod) => (
                <Link
                  key={prod.id}
                  href={`/products/${prod.id}`}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col relative group overflow-hidden cursor-pointer"
                >
                  {/* Discount Badge */}
                  <div
                    className="absolute top-0 right-3 bg-[#007bff] text-white text-[10px] font-black px-2 pt-2.5 pb-3.5 z-10 shadow flex flex-col items-center leading-none"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 75% 88%, 50% 100%, 25% 88%, 0 100%)" }}
                  >
                    <span>{prod.discount}</span>
                    <span className="text-[8px]">OFF</span>
                  </div>

                  {/* Badge */}
                  {prod.badge && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-orange-500 text-white text-[8px] font-black px-2 py-1 rounded uppercase tracking-wider shadow">
                        {prod.badge}
                      </span>
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-blue-50/60 overflow-hidden">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-contain p-5 group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-1">
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className={`fa-solid fa-star text-xs ${i < prod.rating ? "text-yellow-400" : "text-gray-200"}`}></i>
                      ))}
                    </div>

                    <h3 className="font-extrabold text-gray-900 text-sm leading-tight mb-3 line-clamp-2 min-h-[40px]">
                      {prod.name}
                    </h3>

                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black text-gray-900">₹{prod.price}</span>
                        <span className="text-gray-400 text-xs line-through">₹{prod.strike}</span>
                      </div>
                      <p className="text-green-600 text-xs font-bold mt-1">
                        <span className="bg-green-50 px-1.5 py-0.5 rounded">You Save ₹{prod.save}</span>
                      </p>
                    </div>

                    {/* Buttons */}
                    <div className="mt-auto space-y-2">
                      <div className="w-full bg-[#236da9] hover:bg-[#1a5a8f] text-white py-2.5 rounded-xl font-black text-xs uppercase tracking-wide transition-all shadow-md shadow-blue-100 flex items-center justify-center">
                        Buy Now
                      </div>
                      <div className="w-full border-2 border-[#236da9] text-[#236da9] hover:bg-blue-50 py-2.5 rounded-xl font-black text-xs uppercase tracking-wide transition-all flex items-center justify-center">
                        Add to Cart
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
