let lenis;
const galleryImages = document.querySelectorAll(".section_panel_box > img");
const stickyImage = document.querySelector(".section_sticky_item > img");

const animate = () => {
  gsap.set([galleryImages, stickyImage], {
    autoAlpha: 0,
    filter: "brightness(400%) blur(10px)",
    "-webkit-filter": "brightness(400%) blur(10px)",
  });

  gsap.to([galleryImages, stickyImage], {
    duration: 1.64,
    autoAlpha: 1,
    stagger: {
      amount: 0.32,
      from: "random",
    },
    ease: "expo.inOut",
    filter: "brightness(100%) blur(0px)",
    "-webkit-filter": "brightness(100%) blur(0px)",
  });

  initLenis();
  addEventListeners();
};

const initLenis = () => {
  lenis = new Lenis({
    lerp: 0.08,
    smoothWheel: true,
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
};

const addEventListeners = () => {
  galleryImages.forEach((image) => {
    image.addEventListener("mouseenter", (e) => {
      const getSrc = e.target.src;

      gsap
        .timeline({ defaults: { ease: "power2.inOut" } })
        .to(stickyImage, {
          duration: 0.25,
          scale: 1.15,
          autoAlpha: 0.33,
          filter: "brightness(400%) blur(10px)",
          "-webkit-filter": "brightness(400%) blur(10px)",
        })
        .set(stickyImage, { attr: { src: getSrc } }, 0.1)
        .to(
          stickyImage,
          {
            duration: 0.25,
            scale: 1,
            autoAlpha: 1,
            filter: "brightness(100%) blur(0px)",
            "-webkit-filter": "brightness(100%) blur(0px)",
          },
          0.1
        );
    });
  });
};
animate();
