const tl12 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container12",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});
