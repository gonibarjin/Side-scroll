gsap.registerPlugin(ScrollTrigger);

// Animation for first slide
gsap.from(".slide.one h1", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".slide.one",
    start: "top center",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".slide.one p", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".slide.one",
    start: "top center",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".slide.one .btn", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".slide.one",
    start: "top center",
    toggleActions: "play none none reverse",
  },
});

// Animation for second slide
gsap.from(".slide.two .content-left", {
  opacity: 0,
  x: -50,
  duration: 1,
  scrollTrigger: {
    trigger: ".slide.two",
    start: "top center",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".slide.two .side-img", {
  opacity: 0,
  x: 50,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".slide.two",
    start: "top center",
    toggleActions: "play none none reverse",
  },
});

// Animation for fourth slide
gsap.from(".slide.four .content-left", {
  opacity: 0,
  x: -50,
  duration: 1,
  scrollTrigger: {
    trigger: ".slide.four",
    start: "top center",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".slide.four .dest-img", {
  opacity: 0,
  x: 50,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".slide.four",
    start: "top center",
    toggleActions: "play none none reverse",
  },
});

// Animation for third slide
gsap.from(".slide.three .content-left", {
  opacity: 0,
  x: -50,
  duration: 1,
  scrollTrigger: {
    trigger: ".slide.three",
    start: "top center",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".slide.three .side-panel", {
  opacity: 0,
  scale: 0.9,
  duration: 1,
  delay: 0.3,
  scrollTrigger: {
    trigger: ".slide.three",
    start: "top center",
    toggleActions: "play none none reverse",
  },
});
