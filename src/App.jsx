import AboutSection from "./components/about/AboutSection"
import ChoosenSection from "./components/choosen-section/ChoosenSection"
import Header from "./components/header/Header"
import Navbar from "./components/header/Navbar"
import Carousel from "./components/hero/Carousel"
import StorySection from "./components/our-story/StorySection"
import ProjectSection from "./components/project-section/ProjectSection"

function App() {


  return (
    <>
    <Header />
    <Navbar />
   <Carousel />
   <AboutSection />
   <StorySection />
  
   <ProjectSection />
   <ChoosenSection />
    </>
  )
}

export default App
