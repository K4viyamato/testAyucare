import React from 'react'


import UseAnimations from 'react-useanimations';


import arrowDown from 'react-useanimations/lib/arrowDown'
import { NavLink } from 'react-router-dom';


import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform duration-500`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}


const HomeService = () => {



  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);















  return (
    <section className="bg-green-bg2 overflow-hidden ">
    <div className="py-[100px] px-5 md:px-10 mx-auto max-w-screen-xl lg:py-16 grid md:grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-16 ">
        <div className="flex flex-col  items-center m-auto">


            <h1 className="mb-4 text-4xl font-bold tracking-wide leading-none text-white  md:text-5xl lg:text-6xl text-center ">

            Discover Our Healing Services

            </h1>


            {/* <p class="mb-8 px-9 md:px-10 lg:px-0 text-lg font-normal text-gray-400 lg:text-xl  text-center ">
            Ayu Care is your dedicated sanctuary for Ayurvedic healing and holistic wellness. With a deep-rooted belief in the power of Ayurveda, we are committed to helping you achieve optimal health and balance in mind, body, and spirit.
            </p> */}



            









            <div className=' md:p-5 lg:p-10 m-2 mt-4 items-center w-[90%] md:w-[75%]'>

            <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className="mb-4  rounded-lg border-2 border-white/30 px-0">

                      <AccordionHeader
                        onClick={() => handleOpen(1)}
                        className={`border-b-0  transition-colors p-5 text-white text-left ${
                          open === 1 ? "text-green-400 hover:!text-green-500" : ""
                        }`}
                      >
                        What Ayurveda treatments do you offer?
                      </AccordionHeader>

                      <AccordionBody className="pt-0 text-[17px] font-normal px-5 pb-5 text-gray-300 text-left">
                      We offer a wide range of Ayurvedic treatments, including those for
                      <ul className='list-disc p-5'>
                        <li>Joint disorders</li>
                        <li>Neurological disorders</li>
                        <li>Gynecological disorders</li>
                        <li>GIT disorders</li>
                        <li>Ano-rectal disorders</li>
                      </ul>and more.
                      </AccordionBody>

          </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className="mb-4 rounded-lg border-2 border-white/30 px-0">

                      <AccordionHeader
                        onClick={() => handleOpen(2)}
                        className={`border-b-0  transition-colors p-5 text-white ${
                          open === 2 ? "text-green-400 hover:!text-green-500" : ""
                        }`}
                      >
                        Do you provide acupuncture treatments?
                      </AccordionHeader>

                      <AccordionBody className="pt-0 text-[17px] font-normal px-5 pb-5 text-gray-300">
                      Yes, we offer acupuncture treatments as part of our holistic approach to wellness.
                      </AccordionBody>

          </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}  className="mb-4 rounded-lg border-2 border-white/30 px-0">

                      <AccordionHeader
                        onClick={() => handleOpen(3)}
                        className={`border-b-0  transition-colors p-5 text-white ${
                          open === 3 ? "text-green-400 hover:!text-green-500" : ""
                        }`}
                      >
                        What is cupping therapy, and how can it benefit me?
                      </AccordionHeader>

                      <AccordionBody className="pt-0 text-[17px] font-normal px-5 pb-5 text-gray-300">
                      Cupping therapy is a traditional practice that can help with pain relief, relaxation, and improved blood circulation.
                      </AccordionBody>

          </Accordion>
            <Accordion open={open === 4} icon={<Icon id={4} open={open} />}  className="mb-4 rounded-lg border-2 border-white/30 px-0">

                      <AccordionHeader
                        onClick={() => handleOpen(4)}
                        className={`border-b-0  transition-colors p-5 text-white ${
                          open === 4 ? "text-green-400 hover:!text-green-500" : ""
                        }`}
                      >
                        What are Panchakarma treatments, and how can they help?
                      </AccordionHeader>

                      <AccordionBody className="pt-0 text-[17px] font-normal px-5 pb-5 text-gray-300">
                      Panchakarma is a detoxification and rejuvenation program in Ayurveda that can cleanse and balance your body, mind, and spirit.
                      </AccordionBody>

          </Accordion>
            <Accordion open={open === 5} icon={<Icon id={5} open={open} />}  className="mb-4 rounded-lg border-2 border-white/30 px-0">

                      <AccordionHeader
                        onClick={() => handleOpen(5)}
                        className={`border-b-0  transition-colors p-5 text-white ${
                          open === 5 ? "text-green-400 hover:!text-green-500" : ""
                        }`}
                      >
                        What is Agni Karma, and when is it recommended?
                      </AccordionHeader>

                      <AccordionBody className="pt-0 text-[17px] font-normal px-5 pb-5 text-gray-300">
                      Agni Karma is a specialized Ayurvedic treatment that may be recommended for certain conditions. Our practitioners will provide guidance based on your specific needs.
                      </AccordionBody>

          </Accordion>
            <Accordion open={open === 6} icon={<Icon id={6} open={open} />}  className="mb-4 rounded-lg border-2 border-white/30 px-0">

                      <AccordionHeader
                        onClick={() => handleOpen(6)}
                        className={`border-b-0  transition-colors p-5 text-white ${
                          open === 6 ? "text-green-400 hover:!text-green-500" : ""
                        }`}
                      >
                        What is leech therapy, and what conditions can it address?
                      </AccordionHeader>

                      <AccordionBody className="pt-0 text-[17px] font-normal px-5 pb-5 text-gray-300">
                      Leech therapy is a natural treatment that may be used for various health concerns. Our experienced practitioners can provide more information during your consultation.
                      </AccordionBody>

          </Accordion>

          

          
      </div>

      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 w-[200px]  ">
            <NavLink to='/services' className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden tracking-tighter text-white border-2 border-white/30 rounded-[10px] group hover:border-white/0 duration-100">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56 "></span>

            <span className="relative text-white font-semi-bold text-[20px]">More info</span>
            <UseAnimations animation={arrowDown}  strokeColor='#fff' speed={2} size={34} className='rotate-[270deg] ml-2 mt-1'/>
            </NavLink>
                 
            </div>


        </div>
        
        </div>
        </section>
  )
}

export default HomeService