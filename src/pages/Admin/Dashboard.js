import Footer from 'parts/Footer'
import Sitemap from 'parts/Sitemap'
import React from 'react'

export default function Dashboard() {
  return (
    <>
      <section class="p-8">
        <div class="container min-h-screen">
          <div class="w-full">
            <h2 class="text-3xl font-normal mb-6 leading-none">Dashboard</h2>
            <div>
              <div className="grid grid-cols-4 gap-6">
                <div className="bg-[#c2d6ff] p-10 rounded-3xl relative overflow-hidden">
                  <div className="text-[#597393] text-lg">Jumlah User</div>
                  <div className="text-[#002060] text-xl">
                    <span className="text-3xl">150</span> User
                  </div>
                  <div className="bg-white h-[80px] w-[77px] rounded-full opacity-20 absolute -right-4 -bottom-4" />
                  <div className="bg-white h-[80px] w-[77px] rounded-full opacity-20 absolute -right-10 bottom-4" />
                </div>

                <div className="bg-[#c2d6ff] p-10 rounded-3xl relative overflow-hidden">
                  <div className="text-[#597393] text-lg">
                    Jumlah User Aktif
                  </div>
                  <div className="text-[#002060] text-xl">
                    <span className="text-3xl">150</span> User
                  </div>
                  <div className="bg-white h-[80px] w-[77px] rounded-full opacity-20 absolute -right-4 -bottom-4" />
                  <div className="bg-white h-[80px] w-[77px] rounded-full opacity-20 absolute -right-10 bottom-4" />
                </div>

                <div className="bg-[#c2d6ff] p-10 rounded-3xl relative overflow-hidden">
                  <div className="text-[#597393] text-lg">Jumlah Produk</div>
                  <div className="text-[#002060] text-xl">
                    <span className="text-3xl">150</span> Produk
                  </div>
                  <div className="bg-white h-[80px] w-[77px] rounded-full opacity-20 absolute -right-4 -bottom-4" />
                  <div className="bg-white h-[80px] w-[77px] rounded-full opacity-20 absolute -right-10 bottom-4" />
                </div>

                <div className="bg-[#c2d6ff] p-10 rounded-3xl relative overflow-hidden">
                  <div className="text-[#597393] text-lg">
                    Jumlah Produk Aktif
                  </div>
                  <div className="text-[#002060] text-xl">
                    <span className="text-3xl">150</span> Produk
                  </div>
                  <div className="bg-white h-[80px] w-[77px] rounded-full opacity-20 absolute -right-4 -bottom-4" />
                  <div className="bg-white h-[80px] w-[77px] rounded-full opacity-20 absolute -right-10 bottom-4" />
                </div>
              </div>
              <div className="bg-white p-10 mt-10 rounded-3xl">
                <h3 className="text-2xl font-semibold">Produk Terbaru</h3>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
