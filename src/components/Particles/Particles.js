import Particles from "react-particles-js";
import React from "react";

function Particle(props) {
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
            color: {
              value: props.color,
            },
            shape: {
              type: props.Format,
              stroke: {
                width: 0,
              },
              polygon: {
                nb_sides: 30,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              opacity: 0.3,
              width: 0.1,
              shadow: {
                enable: true,
                color: "#1818d9",
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
