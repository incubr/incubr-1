import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const mobileAnimateNavigation = (isDark = false) => {
  const timeline = gsap.timeline();

  timeline.to(".navigation_mobile", {
    duration: 0.3,
    width: "100%",
    position: "fixed",
  });

  timeline.to(".navigation_mobile .innerBox", {
    duration: 0.4,
    width: "100%",
    height: "100%",
    ease: "power2.inOut",
    borderRadius: 0,
    position: "relative",
    top: 0,
    backgroundColor: isDark ? "#1F1D1D" : "#1F1D1D",
  });

  timeline.to(".navigation_mobile .innerBox #navigation__list", {
    duration: 0.3,
    flex: "1",
    display: "flex",
    ease: "power2.inOut",
  });

  timeline.to(".navigation_mobile .innerBox #navigation__list ul li", {
    duration: 0.5,
    translateY: 0,
    ease: "power2.inOut",
    stagger: 0.1,
    opacity: 0.5,
  });

  timeline.to(".navigation_mobile .innerBox #navigation__list ul li #active", {
    opacity: 1,
  });

  timeline.to(".navigation_mobile .innerBox #button_section", {
    duration: 0.2,
    display: "flex",
  });

  timeline.to(".cross_button_mobile", {
    duration: 0.2,
    opacity: 1,
    ease: "power2.inOut",
    display: "flex",
  });
};

export const mobileReverseNavigation = ( isDark = false) => {
  const timeline = gsap.timeline();

  timeline.to(".navigation_mobile .innerBox #button_section", {
    duration: 0.3,
    display: "none",
  });
  timeline.to(".navigation_mobile .innerBox #navigation__list ul li", {
    duration: 0.2,
    translateY: -36,
    ease: "power2.inOut",
    stagger: 0.1,
    opacity: 0,
  });
  timeline.to(".navigation_mobile .innerBox #navigation__list", {
    duration: 0.3,
    flex: "1",
    display: "none",
    ease: "power2.inOut",
  });
  timeline.to(".navigation_mobile .innerBox", {
    duration: 0.3,
    width: "auto",
    height: "31vw",
    position: "absolute",
    right: "0",
    top: "43%",
    ease: "power2.inOut",
    borderRadius: "1.5rem 0 0 1.5rem",
    backgroundColor: isDark ?"#fff": "#1F1D1D" ,
  });
  timeline.to(".navigation_mobile", {
    duration: 0.3,
    width: "auto",
    position: "absolute",
  });

  timeline.to(".cross_button_mobile", {
    duration: 0.2,
    opacity: 0,
    ease: "power2.inOut",
    display: "none",
  });
};

gsap.registerPlugin(ScrollTrigger);
export const changeBarColor = (trigger, color, textColor) => {
  gsap.utils.toArray(trigger).forEach((el) => {
    gsap.to(".navigation__mobile .innerbox__mobile", {
      duration: 0.3,
      backgroundColor: color,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    gsap.to(".navigation__mobile .innerbox__mobile #navigation__trigger path", {
      duration: 0.3,
      fill: color,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  });
};

const revelElement = () => {};
