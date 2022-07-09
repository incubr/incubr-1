import gsap from "gsap";

export const animateNavigation = () => {
  const timeline = gsap.timeline();
  timeline.to(".navigation", {
    duration: 0.2,
    width: "100%",
  });
  
  timeline.to(".navigation .innerBox", {
    duration: 0.5,
    width: "100%",
    height: "100%",
    ease: "power2.inOut",
    borderRadius: 0,
  });

  timeline.to(".navigation .innerBox #navigation__list", {
    duration: 0.5,
    flex: "1",
    display: "flex",
    ease: "power2.inOut",
  });

  timeline.to(".navigation .innerBox #navigation__list ul li", {
    duration: 0.5,
    translateY: 0,
    ease: "power2.inOut",
    stagger: 0.2,
    opacity: 1,
  });

  timeline.to(".navigation .innerBox #button_section", {
    duration: 0.5,
    display: "flex",
  });

  timeline.to(".cross_button", {
    duration: 0.5,
    opacity: 1,
    ease: "power2.inOut",
    display: "flex",
  });
};

export const reverseNavigation = () => {
  const timeline = gsap.timeline();
  timeline.to(".cross_button", {
    duration: 0.2,
    opacity: 0,
    ease: "power2.inOut",
    display: "none",
  });
  timeline.to(".navigation .innerBox #button_section", {
    duration: 0.5,
    display: "none",
  });
  timeline.to(".navigation .innerBox #navigation__list ul li", {
    duration: 0.2,
    translateY: -36,
    ease: "power2.inOut",
    stagger: 0.2,
    opacity: 0,
  });
  timeline.to(".navigation .innerBox #navigation__list", {
    duration: 0.5,
    flex: "1",
    display: "none",
    ease: "power2.inOut",
  });
  timeline.to(".navigation .innerBox", {
    duration: 0.5,
    width: "auto",
    height: "22vw",
    ease: "power2.inOut",
    borderRadius: " 0.75rem 0.75rem 0",
  });
  timeline.to(".navigation", {
    duration: 0.5,
    width: "auto",
  });
};
