import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import Technologies from './pages/Technologies'

function App() {

  return (
    <>
      <div className="flex justify-center">
        <Navbar /> 
      </div>
      <div className="bg-[url('assets/bg-image.jpg')] bg-cover bg-left text-white">
          <Home />
          <About />
          <Technologies />
          <Projects />
          <Footer />
      </div>
    </>
  )
}

export default App
