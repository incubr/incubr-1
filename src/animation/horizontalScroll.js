import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function GSAPHorizontalScroll() {
  let Sections = gsap.utils.toArray("section");
  
  gsap.to(Sections, {
    scrollTrigger: {
      trigger: "#PageWrap",
      pin: true,
      scrub: 1,
      endTrigger: "#forDesktop",
      end: "bottom bottom",
      // markers: true, // for dev server
    },
    xPercent: -99 * (Sections.length - 1),
    ease: "none",
  });
}
