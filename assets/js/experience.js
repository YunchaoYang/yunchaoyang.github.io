AOS.init();

// Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Research Engineer (contracted)",
    cardImage: "assets/images/experience-page/experience.svg",
    place: "Meta FAIR, Menlo Park, CA",
    time: "(October 2025 – present)",
    desp: "<li>Member of the fairseq2 team, focusing on AI foundation systems infrastructure—multi-GPU/multi-node pretraining, finetuning, post-training, sampling/serving, evaluation, and data pipelines for LLM workflows (Llama, OLMo, Qwen, Gemma).</li> <li>Lead AI inference infrastructure for Multi Spoken Debate Area: built a fast, scalable LLM generation engine on Ray clusters for model benchmarking, data processing, and synthetic data generation.</li> <li>Architected multimodal spoken-language-model inference with a multi-sidecar serving stack—Ray Serve orchestrating vLLM, vLLM-Omni, and PyTorch backends.</li> <li>Optimized distributed training for speech–text Llama models on H100/H200 clusters—profiled NCCL/FSDP bottlenecks and improved throughput via sharding, compiler, and batch-size tuning.</li> <li>Drove large-scale training optimization on NVIDIA GPU clusters through profiling-driven bottleneck elimination across communication, memory, and kernels; integrated fast-attention paths (e.g., FlashAttention) when profiling indicated attention-bound phases.</li>",
  },
  {
    title: "NVIDIA DLI University Ambassador",
    cardImage: "assets/images/experience-page/experience.svg",
    place: "NVIDIA Deep Learning Institute, Gainesville, FL",
    time: "(April 2022 – present)",
    desp: "<li>Subject Matter Expert and Instructor: delivered NVIDIA DLI AI/ML training at GTC and instructor-led sessions across North America, emphasizing parallelism and accelerated GPU computing.</li> <li>Collaborate with the NVIDIA DLI team to design exams and certification programs.</li> <li>Certified Mentor: guided participants in NVIDIA Open GPU Hackathons on accelerated computing and parallel programming.</li>",
  },
  {
    title: "Senior Research Software Engineer",
    cardImage: "assets/images/experience-page/experience.svg",
    place: "University of Florida, Gainesville, FL",
    time: "(February 2022 – October 2025)",
    desp: "<li>Led technical efforts for the AI&RSE team at UF Research Computing across Gen-AI, NLP/LLM, computer vision, medical/healthcare, and business intelligence.</li> <li>Benchmarked large-scale LLM inference across vLLM, NVIDIA NIM (Triton, TensorRT), and Hugging Face TGI—analyzing latency, throughput, scalability, and reliability.</li> <li>Optimized multi-GPU inference runtimes: GPU memory bottlenecks, kernel scheduling, KV-cache usage, and communication overhead.</li> <li>Improved multi-node GPU scaling through topology-aware tuning of communication–computation imbalance.</li> <li>Orchestrated containerized AI deployments; deployed NVIDIA NIM generative-AI inference microservices on the UF HiPerGator-AI cluster.</li>",
  },
  {
    title: "Software Development Engineer",
    cardImage: "assets/images/experience-page/experience.svg",
    place: "Philips, Gainesville, FL",
    time: "(July 2020 – December 2021)",
    desp: "<li>Built an object-oriented RESTful cloud service for a radiation oncology therapy planning system.</li> <li>Designed and established a C++ webserver with RESTful API service; built and deployed client and server-side tests.</li> <li>Agile development of a JSON-based library for DICOM data in C++.</li> <li>Tech stack: Python/C++ hybrid programming, CMake, RESTful services, Docker, Linux, and Jenkins.</li>",
  },
  {
    title: "PostDoc Research Associate",
    cardImage: "assets/images/experience-page/experience.svg",
    place: "University of Florida, Gainesville, FL",
    time: "(July 2018 – June 2020)",
    desp: "<li>HPC: Developed a highly scalable parallel algorithm for multi-physics simulation based on MPI, scaling up to 1,000,000 CPUs (Journal of Supercomputing).</li> <li>AI: Physics-informed machine learning for multiphase flow prediction using GANs, reducing computation time from 500 hours to seconds (~1M× speed-up) (Theoretical and Computational Fluid Dynamics).</li>",
  },
  {
    title: "Research Assistant (PhD student)",
    cardImage: "assets/images/experience-page/experience.svg",
    place: "University of Miami, Coral Gables, FL",
    time: "(August 2013 – May 2018)",
    desp: "<li>HPC/CFD: Hybrid turbulence modeling for computational fluid dynamics with MPI parallelism in Aerospace Engineering.</li>",
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
