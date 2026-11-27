/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    "title": "BrainSegFounder: Towards 3D Foundation Models for Neuroimage Segmentation",
    "authors": "J. Cox, P. Liu, S. E. Stolte, <b>Y. Yang</b>, K. Liu, K. B. See, H. Ju, R. Fang",
    "venue": "Medical Image Analysis, vol. 97, 103301",
    "year": 2024,
    "image": "assets/images/project-page/diagrams/brainsegfounder.svg",
    "url": "https://doi.org/10.1016/j.media.2024.103301",
    "summary": "A 3D foundation model for brain MRI, pre-trained with self-supervision on large unlabeled neuroimaging datasets and then fine-tuned for segmentation. My part was scaling the pre-training to 128 GPUs on the HiPerGator supercomputer.",
    "cite": "J. Cox, P. Liu, S. E. Stolte, Y. Yang, K. Liu, K. B. See, H. Ju, R. Fang. BrainSegFounder: Towards 3D Foundation Models for Neuroimage Segmentation. Medical Image Analysis 97 (2024): 103301."
  },
  {
    "title": "Machine Learning for Physics-Informed Generation of Dispersed Multiphase Flow Using Generative Adversarial Networks",
    "authors": "B. Siddani, S. Balachandar, W. C. Moore, <b>Y. Yang</b>, R. Fang",
    "venue": "Theoretical and Computational Fluid Dynamics",
    "year": 2021,
    "image": "assets/images/project-page/diagrams/physics-gan.svg",
    "url": "https://doi.org/10.1007/s00162-021-00593-9",
    "summary": "Trains GANs on direct numerical simulation data to generate the flow around randomly distributed particles, replacing a simulation that takes hundreds of hours with inference that takes seconds.",
    "cite": "B. Siddani, S. Balachandar, W. C. Moore, Y. Yang, R. Fang. Machine Learning for Physics-Informed Generation of Dispersed Multiphase Flow Using Generative Adversarial Networks. Theoretical and Computational Fluid Dynamics (2021). doi:10.1007/s00162-021-00593-9."
  },
  {
    "title": "A Scalable Parallel Algorithm for Direct-Forcing Immersed Boundary Method for Multiphase Flow Simulation on Spectral Elements",
    "authors": "<b>Y. Yang</b>, S. Balachandar",
    "venue": "The Journal of Supercomputing, 77(3), 2897–2927",
    "year": 2021,
    "image": "assets/images/project-page/diagrams/immersed-boundary.svg",
    "url": "https://doi.org/10.1007/s11227-020-03371-2",
    "summary": "A parallel immersed boundary algorithm for particle-laden flows on high-order spectral elements, with a load-balanced design that scales to 1,000,000 CPU cores.",
    "cite": "Y. Yang, S. Balachandar. A Scalable Parallel Algorithm for Direct-Forcing Immersed Boundary Method for Multiphase Flow Simulation on Spectral Elements. The Journal of Supercomputing 77 (2021): 2897–2927."
  },
  {
    "title": "A Scalable Immersed Boundary Method for Multiphase Flow Simulation",
    "authors": "<b>Y. Yang</b>, S. Balachandar",
    "venue": "APS Division of Fluid Dynamics Meeting, abstract C24.00008",
    "year": 2019,
    "image": "assets/images/project-page/diagrams/immersed-boundary.svg",
    "url": "https://meetings.aps.org/Meeting/DFD19/Session/C24.8",
    "summary": "Conference talk presenting the scalable immersed boundary method and its parallel performance on multiphase flow problems.",
    "cite": "Y. Yang, S. Balachandar. A Scalable Immersed Boundary Method for Multiphase Flow Simulation. 72nd Annual Meeting of the APS Division of Fluid Dynamics (2019), C24.00008."
  },
  {
    "title": "Aircraft Control Surfaces Using Co-Flow Jet Active Flow Control Airfoil",
    "authors": "Y. Zhang et al., with <b>Y. Yang</b> and G. Zha",
    "venue": "AIAA AVIATION Forum, AIAA 2018-3067",
    "year": 2018,
    "image": "assets/images/project-page/diagrams/coflow-jet.svg",
    "url": "https://doi.org/10.2514/6.2018-3067",
    "summary": "Studies co-flow jet airfoils as aircraft control surfaces, comparing configurations with a plain flap and with no flap.",
    "cite": "Y. Zhang et al. (incl. Y. Yang, G. Zha). Aircraft Control Surfaces Using Co-Flow Jet Active Flow Control Airfoil. AIAA Paper 2018-3067, AIAA AVIATION Forum (2018)."
  },
  {
    "title": "Numerical Simulation of Super-Lift Coefficient of Co-Flow Jet Flow Control Wing",
    "authors": "<b>Y. Yang</b>, G. Zha",
    "venue": "AIAA SciTech Forum, AIAA 2018-2054",
    "year": 2018,
    "image": "assets/images/project-page/diagrams/coflow-jet.svg",
    "url": "https://doi.org/10.2514/6.2018-2054",
    "summary": "Extends the super-lift analysis from 2D airfoils to 3D finite-span co-flow jet wings without flaps.",
    "cite": "Y. Yang, G. Zha. Numerical Simulation of Super-Lift Coefficient of Co-Flow Jet Flow Control Wing. AIAA Paper 2018-2054, AIAA SciTech Forum (2018)."
  },
  {
    "title": "Improved Delayed Detached Eddy Simulation of Super-Lift Coefficient of Subsonic Co-Flow Jet Flow Control Airfoil",
    "authors": "<b>Y. Yang</b> et al., with G. Zha",
    "venue": "AIAA SciTech Forum, AIAA 2018-0314",
    "year": 2018,
    "image": "assets/images/project-page/diagrams/coflow-jet.svg",
    "url": "https://doi.org/10.2514/6.2018-0314",
    "summary": "Uses improved delayed detached eddy simulation (IDDES) to resolve the turbulent flow over a co-flow jet airfoil at lift coefficients beyond the classical theoretical limit.",
    "cite": "Y. Yang et al. (incl. G. Zha). Improved Delayed Detached Eddy Simulation of Super-Lift Coefficient of Subsonic Co-Flow Jet Flow Control Airfoil. AIAA Paper 2018-0314, AIAA SciTech Forum (2018)."
  },
  {
    "title": "Super-Lift Coefficient of Active Flow Control Airfoil: What is the Limit?",
    "authors": "<b>Y. Yang</b>, G. Zha",
    "venue": "55th AIAA Aerospace Sciences Meeting (SciTech 2017), AIAA 2017-1693",
    "year": 2017,
    "image": "assets/images/project-page/diagrams/coflow-jet.svg",
    "url": "https://doi.org/10.2514/6.2017-1693",
    "summary": "Asks how far active flow control can push an airfoil's maximum lift coefficient, deriving a potential-flow limit and showing co-flow jet airfoils can approach it.",
    "cite": "Y. Yang, G. Zha. Super-Lift Coefficient of Active Flow Control Airfoil: What is the Limit? AIAA Paper 2017-1693, 55th AIAA Aerospace Sciences Meeting (2017)."
  }
];

