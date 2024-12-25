import React, { useEffect } from "react";
import Particles from "react-tsparticles";

function Particle() {
  useEffect(() => {
    let lFollowX = 0,
      lFollowY = 0,
      x = 0,
      y = 0,
      rotationX = 0,
      rotationY = 0,
      friction = 1 / 30;

    const handleMove = (event) => {
      const clientX = event.clientX || (event.touches && event.touches[0].clientX);
      const clientY = event.clientY || (event.touches && event.touches[0].clientY);

      const lMouseX = Math.max(
        -100,
        Math.min(100, window.innerWidth / 2 - clientX)
      );
      const lMouseY = Math.max(
        -100,
        Math.min(100, window.innerHeight / 2 - clientY)
      );
      lFollowX = (20 * lMouseX) / 100;
      lFollowY = (10 * lMouseY) / 100;
    };

    const moveParticles = () => {
      x += (lFollowX - x) * friction;
      y += (lFollowY - y) * friction;
      rotationX += (y - lFollowY) * 0.04;
      rotationY += (x - lFollowX) * 0.04;

      const particlesContainer = document.getElementById("tsparticles");
      if (particlesContainer) {
        particlesContainer.style.transform = `translate(${x}px, ${y}px) rotateX(${rotationX}deg) rotateY(${rotationY}deg) scale(1.1)`;
      }

      requestAnimationFrame(moveParticles);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);

    moveParticles();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, []);

  return (
    <Particles
      id="tsparticles"
      params={{
        // Particle configuration
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        // Interactivity configuration
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
