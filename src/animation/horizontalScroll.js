import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function GSAPHorizontalScroll() {
  let Sections = gsap.utils.toArray("section");
  let sect = document.querySelector(".slider-work");
  gsap.to(Sections, {
    scrollTrigger: {
      trigger: "#PageWrap",
      pin: true,
      scrub: 1,
      endTrigger: "#forDesktop",
      end: "bottom bottom",
      // markers: true, // for dev server
    },
    xPercent:
      (window.innerWidth > 1024 ? -96.5 : -105)  * (Sections.length - 1),
    ease: "none",
  });
}
