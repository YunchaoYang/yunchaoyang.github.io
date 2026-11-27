AOS.init();

// MOOCs / Certifications Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "DLI Instructor: Gen-AI with Diffusion Models \u00b7 2024",
    brand: "nvidia",
    moocLink: "https://www.nvidia.com/en-gb/training/instructor-directory/bio/?instructorId=0038Z00002o6ZHjQAM",
  },
  {
    title: "DLI Instructor: Model Parallel Neural Network Training \u00b7 2023",
    brand: "nvidia",
    moocLink: "https://www.nvidia.com/en-gb/training/instructor-directory/bio/?instructorId=0038Z00002o6ZHjQAM",
  },
  {
    title: "DLI Instructor: Accelerated Computing with CUDA Python \u00b7 2022",
    brand: "nvidia",
    moocLink: "https://courses.nvidia.com/certificates/f64fa074503c4b99aab10a1eebad171a/",
  },
  {
    title: "DLI Instructor: Fundamentals of Deep Learning \u00b7 2022",
    brand: "nvidia",
    moocLink: "https://learn.next.courses.nvidia.com/certificates/91a9c53b1eac4651b4c3758feca55ccd",
  },
  {
    title: "Accelerating CUDA C++ Applications with Multiple GPUs \u00b7 2024",
    brand: "nvidia",
    moocLink: "https://learn.nvidia.com/certificates?id=rMvu22ItTPCTKDST0t3b2Q",
  },
  {
    title: "Efficient LLM Customization \u00b7 2024",
    brand: "nvidia",
    moocLink: "https://learn.nvidia.com/certificates?id=Fq3BJ6LrTPihEXabxAHfGQ",
  },
  {
    title: "Generative AI with Diffusion Models \u00b7 2024",
    brand: "nvidia",
    moocLink: "https://courses.nvidia.com/certificates/42624eef58354adbb9cc6ef6fdfb3e64/",
  },
  {
    title: "Building RAG Agents with LLMs \u00b7 2024",
    brand: "nvidia",
    moocLink: "https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+S-FX-15+V1",
  },
  {
    title: "Deploying RAG for Production at Scale \u00b7 2024",
    brand: "nvidia",
    moocLink: "https://www.nvidia.com/en-us/on-demand/session/gtc24-dlit63054/",
  },
  {
    title: "Model Parallelism: Building and Deploying Large Neural Networks \u00b7 2023",
    brand: "nvidia",
    moocLink: "https://courses.nvidia.com/certificates/6d7c1cc30163485b980faa90c5d6d392/",
  },
  {
    title: "Data Parallelism: Training on Multiple GPUs \u00b7 2023",
    brand: "nvidia",
    moocLink: "https://courses.nvidia.com/certificates/6fcf586069d34982b3977399a5bc12fb/",
  },
  {
    title: "Video AI Applications at the Edge on Jetson Nano \u00b7 2023",
    brand: "nvidia",
    moocLink: "https://courses.nvidia.com/certificates/7f85d97d17ba433a8396dde26aa78590/",
  },
  {
    title: "Computer Vision for Industrial Inspection \u00b7 2022",
    brand: "nvidia",
    moocLink: "https://courses.nvidia.com/certificates/399fd544e363463ab3ab541287a4ec56/",
  },
  {
    title: "Accelerated Computing with CUDA C/C++ \u00b7 2022",
    brand: "nvidia",
    moocLink: "https://courses.nvidia.com/certificates/02a6f59d96ed43179dd0013b5bb3ad95/",
  },
  {
    title: "Building Transformer-Based NLP Applications \u00b7 2022",
    brand: "nvidia",
    moocLink: "https://courses.nvidia.com/certificates/88bf686daa8f47258f716ef55c3a4f6d/",
  },
  {
    title: "Applications of AI for Anomaly Detection \u00b7 2022",
    brand: "nvidia",
    moocLink: "https://courses.nvidia.com/certificates/1aba0d9e7d0d4614b0eb167ba5512806/",
  },
  {
    title: "Accelerated Computing with CUDA Python \u00b7 2022",
    brand: "nvidia",
    moocLink: "https://courses.nvidia.com/certificates/c4d98f5237de402e932734fdd9fb3af1/",
  },
  {
    title: "Getting Started with Deep Learning \u00b7 2022",
    brand: "nvidia",
    moocLink: "https://courses.nvidia.com/certificates/83a6f9efc3764c32b34c83b5c422a6ab/",
  },
  {
    title: "Coursera: Deep Learning Specialization \u00b7 2018",
    brand: "coursera",
    moocLink: "https://www.coursera.org/account/accomplishments/specialization/FAENCM3YT5QZ",
  },
  {
    title: "Coursera: Python for Everybody Specialization \u00b7 2017",
    brand: "coursera",
    moocLink: "https://www.coursera.org/account/accomplishments/specialization/7JYFFYF37ADS",
  },
  {
    title: "Coursera: Machine Learning \u00b7 2016",
    brand: "coursera",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/VDHPQRQDYK7S",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png"
  },
  {
    img: "assets/images/education-page/c2.jpg"
  },
  {
    img: "assets/images/education-page/c3.png"
  },
  {
    img: "assets/images/education-page/c4.png"
  },
  {
    img: "assets/images/education-page/c5.jpg"
  },
];

let currentItem = 0;

const img = document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

window.addEventListener('DOMContentLoaded', function () {
  showExperience();
})

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
      const item = experience[currentItem];
      if (img && item) {
        img.src = item.img;
      }
      currentItem++;

    },
    3000);
}

const showCards = () => {
  if (!moocs) return;
  let output = "";
  moocscards.forEach(
    ({ title, brand, moocLink }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <div class="card-img-top content-image cert-logo cert-${brand}" role="img" aria-label="${brand === "nvidia" ? "NVIDIA" : "Coursera"}"><span class="cert-mark"></span></div>     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* Timeline Section*/

$(function(){

  // ScrollReveal is optional; skip the reveal animation if the library isn't loaded.
  if (typeof ScrollReveal !== "function") return;
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {

    if ($('.timeline-content').hasClass('js--fadeInLeft')) {
      $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
    }

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  } else {
    
    sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

  }
  
  sr.reveal('.js--fadeInLeft', {
      origin: 'left',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });

    sr.reveal('.js--fadeInRight', {
      origin: 'right',
      distance: '300px',
      easing: 'ease-in-out',
      duration: 800,
    });


});
