const tl10 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container10",
    pin: true,
    start: "top top",
    end: "max",
    scrub: true,
    pinSpacing: false,
  },
});
