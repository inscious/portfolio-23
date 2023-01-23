import React from "react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./components//Skills";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
        </div>
    );
}

export default App;
