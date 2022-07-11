import gsap from "gsap";

export const animateNavigation = (isRight=false) => {
  const timeline = gsap.timeline();

  timeline.to(".navigation", {
    duration: 0.2,
    width: "100%",
    position: "fixed",
    rotate: isRight ? "180deg" : "0deg",
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

export const reverseNavigation = (isRight=false) => {
  const timeline = gsap.timeline();
  timeline.to(".cross_button", {
    duration: 0.2,
    opacity: 0,
    ease: "power2.inOut",
    display: "none",
  });
  timeline.to(".navigation .innerBox #button_section", {
    duration: 0.3,
    display: "none",
  });
  timeline.to(".navigation .innerBox #navigation__list ul li", {
    duration: 0.2,
    translateY: -36,
    ease: "power2.inOut",
    stagger: 0.1,
    opacity: 0,
  });
  timeline.to(".navigation .innerBox #navigation__list", {
    duration: 0.3,
    flex: "1",
    display: "none",
    ease: "power2.inOut",
  });
  timeline.to(".navigation .innerBox", {
    duration: 0.3,
    width: "auto",
    height: isRight ? "18rem": "22vw",
    ease: "power2.inOut",
    borderRadius: " 0.75rem 0.75rem 0",
  });
  timeline.to(".navigation", {
    rotate: isRight ? "0deg" : "0deg",
    duration: 0.3,
    width: "auto",
    position: "absolute",
  });
};
