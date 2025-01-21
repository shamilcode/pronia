import Collabrations from "./layout/Collabrations"
import Features from "./layout/Features"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import Hero from "./layout/Hero"
import LatestBlog from "./layout/LatestBlog"
import Products from "./layout/Products"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Products />
      <Collabrations />
      <LatestBlog />
      <Footer />
    </>
  )
}

export default App