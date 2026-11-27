AOS.init();

// Project cards. Each project's `cats` drives the filter chips; `links` render as buttons.
const D = "assets/images/project-page/diagrams/";

const projectCategories = [
  { id: "all", label: "All" },
  { id: "agentic", label: "Agentic AI" },
  { id: "infra", label: "AI Infrastructure" },
  { id: "training", label: "Distributed Training" },
  { id: "hpc", label: "HPC & GPU Computing" },
  { id: "software", label: "Software" },
];

const projects = [
  {
    title: "Speech-LLM Debate Arena",
    org: "Meta FAIR",
    year: "2026",
    image: D + "debate-arena.svg",
    cats: ["agentic", "infra"],
    summary:
      "A multi-agent arena where speech language models debate each other and a judge model scores every round, turning the matches into evaluation benchmarks. Runs distributed on Ray using the Matrix framework.",
    tags: ["Multi-agent LLMs", "Speech LLMs", "Ray", "Evaluation"],
    links: [],
  },
  {
    title: "LLM Generation Engine & Multimodal Serving",
    org: "Meta FAIR",
    year: "2025–2026",
    image: D + "generation-engine.svg",
    cats: ["infra"],
    summary:
      "A fast, scalable generation engine on Ray clusters that researchers use for benchmarking, data processing and synthetic data. A multi-sidecar design on Ray Serve runs vLLM, vLLM-Omni and PyTorch backends side by side for spoken-language models.",
    tags: ["Ray Serve", "vLLM", "vLLM-Omni", "PyTorch"],
    links: [],
  },
  {
    title: "GRPO Reinforcement Learning in fairseq2",
    org: "Meta FAIR",
    year: "2025–2026",
    image: D + "grpo.svg",
    cats: ["training", "infra"],
    summary:
      "Infrastructure for GRPO post-training in fairseq2: tensor-parallel policy execution, multiple concurrent samplers and multi-GPU orchestration, then profiling and tuning to raise RL and SFT training throughput.",
    tags: ["GRPO", "RL / SFT", "Tensor parallel", "fairseq2"],
    links: [{ label: "fairseq2", url: "https://github.com/facebookresearch/fairseq2", icon: "fab fa-github" }],
  },
  {
    title: "Scaling LLM Training on H100 / H200",
    org: "Meta FAIR",
    year: "2025",
    image: D + "training-scale.svg",
    cats: ["training", "hpc"],
    summary:
      "Profiled NCCL and FSDP communication for speech-text Llama training, then raised throughput by overlapping communication with compute and tuning sharding strategy, compiler settings, batch size and FlashAttention paths.",
    tags: ["FSDP", "NCCL", "torch.compile", "FlashAttention"],
    links: [],
  },
  {
    title: "LLM Inference Benchmarking & NIM Services",
    org: "University of Florida",
    year: "2024–2025",
    image: D + "inference-bench.svg",
    cats: ["infra", "hpc"],
    summary:
      "Compared vLLM, NVIDIA NIM (Triton, TensorRT) and Hugging Face TGI on latency, throughput, scalability and reliability, fixed GPU memory and KV-cache bottlenecks, and deployed NIM inference microservices on the HiPerGator-AI supercomputer.",
    tags: ["vLLM", "NVIDIA NIM", "TensorRT", "Containers"],
    links: [],
  },
  {
    title: "BrainSegFounder: 3D Foundation Model",
    org: "University of Florida",
    year: "2024",
    image: D + "brainsegfounder.svg",
    cats: ["training", "hpc"],
    summary:
      "Scaled self-supervised pre-training of a 3D neuroimaging foundation model to 128 GPUs on HiPerGator. Published in Medical Image Analysis.",
    tags: ["PyTorch DDP", "128 GPUs", "Medical imaging"],
    links: [{ label: "Paper", url: "https://doi.org/10.1016/j.media.2024.103301", icon: "fas fa-file-alt" }],
  },
  {
    title: "Teaching GPU Computing with NVIDIA DLI",
    org: "NVIDIA Deep Learning Institute",
    year: "2022–present",
    image: D + "dli-teaching.svg",
    cats: ["hpc"],
    summary:
      "Certified instructor for CUDA Python, deep learning, model-parallel training and generative AI with diffusion models. Teaches at GTC and workshops across North America and mentors teams at Open GPU Hackathons.",
    tags: ["CUDA", "Model parallelism", "Diffusion models"],
    links: [
      {
        label: "Instructor profile",
        url: "https://www.nvidia.com/en-gb/training/instructor-directory/bio/?instructorId=0038Z00002o6ZHjQAM",
        icon: "fas fa-chalkboard-teacher",
      },
    ],
  },
  {
    title: "Physics-Informed GAN for Multiphase Flow",
    org: "University of Florida",
    year: "2021",
    image: D + "physics-gan.svg",
    cats: ["hpc"],
    summary:
      "Generative adversarial networks that learn particle-laden flow fields from direct numerical simulation, cutting a 500-hour simulation to seconds, roughly a 1,000,000× speedup.",
    tags: ["GANs", "Scientific ML", "CFD"],
    links: [{ label: "Paper", url: "https://doi.org/10.1007/s00162-021-00593-9", icon: "fas fa-file-alt" }],
  },
  {
    title: "Immersed Boundary Solver on 1M CPU Cores",
    org: "University of Florida",
    year: "2018–2021",
    image: D + "immersed-boundary.svg",
    cats: ["hpc"],
    summary:
      "A scalable parallel algorithm for the direct-forcing immersed boundary method on high-order spectral elements, used for multiphase flows such as blood flow and sediment transport. Scales to 1,000,000 CPU cores with MPI.",
    tags: ["MPI", "Spectral elements", "Supercomputing"],
    links: [{ label: "Paper", url: "https://doi.org/10.1007/s11227-020-03371-2", icon: "fas fa-file-alt" }],
  },
  {
    title: "Radiation-Oncology Planning Service",
    org: "Philips",
    year: "2020–2021",
    image: D + "oncology-service.svg",
    cats: ["software"],
    summary:
      "An object-oriented RESTful cloud service for a radiation-oncology treatment-planning system: a C++ web server and API for dose computation, a JSON library for DICOM data, and client and server test suites.",
    tags: ["C++", "REST", "DICOM", "Docker", "Jenkins"],
    links: [],
  },
  {
    title: "Co-Flow Jet Airfoils: The Super-Lift Limit",
    org: "University of Miami",
    year: "2013–2018",
    image: D + "coflow-jet.svg",
    cats: ["hpc"],
    summary:
      "PhD research on active flow control. Used high-fidelity, MPI-parallel CFD (including IDDES) to find how far co-flow jet airfoils and finite-span wings can push the maximum lift coefficient.",
    tags: ["CFD", "MPI", "Turbulence modeling"],
    links: [{ label: "AIAA paper", url: "https://doi.org/10.2514/6.2017-1693", icon: "fas fa-file-alt" }],
  },
];

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function renderProjectFilters(active) {
  const bar = document.querySelector(".project-filters");
  if (!bar) return;
  bar.innerHTML = projectCategories
    .map(
      (c) =>
        `<button type="button" class="pf-chip${c.id === active ? " is-active" : ""}" data-cat="${c.id}" aria-pressed="${c.id === active}">${c.label}</button>`
    )
    .join("");
}

