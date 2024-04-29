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
    duration: 2,
  }
);

// 10m
tl8.fromTo(
  "#ten",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 2,
  }
);

tl8.fromTo(
  "#img81l",
  {
    opacity: 0,
    x: 0,
  },
  {
    opacity: 1,
    x: -10,
    duration: 3,
  }
);

tl8.fromTo(
  "#ten",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    duration: 2,
  }
);

tl8.fromTo(
  "#img83r",
  {
    opacity: 0,
    x: 0,
  },
  {
    opacity: 1,
    x: 10,
    duration: 3,
  },
  "<+=0.1"
);

tl8.fromTo(
  "#img81l",
  {
    x: -10,
  },
  {
    opacity: 0,
    x: -1000,
    duration: 5,
  }
);

tl8.fromTo(
  "#img83r",
  {
    x: 10,
  },
  {
    opacity: 0,
    x: 1000,
    duration: 5,
  },
  "<+=0.1"
);

// 20m

// 30m
