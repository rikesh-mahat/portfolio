// images import
import project1 from "/project1.png";
import project2 from "/project2.png";
import project3 from "/project3.png"
// swiper library import
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

// icons import
import { FaGithub, FaArrowCircleRight  } from "react-icons/fa";
const Projects = () => {
  useEffect(() =>{
    AOS.init()
  }, [])
  return (
    <section name='works' className="section">
      <div className="all-padding h-full w-full flex flex-col justify-center gap-8">
        <div data-aos='fade-up' data-aos-duration='1000'>
          <h1 className="border-b-[3px] border-pink-600 inline-block text-4xl font-bold">
            Projects
          </h1>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper w-[80%] pt-10 -z-0"
          data-aos='fade-right'
          data-aos-duration='1000'
        >
          <SwiperSlide className="project-slider">
            <div>
              <img
                src={project1}
                alt="e-commerce project"
                className="tech-img"
              />
            </div>
            <div className="link-container">
              <a href="https://react-tailwind-neon.vercel.app/" className="btn">Live Demo <FaArrowCircleRight className="-rotate-45"/></a>
              <a href="https://github.com/rikesh-mahat/react-tailwind" className="btn">Github <FaGithub className=""/></a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="project-slider">
            <div>

            <img src={project2} alt="food-website" className="tech-img" />
            </div>
            <div className="link-container">
            <a href="https://rikesh-mahat.github.io/foodwebsite/" className="btn">Live Demo <FaArrowCircleRight className="-rotate-45"/></a>
              <a href="https://github.com/rikesh-mahat/foodwebsite/settings" className="btn">Github <FaGithub className=""/></a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="project-slider">
            <div>

            <img src={project3} alt="food-website" className="tech-img" />
            </div>
            <div className="link-container">
            <a href="https://portfolio-eight-smoky-98.vercel.app/" className="btn">Live Demo <FaArrowCircleRight className="-rotate-45"/></a>
              <a href="https://github.com/rikesh-mahat/portfolio" className="btn">Github <FaGithub className=""/></a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="project-slider">
            <div>

            <img src={project2} alt="food-website" className="tech-img" />
            </div>
            <div className="link-container">
            <a href="" className="btn">Live Demo <FaArrowCircleRight className="-rotate-45"/></a>
              <a href="" className="btn">Github <FaGithub className=""/></a>
            </div>
          </SwiperSlide>

          
        </Swiper>
        <p className="md:hidden text-center text-sm">Swipe to see other projects</p>
      </div>
      
    </section>
  );
};

export default Projects;
