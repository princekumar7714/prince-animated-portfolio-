import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function setSplitText() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  if (window.innerWidth < 900) return;
  
  const paras: NodeListOf<HTMLElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<HTMLElement> = document.querySelectorAll(".title");

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";

  paras.forEach((para: HTMLElement) => {
    para.classList.add("visible");
    
    gsap.fromTo(
      para,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          start: TriggerStart,
        },
        duration: 0.8,
        ease: "power2.out",
      }
    );
  });
  
  titles.forEach((title: HTMLElement) => {
    gsap.fromTo(
      title,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          start: TriggerStart,
        },
        duration: 0.6,
        ease: "power2.out",
      }
    );
  });
}
