import gsap from "gsap";

export const beforeAnimationStart = () => {
  gsap.to("#mainAnimation", {
    height: "100vh",
    opacity: 1,
  });
};

export const afterAnimationStart = () => {
  let tl = gsap.timeline();
  tl.to("#mainAnimation", {
    duration: 0.3,
    height: 0,
    ease: "power3.out",
  });
};

export default function loading() {
  let cwWidth = document.querySelector(".card-wrapper").offsetHeight;
  gsap
    .timeline({
      repeat: -1,
      defaults: {
        ease: "none",
      },
    })
    .fromTo(
      ".card-wrapper",
      {
        y: (i, el) => cwWidth * i,
      },
      {
        y: (i, el, t) => -cwWidth * (t.length - i) * 25,
        ease: "none",
        duration: 60,
      }
    );
}
