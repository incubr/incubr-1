import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function GSAPHorizontalScroll() {
  const pageWrap = document.querySelector("#PageWrap");
  let Sections = gsap.utils.toArray("section");

  gsap.to(Sections, {
    scrollTrigger: {
      trigger: "#PageWrap",
      pin: true,
      scrub: 1,
      end: () => "+=" + pageWrap.scrollWidth + "px",
      // markers: true, // TODO: for dev server
    },
    xPercent: -100 * (Sections.length - 1),
    ease: "none",
  });
}
