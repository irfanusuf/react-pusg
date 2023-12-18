import React, { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import NewsComponent from "./components/News/News";


export const myContext = createContext();


function App() {
  const [lightMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!lightMode)
    console.log("theme changed")  // for  error check 
  };


  const label = "meow"





  return (


    <div>



      <BrowserRouter>
        <myContext.Provider value={label}>


          <Navbar
            function={toggleDarkMode}
            buttonName={lightMode ? "Dark Mode" : "Light Mode"}
            divLi={lightMode ? "nav-li" : "nav-li-dark"}
            divName={lightMode ? "light-nav" : "dark-nav"}
            link1="Home"
            link2="Services"
            link3="Contact"
            link4="Gallery"

          />

          <Routes>
            <Route path="/" element={<Section
              user="Hazik"
              central={lightMode ? "central" : "central-dark"}
              section={lightMode ? "section" : "section-dark"}


            />} />
            <Route path="/services" element={<Services
              divName={lightMode ? "main-div-light" : "main-div-dark"}
              section={lightMode ? "center-section" : "center-section-dark"}
            />} />





            <Route path="/contact" element={<Contact />} />


            <Route path="/gallery" element={<Gallery />} />


            <Route path="/news" element={<NewsComponent/>} />
            <Route path="/about" element={<About />} />
          </Routes>


          <Footer
            divName={lightMode ? "footer-light" : "footer-dark"}

          />
        </myContext.Provider>
      </BrowserRouter>




    </div>








  );
}

export default App;
