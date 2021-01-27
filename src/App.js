import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <Particles 
        params={{
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 900,
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#8bc34a"
              }
            },
            line_linked: {
              shadow: {
                enable: true,
                color: "#3ca9d1",
                blur: 5
              }
            },
            collisions: {
              enable: true,
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
