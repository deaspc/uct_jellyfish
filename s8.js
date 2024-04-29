const tl8 = gsap.timeline({
  scrollTrigger: {
    markers: false,
    trigger: ".container8",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    pinSpacing: false,
  },
});

tl8.fromTo(
  "#bg8",
  {
    filter: "brightness(0)",
  },
  {
    filter: "brightness(1)",
    duration: 2,
  }
);

tl8.fromTo(
  "#text80",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  },
  "<+=0.1"
);

tl8.fromTo(
  "#text80",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    rotateX: 90,
    duration: 2,
  }
);

// 10m
tl8.fromTo(
  "#img81l",
  {
    opacity: 0,
    x: 0,
  },
  {
    opacity: 1,
    x: -1000,
    duration: 3,
  }
);

// 20m

// 30m
