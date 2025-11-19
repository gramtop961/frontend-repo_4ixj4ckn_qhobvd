import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-indigo-50/30 text-slate-800">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default App
