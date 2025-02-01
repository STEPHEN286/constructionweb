import AboutSection from "./components/about/AboutSection"
import ChoosenSection from "./components/choosen-section/ChoosenSection"
import Header from "./components/header/Header"
import Navbar from "./components/header/Navbar"
import Carousel from "./components/hero/Carousel"
import Hero from "./components/hero/Hero"
import StorySection from "./components/our-story/StorySection"
import ProjectSection from "./components/project-section/ProjectSection"
import Responsive from "./components/ui/Responsive"

function App() {


  return (
    <>
    <Header />
    <Navbar />
   <Hero />
   <AboutSection />
   <StorySection />
  
   <ProjectSection />
   <ChoosenSection />
   {/* <Responsive /> */}
    </>
  )
}

export default App
