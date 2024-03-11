// icons import
import { FaArrowRight } from "react-icons/fa";

// images import
import profile from '/profile.jpg'

// library imports
import {Link} from 'react-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Home = () => {
  useEffect(() =>{
    AOS.init()
  },[])
  return (
    <main name='home' className="section pt-24 -z-20" >
       
        {/* container */}
        <div className="all-padding flex flex-row flex-wrap-reverse gap-4 md:gap-28 h-full">
                <div className="flex flex-col justify-center gap-2 mb-16" data-aos="fade-right" data-aos-duration="1300">

                  <p className="text-pink-600 text-xl">Hi my name is </p>
                  <h1 className="text-4xl md:text-6xl font-bold">Rikesh Mahat</h1>
                  <h2 className="text-2xl md:text-6xl font-bold text-gray-300/80">I'm a frontend developer</h2>
                  <p className="text-gray-300/90 max-w-[700px] text-justify pr-12 md:pr-0">
                      I'a a frontend developer specializing in building beautiful websites. Currently I am focused on learning full stack development (MERN).
                  </p>
                  <div className="mt-8">
                      
                      <Link 
                      to="works" 
                      spy={true} 
                      smooth={true} 
                      duration={500}
                      className="p-4 bg-white/5 rounded-md font-semibold hover:bg-pink-700 group cursor-pointer">
                          View Work <FaArrowRight className="ml-1 inline-flex font-thin group-hover:rotate-90 group-hover:animate-pulse duration-300"/>
                </Link>
                  </div>
                </div>

                {/* work  */}
              <div className="flex flex-col justify-center " data-aos="fade-up" data-aos-duration="1000">
                <div className="rounded-full  border-2 border-blue-900 overflow-hidden">
                  <img src={profile} alt="rikesh mahat profile picture" className="object-cover"/>
                </div>
                </div>
        </div>

        
        
    </main>
  )
}

export default Home