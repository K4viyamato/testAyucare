import React from 'react'
import bg1 from '../../images/bg/bg1.jpg'
import HomeAbout from './HomeAbout';
import HomeService from './HomeService';

import UseAnimations from 'react-useanimations';


import arrowDown from 'react-useanimations/lib/arrowDown'
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (

    <>
    
    <section className="bgpic relative overflow-hidden bg-cover text-center  h-[115vh] w-full mt-[-12px]">
    <img src={bg1} alt="bgpic" className=" w-full h-[100%] object-cover p-0 " />

    <div className="bgeffect absolute inset-0 overflow-hidden bg-fixed bg-black/40 bg-blend-multiply">
      <div className="flex h-full items-center justify-center">
        <div className="text-white">
          <h1 className="px-10 mb-4 text-4xl font-bold tracking-wide leading-none  text-white  md:text-5xl lg:text-[70px]">
          Discover the Healing Power of Ayurveda
          </h1>

          <p className="mb-8 px-10 pt-5 text-[20px] text-gray-300 lg:text-2xl sm:px-16 lg:px-48">
            
              {/* Ayu Care is a holistic health center that specializes in Ayurvedic medicine and wellness. We believe that the key to good health is to balance the mind, body, and spirit.
              <span className="md:block">
                Our experienced Ayurvedic practitioners offer a wide range of services to help you achieve your wellness goals, including personalized consultations, herbal remedies, traditional therapies, and wellness services.
              </span> */}

              Your Path to Holistic Wellness....
            
          </p>

          <NavLink to='/contact' className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden tracking-tighter text-white border-2 border-white/30 rounded-[50px] group hover:border-white/0 duration-100">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56 "></span>

            <span className="relative text-white font-semi-bold text-[20px]">Contact Us</span>
            <UseAnimations animation={arrowDown}  strokeColor='#fff' speed={2} size={34} className='rotate-[270deg] ml-2 mt-1'/>
            </NavLink>

        </div>
      </div>
    </div>
  </section>

  <HomeAbout />
  <HomeService />



  </>
  )
}

export default Home