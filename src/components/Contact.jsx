// icon import
import { MdEmail } from "react-icons/md";

// library imports
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Contact = () => {
    useEffect(() =>{
        AOS.init()
    }, [])
  return (
    <section name='contact' className="section">
        <div className="all-padding h-full flex flex-col justify-center gap-4 items-center">

        <div className="space-y-2" data-aos="fade-right" data-aos-duration='1000'>
            <h1 className="border-b-[3px] border-pink-600 inline-block text-4xl font-bold">Contact Me</h1>
            <p className="flex flex-row items-center gap-2 flex-wrap">// <span className="italic text-md">Submit form or email me </span> : <MdEmail className="inline-blocks" /> <span className="text-pink-600 underline">rikeshmahat.96@gmail.com</span></p>
        </div>
        <form action="https://getform.io/f/jbwllmla" method="POST" className=" w-full md:w-[35%]" data-aos='fade-up' data-aos-duration='1000'>
            
                <div className="flex flex-col gap-4">
                
                    
                    <div className="flex flex-col gap-2 w-full">

                        <label htmlFor='fullName'>Full Name</label>
                        <input type="text" placeholder="John Doe" id="fullName" className="form-input" name="fullName" required/>
                    </div>

                    <div className="flex flex-col gap-2 w-full ">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" className="form-input" autoComplete="true" required/>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="message">Email</label>
                    <textarea type="text" name="message" id="message" placeholder="leave a message..." className="form-input" required></textarea>
                    </div>
                </div>
                <div className="">
            <button type="submit" className="p-2 bg-pink-700 hover:opacity-80 rounded-md mt-5 text-xl font-semibold w-full">Send Message</button>
            </div>
        </form>
        </div>
    </section>
    )
}

export default Contact