import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const mobileAnimateNavigation = (isDark = false) => {
  const timeline = gsap.timeline();

  timeline.to("#hanger", {
    opacity: 0,
  });

  timeline.to(".navigation__mobile", {
    duration: 0.01,
    width: "100%",
    height: "100vh",
    position: "fixed",
    zIndex: 100,
  });

  timeline.to("#navigation__trigger", {
    opacity: 0,
  });

  timeline.to(".navigation__mobile .innerbox__mobile", {
    duration: 0.2,
    width: "100%",
    height: "100vh",
    ease: "power2.inOut",
    borderRadius: 0,
    position: "relative",
    top: 0,
  });

  timeline.to("#navigation__list__mobile", {
    duration: 0.1,
    display: "flex",
    ease: "power2.inOut",
  });

  timeline.to(
    ".navigation__mobile .innerbox__mobile #navigation__list__mobile ul li",
    {
      duration: 0.2,
      translateY: 0,
      ease: "power2.inOut",
      stagger: 0.1,
      opacity: 0.5,
    }
  );

  timeline.to(".navigation__mobile .innerbox__mobile #button_section__mobile", {
    duration: 0.2,
    display: "flex",
    opacity: 1,
  });

  timeline.to(".cross_button", {
    duration: 0.2,
    opacity: 1,
    ease: "power2.inOut",
    display: "flex",
  });
};

export const mobileReverseNavigation = (isRight = false, isDark = false) => {
  const timeline = gsap.timeline();
  timeline.to(".cross_button", {
    duration: 0.1,
    opacity: 0,
    ease: "power2.inOut",
    display: "none",
  });

  timeline.to(".navigation__mobile .innerbox__mobile #button_section__mobile", {
    duration: 0.1,
    display: "none",
    opacity: 0,
  });

  timeline.to(
    ".navigation__mobile .innerbox__mobile #navigation__list__mobile ul li",
    {
      duration: 0.1,
      translateY: -36,
      ease: "power2.inOut",
      stagger: 0.1,
      opacity: 0,
    }
  );

  timeline.to(
    ".navigation__mobile .innerbox__mobile #navigation__list__mobile",
    {
      duration: 0.1,
      flex: "1",
      display: "none",
      ease: "power2.inOut",
    }
  );

  timeline.to(".navigation__mobile .innerbox__mobile", {
    duration: 0.1,
    height: "0vw",
    ease: "power2.inOut",
  });

  timeline.to("#navigation__trigger", {
    opacity: 1,
  });

  timeline.to(".navigation__mobile", {
    duration: 0.1,
    height: "0vw",
    position: "absolute",
    zIndex: 40,
  });
  timeline.to("#hanger", {
    opacity: 1,
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


const revelElement = () => {}

