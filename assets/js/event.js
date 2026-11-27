// Talks & Teaching: conference papers/talks and NVIDIA DLI teaching, newest first.
(function () {
  const types = {
    teaching: { label: "Teaching", icon: "fas fa-chalkboard-teacher" },
    talk: { label: "Talk", icon: "fas fa-microphone" },
    paper: { label: "Conference paper", icon: "fas fa-file-alt" },
  };

  const talks = [
    {
      type: "teaching",
      when: "2022 – present",
      title: "NVIDIA DLI workshops at GTC and across North America",
      where: "NVIDIA Deep Learning Institute",
      text: "Certified instructor for Fundamentals of Deep Learning, Accelerated Computing with CUDA Python, Model Parallelism, and Generative AI with Diffusion Models. Also helps design DLI exams and certifications.",
      link: {
        label: "Instructor profile",
        url: "https://www.nvidia.com/en-gb/training/instructor-directory/bio/?instructorId=0038Z00002o6ZHjQAM",
      },
    },
    {
      type: "teaching",
      when: "2022 – present",
      title: "Mentor, NVIDIA Open GPU Hackathons",
      where: "NVIDIA Open Hackathons",
      text: "Coaches research teams through porting and accelerating their applications on GPUs, from profiling to parallel programming.",
    },
    {
      type: "talk",
      when: "Nov 2019",
      title: "A Scalable Immersed Boundary Method for Multiphase Flow Simulation",
      where: "72nd APS Division of Fluid Dynamics Meeting · Seattle, WA",
      text: "Presented the parallel immersed boundary method on spectral elements that later scaled to 1,000,000 CPU cores.",
      link: { label: "Abstract", url: "https://meetings.aps.org/Meeting/DFD19/Session/C24.8" },
    },
    {
      type: "paper",
      when: "Jun 2018",
      title: "Aircraft Control Surfaces Using Co-Flow Jet Active Flow Control Airfoil",
      where: "AIAA AVIATION Forum · Atlanta, GA",
      text: "Co-author. Co-flow jet airfoils as control surfaces, compared with plain-flap and no-flap configurations.",
      link: { label: "AIAA 2018-3067", url: "https://doi.org/10.2514/6.2018-3067" },
    },
    {
      type: "paper",
      when: "Jan 2018",
      title: "Numerical Simulation of Super-Lift Coefficient of Co-Flow Jet Flow Control Wing",
      where: "AIAA SciTech Forum · Kissimmee, FL",
      text: "First author. Extends the super-lift analysis to 3D finite-span wings.",
      link: { label: "AIAA 2018-2054", url: "https://doi.org/10.2514/6.2018-2054" },
    },
    {
      type: "paper",
      when: "Jan 2018",
      title: "Improved Delayed Detached Eddy Simulation of Super-Lift Coefficient of Subsonic Co-Flow Jet Flow Control Airfoil",
      where: "AIAA SciTech Forum · Kissimmee, FL",
      text: "First author. High-fidelity IDDES of a co-flow jet airfoil beyond the classical lift limit.",
      link: { label: "AIAA 2018-0314", url: "https://doi.org/10.2514/6.2018-0314" },
    },
    {
      type: "paper",
      when: "Jan 2017",
      title: "Super-Lift Coefficient of Active Flow Control Airfoil: What is the Limit?",
      where: "55th AIAA Aerospace Sciences Meeting (SciTech) · Grapevine, TX",
      text: "First author. Derives a limit for the maximum lift coefficient achievable with active flow control.",
      link: { label: "AIAA 2017-1693", url: "https://doi.org/10.2514/6.2017-1693" },
    },
  ];

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function render(active) {
    const bar = document.querySelector(".talks-filters");
    const list = document.querySelector(".talks-list");
    if (!bar || !list) return;
    const filters = [["all", "All"], ...Object.entries(types).map(([k, v]) => [k, v.label])];
    bar.innerHTML = filters
      .map(([k, l]) => `<button type="button" class="tk-chip${k === active ? " is-active" : ""}" data-type="${k}" aria-pressed="${k === active}">${l}</button>`)
      .join("");
    const shown = active === "all" ? talks : talks.filter((t) => t.type === active);
    list.innerHTML = shown
      .map(
        (t) => `
      <li class="tk-item tk-${t.type}">
        <div class="tk-icon"><i class="${types[t.type].icon}" aria-hidden="true"></i></div>
        <div class="tk-card">
          <p class="tk-meta"><span class="tk-badge">${types[t.type].label}</span> ${esc(t.when)}</p>
          <h3 class="tk-title">${esc(t.title)}</h3>
          <p class="tk-where">${esc(t.where)}</p>
          <p class="tk-text">${esc(t.text)}</p>
          ${t.link ? `<a class="tk-link" href="${t.link.url}" target="_blank" rel="noopener">${esc(t.link.label)} →</a>` : ""}
        </div>
      </li>`
      )
      .join("");
    requestAnimationFrame(() => list.querySelectorAll(".tk-item").forEach((el, i) => setTimeout(() => el.classList.add("is-in"), i * 70)));
  }

  document.addEventListener("DOMContentLoaded", () => {
    let active = "all";
    render(active);
    document.querySelector(".talks-filters").addEventListener("click", (e) => {
      const b = e.target.closest(".tk-chip");
      if (!b) return;
      active = b.dataset.type;
      render(active);
    });
  });
})();
