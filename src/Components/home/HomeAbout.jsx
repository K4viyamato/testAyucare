import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

//images


import pic1 from '../../images/swiper/Untitled-1.jpg'
import pic2 from '../../images/swiper/Untitled-2.jpg'
import pic3 from '../../images/swiper/Untitled-3.jpg'
import pic4 from '../../images/swiper/Untitled-4.jpg'
import pic5 from '../../images/swiper/Untitled-5.jpg'
import pic6 from '../../images/swiper/Untitled-6.jpg'


import leaf from '../../images/bgdrop/leaf.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';



// import required modules
import { EffectCards } from 'swiper/modules';



import UseAnimations from 'react-useanimations';


import arrowDown from 'react-useanimations/lib/arrowDown'
import { NavLink } from 'react-router-dom';

const HomeAbout = () => {



    let styles = 'rounded-2xl';





  return (
    <section className="bg-green-bg overflow-hidden">
    <div className="py-[150px] px-5 md:px-10 mx-auto max-w-screen-xl lg:py-16 grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 ">
        <div className="flex flex-col lg:items-start  md:items-center items-center m-auto">


            <h1 className="mb-4 text-4xl font-bold tracking-wide leading-none  text-white  md:text-5xl lg:text-6xl text-center md:text-left">

                About Ayucare

            </h1>


            <p className="mb-8 px-9 md:px-10 lg:px-0 text-lg font-normal text-gray-500 lg:text-xl  text-center md:text-center lg:text-left ">
            Ayu Care is your dedicated sanctuary for Ayurvedic healing and holistic wellness. With a deep-rooted belief in the power of Ayurveda, we are committed to helping you achieve optimal health and balance in mind, body, and spirit.
            </p>



            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 w-[200px] ">
            <NavLink to='/about' className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden tracking-tighter text-white border-2 border-white/30 rounded-[10px] group hover:border-white/0 duration-100">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56 "></span>

            <span className="relative text-white font-semi-bold text-[20px]">About Us</span>
            <UseAnimations animation={arrowDown}  strokeColor='#fff' speed={2} size={34} className='rotate-[270deg] ml-2 mt-1'/>
            </NavLink>
                 
            </div>


        </div>



        <div className=''>
            

        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="xl:w-[500px]  lg:w-[400px]  md:w-[450px] w-[300px]"
      >
        
        <SwiperSlide><img src={pic1} className={styles}/></SwiperSlide>
        <SwiperSlide><img src={pic2} className={styles}/></SwiperSlide>
        <SwiperSlide><img src={pic3} className={styles}/></SwiperSlide>
        <SwiperSlide><img src={pic4} className={styles}/></SwiperSlide>
        <SwiperSlide><img src={pic5} className={styles}/></SwiperSlide>
        <SwiperSlide><img src={pic6} className={styles}/></SwiperSlide>
        
        
      </Swiper>



        </div>
    </div>
</section>
  )
}

export default HomeAbout