function renderProjects(active) {
  const grid = document.querySelector(".projectcards");
  if (!grid) return;
  const list = active === "all" ? projects : projects.filter((p) => p.cats.includes(active));
  grid.innerHTML = list
    .map(
      (p, i) => `
    <article class="pj-card" data-aos="fade-up" data-aos-delay="${(i % 3) * 80}">
      <div class="pj-media"><img src="${p.image}" alt="" loading="lazy"></div>
      <div class="pj-body">
        <p class="pj-meta">${escapeHtml(p.org)} · ${escapeHtml(p.year)}</p>
        <h3 class="pj-title">${escapeHtml(p.title)}</h3>
        <p class="pj-summary">${escapeHtml(p.summary)}</p>
        <ul class="pj-tags">${p.tags.map((t) => `<li>${escapeHtml(t)}</li>`).join("")}</ul>
        ${
          p.links.length
            ? `<div class="pj-links">${p.links
                .map(
                  (l) =>
                    `<a href="${l.url}" target="_blank" rel="noopener"><i class="${l.icon}" aria-hidden="true"></i> ${escapeHtml(l.label)}</a>`
                )
                .join("")}</div>`
            : ""
        }
      </div>
    </article>`
    )
    .join("");
  if (window.AOS) AOS.refreshHard();
}

document.addEventListener("DOMContentLoaded", () => {
  let active = "all";
  renderProjectFilters(active);
  renderProjects(active);
  const bar = document.querySelector(".project-filters");
  if (bar)
    bar.addEventListener("click", (e) => {
      const btn = e.target.closest(".pf-chip");
      if (!btn) return;
      active = btn.dataset.cat;
      renderProjectFilters(active);
      renderProjects(active);
    });
});
