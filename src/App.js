import React from "react"
import Hero from "./components/Hero/Hero"
import Technologies from "./components/Technologies/Technologies"
import About from "./components/About/About"
import Work from "./components/Work/Work"
// import Timeline from "./components/Timeline/Timeline"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App bg-dark">
        <Hero />
        <About />
        <Work />
        <Technologies />
        {/* <Timeline /> */}
        <Footer />
    </div>
  );
}

export default App;
