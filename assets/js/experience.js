AOS.init();

// Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Research Engineer (contracted)",
    cardImage: "assets/images/experience-page/experience.svg",
    place: "Meta FAIR, Menlo Park, CA",
    time: "(October 2025 – present)",
    desp: "<li><b>fairseq2 core infrastructure:</b> Engineer on the fairseq2 team within FAIR's Communication &amp; Language research effort. Build the distributed stack behind pre-training, fine-tuning, post-training, sampling, evaluation, and data pipelines for Llama, OLMo, Qwen, and Gemma models.</li> <li><b>RL post-training at scale:</b> Extended fairseq2's GRPO reinforcement-learning pipeline with tensor-parallel policy execution, multiple concurrent samplers, and multi-GPU orchestration, then profiled and tuned it to raise RL training throughput.</li> <li><b>LLM generation engine:</b> Lead inference infrastructure for the Multi Spoken Debate area. Built a Ray-based generation engine that researchers use for model benchmarking, data processing, and synthetic data generation through one interface.</li> <li><b>Multimodal serving:</b> Designed a multi-sidecar serving architecture on Ray Serve that runs vLLM, vLLM-Omni, and PyTorch backends side by side, so speech and text models can be served together in one pipeline.</li> <li><b>Speech-LLM Debate Arena:</b> Built an arena where speech language models debate each other to produce evaluation benchmarks, covering benchmark design, large-scale evaluation, and distributed execution on Ray using the Matrix framework.</li> <li><b>Training performance:</b> Profiled NCCL/FSDP communication on H100/H200 clusters and removed bottlenecks through communication-compute overlap, sharding strategy, compiler, and batch-size tuning, adding FlashAttention paths where attention dominated.</li> <li><b>Large Concept Models:</b> Supported research on unified embeddings for hierarchical representations across tokens, sentences, and paragraphs.</li>",
  },
  {
    title: "NVIDIA DLI University Ambassador",
    cardImage: "assets/images/experience-page/experience.svg",
    place: "NVIDIA Deep Learning Institute, Gainesville, FL",
    time: "(April 2022 – present)",
    desp: "<li>Certified instructor for NVIDIA DLI courses on generative AI, model-parallel training, and CUDA Python. Teach at GTC and in instructor-led workshops across North America.</li> <li>Work with the DLI team to design exams and certification programs.</li> <li>Mentor teams at NVIDIA Open GPU Hackathons on porting and accelerating their code on GPUs.</li>",
  },
  {
    title: "Senior Research Software Engineer",
    cardImage: "assets/images/experience-page/experience.svg",
    place: "University of Florida, Gainesville, FL",
    time: "(February 2022 – October 2025)",
    desp: "<li><b>Technical lead, AI &amp; RSE team:</b> Set architecture direction for research software at UF Research Computing, spanning generative AI, NLP/LLMs, computer vision, healthcare, and business intelligence.</li> <li><b>LLM inference benchmarking:</b> Compared vLLM, NVIDIA NIM (Triton, TensorRT), and Hugging Face TGI on latency, throughput, scalability, and reliability to guide which engines the university deployed.</li> <li><b>Multi-GPU optimization:</b> Tracked down GPU memory pressure, kernel-scheduling gaps, KV-cache usage, and communication overhead in multi-GPU inference, and fixed multi-node scaling with topology-aware tuning.</li> <li><b>Production AI services:</b> Deployed containerized NVIDIA NIM generative-AI microservices on the HiPerGator-AI supercomputer for campus-wide research use.</li>",
  },
  {
    title: "Software Development Engineer",
    cardImage: "assets/images/experience-page/experience.svg",
    place: "Philips, Gainesville, FL",
    time: "(July 2020 – December 2021)",
    desp: "<li>Built an object-oriented RESTful cloud service for a radiation oncology treatment-planning system.</li> <li>Designed a C++ web server and REST API, with client- and server-side test suites.</li> <li>Developed a C++ JSON library for DICOM medical-imaging data in an Agile team.</li> <li>Stack: Python/C++, CMake, Docker, Linux, Jenkins CI/CD.</li>",
  },
  {
    title: "PostDoc Research Associate",
    cardImage: "assets/images/experience-page/experience.svg",
    place: "University of Florida, Gainesville, FL",
    time: "(July 2018 – June 2020)",
    desp: "<li><b>HPC:</b> Developed an MPI parallel algorithm for multi-physics simulation that scales to 1,000,000 CPU cores (<i>Journal of Supercomputing</i>).</li> <li><b>AI for science:</b> Used physics-informed GANs to predict multiphase flow, cutting a 500-hour simulation to seconds, roughly a 1,000,000&times; speedup (<i>Theoretical and Computational Fluid Dynamics</i>).</li>",
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
