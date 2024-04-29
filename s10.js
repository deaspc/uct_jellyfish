const tl10 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container10",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});
