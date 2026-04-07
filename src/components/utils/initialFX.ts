import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0].classList.add("main-active");
  
  // Simple fade-in animations
  gsap.to(".landing-intro h1, .landing-intro h2, .landing-info h3", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2,
    stagger: 0.1,
    ease: "power2.out"
  });

  gsap.to(".landing-info-h2, .landing-h2-info", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    delay: 0.5
  });

  gsap.to(".header, .icons-section, .nav-fade", {
    opacity: 1,
    duration: 0.6,
    delay: 0.1
  });
}
