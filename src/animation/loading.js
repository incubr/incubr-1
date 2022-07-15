import gsap from "gsap";

export const beforeAnimationStart = () => {
  gsap.to("#mainAnimation", {
    height: "100vh",
    opacity: 1,
  });
};

export const afterAnimationStart = () => {
  const tl = gsap.timeline();
  tl.to("#mainAnimation", {
    duration: 0.3,
    top: 0,
    height: "0vh",
    opacity: 0,
    ease: "power3.out",
  });
  tl.to("#mainAnimation", {
    bottom: 0,
  });
};
