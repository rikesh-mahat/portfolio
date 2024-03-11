// library imports
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {
  useEffect(() =>{
    AOS.init()
  }, [])
  return (
    <article name='about' className="section border-none">
        <div className="all-padding flex flex-col justify-center h-full">
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-12 px-4'>
            <div className='text-4xl font-bold space-y-3' data-aos='zoom-in-up' data-aos-duration='1000'>
                <h1 className="border-b-[3px] border-pink-600 inline-block">About</h1>
              <p>Hi. I'm <span className="text-pink-600">Rikesh Mahat</span>, nice to meet you. Please take a look around.</p>
            </div>
            <div className="flex flex-col justify-center" data-aos='zoom-in-down' data-aos-duration='1000'>
              <p>I am passionate about building projects that improves
              my knowledge. I specialize in creating projects
              using ReactJs, Tailwind CSS and NodeJS. Would you like to contact me or hire me?</p>  
            </div>
          </div>
        </div>
    </article>
  )
}

export default About