import Particles from "react-particles-js";
import React from "react";

function Particle() {
  return (
    <>
      <Particles
        width="100%"
        height="100vh"
        params={{
          particles: {
            number: {
              value: 109,
              density: {
                enable: true,
                value_area: 1200,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
              },
              polygon: {
                nb_sides: 12,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              opacity: 0.1,
              width: 0.3,
              shadow: {
                enable: true,
                color: "#e74c3c",
                blur: 5,
              },
            },
            move: {
              enable: true,
              random: true,
              speed: 0.7,
              attract: {
                rotateX: 600,
                rotateY: 1200,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                value: 0,
                speed: 40,
                size_min: 0.1,
              },
            },
            opacity: {
              value: 0.5,
              anim: {
                speed: 1,
                opacity_min: 0.1,
              },
            },
          },
        }}
      />
    </>
  );
}
export default Particle;