const researchArc = [
  {
    "label": "CFD & active flow control",
    "start": 2013,
    "end": 2018,
    "color": "#5da8dc",
    "note": "PhD, University of Miami"
  },
  {
    "label": "Scalable HPC simulation (MPI, 1M cores)",
    "start": 2018,
    "end": 2021,
    "color": "#d5adc8",
    "note": "Postdoc, University of Florida"
  },
  {
    "label": "AI for science (physics-informed GANs)",
    "start": 2019,
    "end": 2021,
    "color": "#ff8489",
    "note": "UF"
  },
  {
    "label": "Medical-imaging foundation models",
    "start": 2022,
    "end": 2025,
    "color": "#76b900",
    "note": "UF Research Computing"
  },
  {
    "label": "LLM systems: training, RL, inference",
    "start": 2024,
    "end": 2026.9,
    "color": "#9b7bea",
    "note": "UF → Meta FAIR"
  },
  {
    "label": "Agentic AI & multi-agent evaluation",
    "start": 2025.8,
    "end": 2026.9,
    "color": "#f0a35e",
    "note": "Meta FAIR"
  }
];
AOS.init();   
const fillData = () => {
    if (!researchTable) return;
    researchTable.innerHTML = research.map(({ image, title, authors, venue, year, url, summary, cite }, i) => `
            <tr data-aos="fade-up">
                <td class="imgCol"><img src="${image}" class="rImg" alt="" loading="lazy"></td>
                <td class="researchTitleName">
                    <div><span class="imgResponsive"><img src="${image}" class="imgRes" alt="" loading="lazy"></span></div>
                    <a href="${url}" target="_blank" rel="noopener" class="paperTitle">${title}</a>
                    <div class="rAuthors">${authors}</div>
                    <div class="rConferences">${venue}<div class="researchY">${year}</div></div>
                    <div class="d-flex flex-wrap rButtons">
                        <button class="button button-accent button-small button-abstract" type="button" data-toggle="collapse" data-target="#abs${i}" aria-expanded="false" aria-controls="abs${i}">SUMMARY</button>
                        <button class="button button-accent button-small button-abstract" type="button" data-toggle="collapse" data-target="#cite${i}" aria-expanded="false" aria-controls="cite${i}">CITE</button>
                        <a class="button button-accent button-small button-abstract" href="${url}" target="_blank" rel="noopener">PAPER</a>
                    </div>
                    <div id="abs${i}" class="collapse"><div class="card-body">${summary}</div></div>
                    <div id="cite${i}" class="collapse"><div class="card-body">${cite}</div></div>
                </td>
            </tr>`).join("");
};

// Research arc: a Gantt-style view of how the research focus moved over time.
const renderArc = () => {
    const host = document.querySelector(".research-arc");
    if (!host) return;
    const min = 2013, max = 2027;
    const pct = (y) => ((y - min) / (max - min)) * 100;
    const years = [];
    for (let y = min; y <= max; y += 2) years.push(y);
    host.innerHTML = `
        <div class="arc-axis">${years.map((y) => `<span style="left:${pct(y)}%">${y}</span>`).join("")}</div>
        ${researchArc.map((a, i) => `
        <div class="arc-row">
            <div class="arc-label">${a.label}<small>${a.note}</small></div>
            <div class="arc-track">
                <div class="arc-bar" style="--l:${pct(a.start)}%;--w:${pct(a.end) - pct(a.start)}%;--c:${a.color};--d:${i * 120}ms"></div>
            </div>
        </div>`).join("")}`;
    const io = "IntersectionObserver" in window ? new IntersectionObserver((es) => es.forEach((e) => {
        if (e.isIntersecting) { host.classList.add("arc-in"); io.disconnect(); }
    }), { threshold: 0.3 }) : null;
    if (io) io.observe(host); else host.classList.add("arc-in");
};
document.addEventListener("DOMContentLoaded", renderArc);
document.addEventListener("DOMContentLoaded", fillData);

