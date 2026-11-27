// Home page: reveal cards on scroll and count the stats up once they are visible.
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fmt = (n) => Math.round(n).toLocaleString("en-US");

  function countUp(el) {
    const to = Number(el.dataset.to);
    const suffix = el.dataset.suffix || "";
    const prefix = el.dataset.prefix || "";
    if (reduce) {
      el.textContent = prefix + fmt(to) + suffix;
      return;
    }
    const dur = 1600;
    const t0 = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + fmt(to * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function init() {
    const items = document.querySelectorAll(".hm-reveal");
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-in"));
      document.querySelectorAll(".hm-num").forEach(countUp);
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-in");
          const num = e.target.querySelector(".hm-num");
          if (num) countUp(num);
          io.unobserve(e.target);
        }),
      { threshold: 0.25 }
    );
    items.forEach((el) => io.observe(el));
  }

  document.addEventListener("DOMContentLoaded", init);
})();
