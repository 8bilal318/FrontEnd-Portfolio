// import React from 'react'
// import Navbar from '../src/components/Navbar'
// import Home from './components/Home'
// import About from './components/About'
// import Services from './components/Services'
// import Work from './components/Work'
// import Testimonials from './components/Testimonials'
// import Footer from './components/Footer'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
      

//       {/* <Home/>
//       <About/>
//       <Services/>
//       <Work/>
//       <Testimonials/> */}

//       <section id="home"><Home /></section>

// <section id="about"><About /></section>


// <section id="services"><Services /></section>


// <section id="work"><Work /></section>


// <section id="contact"><Testimonials /></section>

// <Footer/>
//     </div>
//   )
// }

// export default App






// without gpt


// import React, { useState } from "react";
// import Navbar from "../src/components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Services from "./components/Services";
// import Work from "./components/Work";
// import Testimonials from "./components/Testimonials";
// import Footer from "./components/Footer";

// const App = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div
//       className={
//         darkMode
//           ? "dark bg-black text-white min-h-screen transition-all duration-300"
//           : "bg-white text-black min-h-screen transition-all duration-300"
//       }
//     >
//       {/* Navbar receives theme props */}
//       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

//       {/* Sections */}
//       <section id="home">
//         <Home />
//       </section>

//       <section id="about">
//         <About />
//       </section>

//       <section id="services">
//         <Services />
//       </section>

//       <section id="work">
//   <Work darkMode={darkMode} />
// </section>


//       <section id="contact">
//         <Testimonials />
//       </section>
      

//      <Footer darkMode={darkMode} />

//     </div>
//   );
// };

// export default App;
















































import React, { useState } from "react";
import Navbar from "../src/components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(true); // default dark (recommended)

  return (
    <div
      className={`${
        darkMode
          ? "bg-[#0f172a] text-white"
          : "bg-white text-black"
      } min-h-screen transition-colors duration-300 scroll-smooth`}
    >
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Sections */}
      <main className="pt-24 space-y-24">
        
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="work">
          <Work />
        </section>

        <section id="contact">
          <Testimonials />
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;