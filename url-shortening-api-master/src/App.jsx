import Hero from "./components/Hero/Hero"
import Nav from "./components/Nav/Nav"
import ShortenALink from "./components/ShortenALink/ShortenALink"
import "./styles/app.css"
function App() {

  return (
    <>
      {/* NAV */}
      <Nav />
      {/* HERO */}
      <Hero />
      {/* SHORTEN A LINK */}
      <ShortenALink />
    </>
  )
}

export default App
