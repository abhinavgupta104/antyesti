import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmergencyBanner from './components/layout/EmergencyBanner'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/layout/WhatsAppFloat'
import ScrollToTop from './components/layout/ScrollToTop'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Pandits from './pages/Pandits'
import PanditProfile from './pages/PanditProfile'
import Packages from './pages/Packages'
import Cities from './pages/Cities'
import CityDetail from './pages/CityDetail'
import RitualsGuide from './pages/RitualsGuide'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import BookService from './pages/BookService'
import PrePlanning from './pages/PrePlanning'
import GriefSupport from './pages/GriefSupport'

import './styles/globals.css'

export default function App() {
  return (
    <BrowserRouter>
      {/* ScrollToTop must be inside BrowserRouter to use useLocation */}
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <EmergencyBanner />
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/pandits" element={<Pandits />} />
            <Route path="/pandits/:id" element={<PanditProfile />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/cities" element={<Cities />} />
            <Route path="/cities/:city" element={<CityDetail />} />
            <Route path="/rituals" element={<RitualsGuide />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<BookService />} />
            <Route path="/pre-planning" element={<PrePlanning />} />
            <Route path="/grief-support" element={<GriefSupport />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  )
}
