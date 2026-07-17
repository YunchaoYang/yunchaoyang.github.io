AOS.init();

// MOOCs / Certifications Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "DLI Instructor: Gen-AI With Diffusion Models",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.nvidia.com/en-gb/training/instructor-directory/bio/?instructorId=0038Z00002o6ZHjQAM",
  },
  {
    title: "DLI Instructor: Model Parallel Neural Network Training",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.nvidia.com/en-gb/training/instructor-directory/bio/?instructorId=0038Z00002o6ZHjQAM",
  },
  {
    title: "Build Transformer NLP Applications",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://courses.nvidia.com/certificates/88bf686daa8f47258f716ef55c3a4f6d/",
  },
  {
    title: "Efficient LLM Customization",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://learn.nvidia.com/certificates?id=Fq3BJ6LrTPihEXabxAHfGQ",
  },
  {
    title: "Building RAG Agents with LLMs",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+S-FX-15+V1",
  },
  {
    title: "Deploying RAG for Production at Scale",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.nvidia.com/en-us/on-demand/session/gtc24-dlit63054/",
  },
  {
    title: "NVIDIA Instructor: CUDA Python",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://courses.nvidia.com/certificates/02a6f59d96ed43179dd0013b5bb3ad95/",
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
    ({ title, cardImage, moocLink }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
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
