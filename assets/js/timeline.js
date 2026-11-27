// Animated career timeline: year, what, where.
(function () {
  const milestones = [
    {
      year: "2026",
      range: "Oct 2026 – present",
      title: "Senior Data Scientist",
      place: "Vanderbilt University · Nashville, TN",
      text: "Current role, on site in Nashville.",
      icon: "fas fa-chart-line",
      kind: "work",
    },
    {
      year: "2025",
      range: "Oct 2025 – Oct 2026",
      title: "Research Engineer, fairseq2",
      place: "Meta FAIR · Remote",
      text: "Distributed training, SFT/RL post-training, and Ray-based LLM and speech-LLM inference for FAIR research.",
      icon: "fas fa-rocket",
      kind: "work",
    },
    {
      year: "2024",
      range: "Apr 2024 – Dec 2025",
      title: "Senior Software Engineer, Research Development",
      place: "University of Florida Research Computing · Gainesville, FL",
      text: "LLM inference microservices (NIM, vLLM, Triton, TensorRT); scaled a medical-imaging foundation model to 128 GPUs.",
      icon: "fas fa-server",
      kind: "work",
    },
    {
      year: "2022",
      range: "Apr 2022 – present",
      title: "NVIDIA DLI University Ambassador",
      place: "NVIDIA Deep Learning Institute",
      text: "Certified instructor for generative AI, model-parallel training, CUDA Python, and deep learning; GPU hackathon mentor.",
      icon: "fas fa-chalkboard-teacher",
      kind: "work",
    },
    {
      year: "2022",
      range: "Jan 2022 – Apr 2024",
      title: "Senior AI Research Support Engineer",
      place: "University of Florida Research Computing · Gainesville, FL",
      text: "Multi-GPU deep-learning training and AI pipelines for computer vision, physics, medical imaging, and NLP research.",
      icon: "fas fa-microchip",
      kind: "work",
    },
    {
      year: "2021",
      range: "2021 – 2025",
      title: "MSc Computer Science (Machine Learning)",
      place: "Georgia Institute of Technology",
      text: "Graduate study in machine learning, completed alongside full-time work.",
      icon: "fas fa-graduation-cap",
      kind: "edu",
    },
    {
      year: "2020",
      range: "Jul 2020 – Dec 2021",
      title: "Software Development Engineer",
      place: "Philips · Gainesville, FL",
      text: "C++ RESTful cloud service and DICOM tooling for radiation-oncology treatment planning.",
      icon: "fas fa-code",
      kind: "work",
    },
    {
      year: "2018",
      range: "Jul 2018 – Jun 2020",
      title: "Postdoctoral Research Associate",
      place: "University of Florida · Gainesville, FL",
      text: "MPI solver scaling to 1M CPU cores; immersed boundary method; physics-informed GANs with ~1,000,000× speedup.",
      icon: "fas fa-atom",
      kind: "work",
    },
    {
      year: "2013",
      range: "Aug 2013 – May 2018",
      title: "PhD, Aerospace Engineering",
      place: "University of Miami · Coral Gables, FL",
      text: "Hybrid turbulence modeling for CFD, parallelized with MPI.",
      icon: "fas fa-graduation-cap",
      kind: "edu",
    },
    {
      year: "2007",
      range: "Aug 2007 – Jul 2013",
      title: "BSc & MSc, Engineering",
      place: "Harbin Institute of Technology · Harbin, China",
      text: "Undergraduate and master's training in engineering.",
      icon: "fas fa-graduation-cap",
      kind: "edu",
    },
  ];

  function render() {
    const list = document.querySelector(".timeline");
    if (!list) return;
    list.innerHTML = milestones
      .map(
        (m, i) => `
      <li class="tl-item ${i % 2 ? "tl-right" : "tl-left"} tl-${m.kind}">
        <div class="tl-dot"><i class="${m.icon}" aria-hidden="true"></i></div>
        <div class="tl-card">
          <span class="tl-year">${m.year}</span>
          <h5 class="tl-title">${m.title}</h5>
          <p class="tl-place">${m.place}</p>
          <p class="tl-range">${m.range}</p>
          <p class="tl-text">${m.text}</p>
        </div>
      </li>`
      )
      .join("");

    const items = list.querySelectorAll(".tl-item");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("tl-visible"));
    } else {
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("tl-visible");
              io.unobserve(e.target);
            }
          }),
        { threshold: 0.2 }
      );
      items.forEach((el) => io.observe(el));
    }

    // Fill the center line as the timeline scrolls through the viewport.
    const wrap = document.querySelector(".timeline-wrap");
    const bar = document.querySelector(".timeline-progress");
    if (!wrap || !bar) return;
    const update = () => {
      const r = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.6 - r.top) / r.height;
      bar.style.height = Math.max(0, Math.min(1, p)) * 100 + "%";
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  document.addEventListener("DOMContentLoaded", render);
})();
