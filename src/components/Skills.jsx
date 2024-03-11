// image imports
import django from '/django.png'
import js from '/js.png'
import mongo from '/mongo.png'
import python from '/python.png'
import tailwind from '/tailwind.png'
import sql from '/sql.png'
import reactjs from '/reactjs.png'
import node from '/node.svg'
import css from '/css.png'

// library imports
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Skills = () => {
  useEffect(() =>{
    AOS.init()
  }, [])
  return (
    <section name='skills' className="section flex flex-col justify-center gap-4 -z-20 ">

        <div className='all-padding'>
            <h1 className="border-b-[3px] border-pink-600 inline-block text-4xl font-bold">TechStack</h1>
        </div>
        <div className="all-padding flex flex-row flex-wrap gap-12">
           
            <div className='image-container ' data-aos='fade-up-right' data-aos-duration='300'>
                <img src={reactjs} alt="react js logo"  className='tech-img'/>
                <p className='text-center font-semibold'>React Js</p>
            </div>

            <div className='image-container' data-aos='fade-up-right' data-aos-duration='500' aos-delay='500'>
                    <img src={django} alt="django logo" className='tech-img'/>
                    <p className='text-center font-semibold'>Django</p>
            </div>

            <div className='image-container' data-aos='fade-up-right' data-aos-duration='700'>
                <img src={js} alt="java script logo" className='tech-img'/>
                <p className='text-center font-semibold'>JavaScript</p>
            </div>

            <div className='image-container' data-aos='fade-up-right' data-aos-duration='900'>
                <img src={python} alt="python logo" className='tech-img'/>
                <p className='text-center font-semibold'>Python</p>
            </div>

            <div className='image-container' data-aos='fade-up-right' data-aos-duration='1000'>
                    <img src={sql} alt="sql logo" className='tech-img'/>
                    <p className='text-center font-semibold'>MY SQL</p>
            </div>

            <div className='image-container' data-aos='fade-up-right' data-aos-duration='1200'>
                <img src={mongo} alt="" />
                <p className='text-center font-semibold'>Mongo DB</p>
            </div>

            <div className='image-container' data-aos='fade-up-right' data-aos-duration='1300'>
                <img src={node} alt="" className='tech-img'/>
                <p className='text-center font-semibold'>Node JS</p>
            </div>
            
            <div className='image-container' data-aos='fade-up-right' data-aos-duration='1500'>
                <img src={css} alt="" className='tech-img'/>
                <p className='text-center font-semibold'>CSS</p>
            </div>

            <div className='image-container' data-aos='fade-up-right' data-aos-duration='1600'>
                <img src={tailwind} alt="" className='tech-img'/>
                <p className='text-center font-semibold'>Tailwind CSS</p>
            </div>
            
        </div>
    </section>
  )
}

export default Skills