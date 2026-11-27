AOS.init();

// Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Senior Data Scientist",
    cardImage: "assets/images/experience-page/experience.svg",
    place: "Vanderbilt University, Nashville, TN",
    time: "(October 2026 – present)",
    desp: "<li>Senior Data Scientist at Vanderbilt University in Nashville, working on site.</li>",
  },
  {
    title: "Research Engineer",
    cardImage: "assets/images/experience-page/experience.svg",
    place: "Meta FAIR (Remote)",
    time: "(October 2025 – October 2026)",
    desp: "<li><b>fairseq2 core infrastructure:</b> Engineer on the fairseq2 team in FAIR's Communication &amp; Language pillar, building AI infrastructure for fast, scalable distributed training and inference. fairseq2 is Meta's open-source sequence-modeling toolkit, used for pre-training, fine-tuning, post-training, sampling, and evaluation of Llama, OLMo, Qwen, and Gemma models.</li> <li><b>SFT and RL post-training:</b> Extended the GRPO reinforcement-learning pipeline with tensor-parallel policy execution, multiple concurrent samplers, and multi-GPU orchestration, then profiled and tuned SFT and RL training for throughput and GPU utilization.</li> <li><b>LLM generation engine:</b> Led inference infrastructure for the Multi Spoken Debate area. Built a Ray-based generation engine that researchers use for model benchmarking, data processing, and synthetic data generation through one interface.</li> <li><b>Speech-LLM training and serving:</b> Designed a multi-sidecar serving architecture on Ray Serve that runs vLLM, vLLM-Omni, and PyTorch backends side by side, and optimized how speech LLMs are trained, served, and deployed.</li> <li><b>Speech-LLM Debate Arena:</b> Built an arena where speech language models debate each other to produce evaluation benchmarks, covering benchmark design, large-scale evaluation, and distributed execution on Ray using the Matrix framework.</li> <li><b>Training performance:</b> Profiled NCCL/FSDP communication on H100/H200 clusters and removed bottlenecks through communication-compute overlap, sharding strategy, compiler, and batch-size tuning, adding FlashAttention paths where attention dominated.</li> <li><b>Large Concept Models:</b> Supported research on unified embeddings for hierarchical representations across tokens, sentences, and paragraphs.</li>",
  },
  {
    title: "NVIDIA DLI University Ambassador",
    cardImage: "assets/images/experience-page/experience.svg",
    place: "NVIDIA Deep Learning Institute, Gainesville, FL",
    time: "(April 2022 – present)",
    desp: "<li>Certified instructor for NVIDIA DLI courses on generative AI, model-parallel training, and CUDA Python. Teach at GTC and in instructor-led workshops across North America.</li> <li>Work with the DLI team to design exams and certification programs.</li> <li>Mentor teams at NVIDIA Open GPU Hackathons on porting and accelerating their code on GPUs.</li>",
  },
  {
    title: "Senior Software Engineer, Research Development",
    cardImage: "assets/images/experience-page/experience.svg",
    place: "University of Florida Research Computing, Gainesville, FL",
    time: "(April 2024 – December 2025)",
    desp: "<li><b>Technical lead, AI &amp; RSE team:</b> Set architecture direction for research software across generative AI, NLP/LLMs, computer vision, healthcare, and business intelligence.</li> <li><b>LLM inference services:</b> Deployed LLM inference microservices with NVIDIA NIM, vLLM, Triton, NeMo, and TensorRT on the HiPerGator-AI supercomputer for campus-wide research use.</li> <li><b>Benchmarking and optimization:</b> Compared vLLM, NIM, and Hugging Face TGI on latency, throughput, scalability, and reliability. Tracked down GPU memory pressure, kernel-scheduling gaps, KV-cache usage, and communication overhead, and fixed multi-node scaling with topology-aware tuning.</li> <li><b>Medical-imaging foundation model:</b> Scaled pre-training of a 3D neuroimaging foundation model to 128 GPUs (BrainSegFounder, <i>Medical Image Analysis</i>, 2024).</li>",
  },
  {
    title: "Senior AI Research Support Engineer",
    cardImage: "assets/images/experience-page/experience.svg",
    place: "University of Florida Research Computing, Gainesville, FL",
    time: "(January 2022 – April 2024)",
    desp: "<li>Built AI model training and design pipelines for research projects in computer vision, physics, medical imaging, and natural language processing.</li> <li>Trained large deep neural networks across multiple GPUs and helped research groups scale their workloads on HiPerGator.</li> <li>Designed data workflows, debugged application performance, and streamlined research workflows.</li>",
  },
  {
    title: "Software Development Engineer",
    cardImage: "assets/images/experience-page/experience.svg",
    place: "Philips, Gainesville, FL (Hybrid)",
    time: "(July 2020 – December 2021)",
    desp: "<li>Built an object-oriented RESTful cloud service for a radiation oncology treatment-planning system.</li> <li>Designed a C++ web server and REST API for radiation dose computation, with client- and server-side test suites.</li> <li>Developed a C++ JSON library for DICOM medical-imaging data in an Agile team.</li> <li>Stack: Python/C++, CMake, Docker, Linux, Jenkins CI/CD.</li>",
  },
  {
    title: "PostDoc Research Associate",
    cardImage: "assets/images/experience-page/experience.svg",
    place: "University of Florida, Gainesville, FL",
    time: "(July 2018 – June 2020)",
    desp: "<li><b>HPC:</b> Designed an MPI parallel algorithm for multiphase-flow simulation that scales to 1,000,000 CPU cores (<i>Journal of Supercomputing</i>).</li> <li><b>Immersed boundary method:</b> Developed an IBM solver for direct numerical simulation of multiphase flow, applied to blood flow, aircraft design, and sediment transport.</li> <li><b>AI for science:</b> Used physics-informed GANs to predict multiphase flow, cutting a 500-hour simulation to seconds, roughly a 1,000,000&times; speedup (<i>Theoretical and Computational Fluid Dynamics</i>).</li>",
  },
  {
    title: "Research Assistant (PhD student)",
    cardImage: "assets/images/experience-page/experience.svg",
    place: "University of Miami, Coral Gables, FL",
    time: "(August 2013 – May 2018)",
    desp: "<li>Developed hybrid turbulence models for computational fluid dynamics, parallelized with MPI.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
