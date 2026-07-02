"use client";

import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  return (
    <main className="flex-1 bg-[#f8fafc] min-h-screen pb-20">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm font-medium text-gray-500 gap-2">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-900">Cart</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <span className="text-[#236da9] font-bold text-sm uppercase tracking-wider">Your Cart</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Ready to checkout?</h1>
            <p className="text-gray-500 font-medium text-lg">
              Review items, update quantities, and continue to secure checkout.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="bg-white px-5 py-2.5 rounded-full border border-gray-200 shadow-sm flex items-center gap-2">
              <span className="text-gray-400 font-bold">0 items</span>
            </div>
            <div className="bg-white px-5 py-2.5 rounded-full border border-gray-200 shadow-sm flex items-center gap-2">
              <span className="text-[#236da9] font-bold">₹0</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Cart Items */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-8 flex items-center justify-between border-b border-gray-50">
                <h2 className="text-xl font-bold text-gray-900">Cart Items</h2>
                <Link href="/products" className="text-[#236da9] font-bold hover:underline">Continue shopping</Link>
              </div>

              {/* Empty Cart State */}
              <div className="p-12 sm:p-20 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-blue-50 rounded-[2rem] flex items-center justify-center text-[#236da9] mb-8">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h3>
                <p className="text-gray-500 font-medium max-w-sm mb-10 text-lg">
                  Browse our machines and add the best picks for your farm.
                </p>
                <Link
                  href="/products"
                  className="bg-[#236da9] hover:bg-[#1a5a8f] text-white px-10 py-4 rounded-xl font-bold uppercase tracking-wider shadow-lg shadow-blue-100 transition-all active:scale-95"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-8">Order Summary</h2>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-gray-600 font-medium">
                  <span>Subtotal</span>
                  <span className="font-bold text-gray-900">₹0</span>
                </div>
                <div className="flex justify-between items-center text-gray-600 font-medium">
                  <span>Shipping</span>
                  <span className="text-sm">Calculated at checkout</span>
                </div>
                <div className="flex justify-between items-center text-gray-600 font-medium">
                  <span>Taxes</span>
                  <span className="text-sm">Included</span>
                </div>
                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-[#236da9]">₹0</span>
                </div>
              </div>

              <button className="w-full bg-gray-100 text-gray-400 py-4 rounded-xl font-bold uppercase tracking-wider cursor-not-allowed flex items-center justify-center gap-2 mb-6">
                Proceed to Checkout
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-2xl border border-gray-50 bg-gray-50/30">
                  <div className="text-[#236da9]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Fast dispatch</h4>
                    <p className="text-xs text-gray-500 font-medium">Priority handling for machine orders</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl border border-gray-50 bg-gray-50/30">
                  <div className="text-[#236da9]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Secure checkout</h4>
                    <p className="text-xs text-gray-500 font-medium">Verified payments and safe shipping</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Need Help Card */}
            <div className="bg-[#1a5f9e] rounded-3xl p-8 text-white">
              <span className="text-blue-200 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Need Help?</span>
              <h3 className="text-2xl font-bold mb-3 leading-tight">Talk to our product experts</h3>
              <p className="text-blue-100 text-sm font-medium mb-8 leading-relaxed">
                Get guidance on machine specs, spares, and delivery timelines.
              </p>
              <button className="bg-white text-[#1a5f9e] w-full py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-blue-50 transition-colors shadow-lg">
                Call Now
              </button>
            </div>
          </div>
        </div>

        {/* Bought Together Section (Complete your setup) */}
        <section className="mt-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-[#236da9] font-bold text-sm uppercase tracking-wider mb-2 block">Bought Together</span>
              <h2 className="text-4xl font-bold text-gray-900">Complete your setup</h2>
            </div>
            <Link href="/products" className="text-gray-500 hover:text-primary font-bold text-lg mb-1">View all</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 1, name: "MBC43A", price: "14,500", oldPrice: "28,000", discount: "48% OFF", save: "13,500", image: "/mbc.webp", tag: "4.5" },
              { id: 2, name: "MBC37SC", price: "11,000", oldPrice: "25,500", discount: "57% OFF", save: "14,500", image: "/mb.webp", tag: "SUMMERSALE", rating: "4.5" },
              { id: 3, name: "MBC37SBC", price: "12,000", oldPrice: "27,600", discount: "57% OFF", save: "15,600", image: "/gaso.webp", tag: "BEST SELLER", rating: "4.5" },
              { id: 4, name: "Chainsaw MCS58A-22SN", price: "10,500", oldPrice: "26,700", discount: "61% OFF", save: "16,200", image: "/chain.webp", tag: "4.5" },
            ].map((product) => (
              <div key={product.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square p-8 bg-gray-50/50">
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-[#236da9] text-white text-[10px] font-bold px-2 py-3 rounded-lg flex flex-col items-center leading-none">
                    <span>{product.discount.split(' ')[0]}</span>
                    <span className="mt-1">OFF</span>
                  </div>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex gap-2 mb-3">
                    {product.tag.includes('.') ? (
                      <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded text-orange-400 text-xs font-bold">
                        <span>★</span> {product.tag}
                      </div>
                    ) : (
                      <div className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                        {product.tag}
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-4 h-12 line-clamp-2">{product.name}</h3>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
                    <span className="text-gray-400 line-through text-sm">₹{product.oldPrice}</span>
                  </div>
                  <div className="text-green-600 text-xs font-bold mb-6">
                    You Save ₹{product.save}
                  </div>
                  <div className="space-y-2">
                    <button className="w-full bg-[#236da9] hover:bg-[#1a5a8f] text-white py-3 rounded-xl font-bold uppercase text-sm transition-colors">
                      Buy Now
                    </button>
                    <button className="w-full bg-white border-2 border-primary/10 hover:border-primary/30 text-[#236da9] py-3 rounded-xl font-bold uppercase text-sm transition-all">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
