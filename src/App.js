import { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Header from "./Header";
import Home from "./Home";
import Volunteers from "./Volunteers";
import Faq from "./Faq";
import Coc from "./Coc";
import Links from "./Links";
import Shop from "./Shop";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <>
      <Router>
        <Header />
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 1,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#9ac004",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 40,
              },
              opacity: {
                value: 0.5,
              },

              shape: {
                type: "circle",
              },

              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
        <div className="center-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/volunteers" element={<Volunteers />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/coc" element={<Coc />} />
            <Route path="/links" element={<Links />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
