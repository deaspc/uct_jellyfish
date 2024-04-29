const tl9 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container9",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});

tl9.fromTo(
  "#bg9",
  {
    filter: "brightness(0.25)",
  },
  {
    filter: "brightness(0.15)",
    duration: 2,
  }
);
