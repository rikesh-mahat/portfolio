// icons import
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

// library imports
import {useState} from 'react'
import {Link} from 'react-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const handleMenuActive = () =>{
        setMenuActive(!menuActive)

    }
    useEffect(()=>{
        AOS.init()
    }, [])

    
  return (
    <header className="fixed z-9999 top-0 left-0 w-screen h-20 flex justify-between items-center px-8 md:px-16 bg-[#0a132f] text-gray-300">

        {/* logo section*/}
        <section className=''>
            <h1 className="text-md"><span className="bg-white/25 px-3 py-2 font-bold">R</span> <span className="font-bold">M</span></h1>
        </section>

        {/* links section */}
        <section className='hidden md:flex'>
                <ul className="flex flex-row gap-6 text-xl">
                    <li>
                <Link 
                to="home" 
                spy={true} 
                smooth={true} 
                duration={500}>
                    Home
                </Link>
                    </li>
                    <li>
                    <Link 
                to="about" 
                spy={true} 
                smooth={true} 
                duration={500}>
                About
                </Link>
                    </li>
                    <li>
                    <Link 
                to="skills" 
                spy={true} 
                smooth={true} 
                duration={500}>
                   Skills 
                </Link>
                    </li>
                    <li>
                    <Link 
                to="works" 
                spy={true} 
                smooth={true} 
                duration={500}>
                    Works
                </Link>
                    </li>
                    <li>
                    <Link 
                to="contact" 
                spy={true} 
                smooth={true} 
                duration={500}>
                    Contact
                </Link>
                    </li>
                </ul>
        </section>

        {/* hamburger section */}
        <section className="">
            <GiHamburgerMenu className="size-6 md:hidden" onClick={handleMenuActive}/>
        </section>

        {/* mobile navigation section */}
        <aside
        className={`md:hidden fixed top-0 backdrop-blur-lg right-0 w-full h-screen  bg-[#0a132f] text-gray-300 ${menuActive ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out`}>
            <ul className="h-full flex flex-col items-center justify-center gap-8  text-3xl" data-aos='fade-left' >
                <li>
                    <Link 
                    to="home" 
                    spy={true} 
                    smooth={true} 
                    duration={500}
                    onClick={handleMenuActive}>
                        Home
                    </Link>
                </li>
                <li >
                    <Link 
                    to="about" 
                    spy={true} 
                    smooth={true} 
                    duration={500}
                    onClick={handleMenuActive}>
                        About
                    </Link>
                </li>
                <li onClick={handleMenuActive}>
                    <Link 
                    to="skills" 
                    spy={true} 
                    smooth={true} 
                    duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link 
                    to="works" 
                    spy={true} 
                    smooth={true} 
                    duration={500}
                    onClick={handleMenuActive}>
                        Works
                    </Link>
                </li>
                <li>
                    <Link 
                    to="contact" 
                    spy={true} 
                    smooth={true} 
                    duration={500}
                    onClick={handleMenuActive}>
                        Contact
                    </Link>
                </li>
             


                <div className="absolute bottom-10 flex flex-row gap-4">

                    <a href="https://github.com/rikesh-mahat" target="_blank">

                        <FaGithub className="size-7 hover:scale-150 hover:text-blue-500 cursor-pointer"/>
        
                    </a>

                    <a href="https://leetcode.com/user6363QG/" target="_blank">
                        <SiLeetcode className="size-7 hover:scale-150 hover:text-blue-500 cursor-pointer"/>
                    </a>

                    <a href="https://www.linkedin.com/in/rikesh-mahat-6306a4211/" target="_blank">
                        <FaLinkedin className="size-7 hover:scale-150 hover:text-blue-500 cursor-pointer"/>
                       
                    </a> 

                    <a href="https://www.instagram.com/rikesh_mahat/" target="_blank">
            <FaInstagram className="size-7 hover:scale-150 hover:text-blue-500 cursor-pointer"/>
          
        </a>

                </div>

                <div className="absolute right-5 bottom-8">
                <p className="text-[20px] bg-white/5 rounded-md px-4 py-1" onClick={handleMenuActive}>Close</p>
                </div>
                
            </ul>

        </aside>

        {/* social links  section*/}
        <aside className="bg-white/5 fixed  hidden right-0 top-1/2 -translate-y-1/2 mx-auto md:flex flex-col gap-4 p-4 rounded-tl-lg rounded-bl-lg">
        <div className="relative group"> 
         <a href="https://github.com/rikesh-mahat" target="_blank">

            <FaGithub className="size-5 hover:scale-150 hover:text-blue-500 cursor-pointer"/>
            <p className="absolute right-9 top-0 hidden group-hover:block">Github</p>
         </a>
        </div> 

        <div className="relative group">  
        <a href="https://www.linkedin.com/in/rikesh-mahat-6306a4211/" target="_blank">
            <FaLinkedin className="size-5 hover:scale-150 hover:text-blue-500 cursor-pointer"/>
            <p className="absolute right-9 top-0 hidden group-hover:block">LinkedIn</p>
        </a> 
        </div>

        <div className="relative group">   
        <a href="https://www.instagram.com/rikesh_mahat/" target="_blank">
            <FaInstagram className="size-5 hover:scale-150 hover:text-blue-500 cursor-pointer"/>
            <p className="absolute right-9 top-0 hidden group-hover:block">Instagram</p>
        </a>
        </div>

        <div className="relative group">   
        <a href="https://leetcode.com/user6363QG/" target="_blank">
        <SiLeetcode className="size-5 hover:scale-150 hover:text-blue-500 cursor-pointer"/>
        <p className="absolute right-9 top-0 hidden group-hover:block">LeetCode</p>

        </a>
        </div>
        </aside>
    </header>
  )
}

export default Navbar