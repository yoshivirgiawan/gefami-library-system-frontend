import Footer from 'parts/Footer'
import Header from 'parts/Header'
import Sitemap from 'parts/Sitemap'
import React from 'react'
import Books from 'parts/HomePage/Books'

export default function HomePage() {
  return (
    <>
      <Header position={'sticky'} />
      <Books />
      <Sitemap />
      <Footer />
    </>
  )
}
