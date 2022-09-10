import gsap from "gsap";

export const animateNavigation = (isRight=false, isDark=false) => {
  const timeline = gsap.timeline();

  timeline.to(".navigation", {
    duration: 0.3,
    width: "100%",
    position: "fixed",
    rotate: isRight ? "180deg" : "0deg",
  });
  
  timeline.to(".navigation .innerBox", {
    duration: 0.4,
    width: "100%",
    height: "100%",
    ease: "power2.inOut",
    borderRadius: 0,
    position: "relative",
    top: 0,
    backgroundColor: isDark ? "#1F1D1D" : "#1F1D1D",
  });

  timeline.to(".navigation .innerBox #navigation__list", {
    duration: 0.3,
    flex: "1",
    display: "flex",
    ease: "power2.inOut",
  });

  timeline.to(".navigation .innerBox #navigation__list ul li", {
    duration: 0.5,
    translateY: 0,
    ease: "power2.inOut",
    stagger: 0.1,
    opacity: 0.5,
  });

  timeline.to(".navigation .innerBox #navigation__list ul li #active", {
    opacity: 1,
  });
  
  gsap.to(".navigation .innerBox #button_section", {
    delay: 1.5,
    duration: 0.2,
    display: "flex",
  });

  timeline.to(".cross_button", {
    duration: 0.2,
    opacity: 1,
    ease: "power2.inOut",
    display: "flex",
  });
};

export const reverseNavigation = (isRight=false, isDark=false) => {
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
    height: isRight ? "31vw" : "22vw",
    position: isRight ? "absolute" : "relative",
    top: isRight ? "0" : "0",
    ease: "power2.inOut",
    borderRadius: " 0.75rem 0.75rem 0",
    backgroundColor: isDark
      ? isRight
        ? "#1F1D1D"
        : "#fff"
      : isRight
      ? "#fff"
      : "#1F1D1D",
  });
  timeline.to(".navigation", {
    rotate: isRight ? "0deg" : "0deg",
    duration: 0.3,
    width: isRight ? "auto" : "4rem",
    position: "absolute",
  });
};
