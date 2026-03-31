import HeaderTop from './components/HeaderTop'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import BatchesSection from './components/BatchesSection'
import GallerySection from './components/GallerySection'
import AchievementsSection from './components/AchievementsSection'
import StaffSection from './components/StaffSection'
import AboutSection from './components/AboutSection'
import ReviewsSection from './components/ReviewsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <div className="font-body">
      {/* <HeaderTop /> */}
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BatchesSection />
        <GallerySection />
        <AchievementsSection />
        <StaffSection />
        <AboutSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
