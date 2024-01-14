import React from 'react'
import Profile from '../assets/Profile.png'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useInView } from 'react-intersection-observer';

export default function Opinions() {

  let settings = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    infinite:true,    
    responsive: [
      {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
      {
      breakpoint: 1400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },

  ]
};

  const [ref, inView] = useInView({
    triggerOnce: true, 
  });

  return (
    <section className='min-h-[400px] bg-primary w-full my-10 '>

      <div ref={ref} className={` w-[90%] pt-10 mx-auto animate__animated ${inView && ' animate__fadeInUp'}`}>

        <div className='felx items-center justify-between'>
          <div>
            <h1 className='text-white text-2xl'> اراء العملاء</h1>
            <p className='font-semibold text-xl mt-1'>بعض اراء العملاء الذي شرفنا بالعمل معهم</p>
          </div>

        </div>
        <div className='w-full mt-5'>
          

        <Slider  {...settings}>
            <Item name={"Mohamed Ahmed"} job={"CEO, Marketing Guru"} photo={Profile} text={"شكرا لكم من اجل خدمتكم تطبيق جميل مزيد من التالق"} />
            <Item name={"Mohamed Ahmed"} job={"CEO, Marketing Guru"} photo={Profile} text={"شكرا لكم من اجل خدمتكم تطبيق جميل مزيد من التالق"} />
            <Item name={"Mohamed Ahmed"} job={"CEO, Marketing Guru"} photo={Profile} text={"شكرا لكم من اجل خدمتكم تطبيق جميل مزيد من التالق"} />
            <Item name={"Mohamed Ahmed"} job={"CEO, Marketing Guru"} photo={Profile} text={"شكرا لكم من اجل خدمتكم تطبيق جميل مزيد من التالق"} />
        </Slider>
          
        </div>

      </div>


    </section>
  )
}



function Item({ photo, name, job, text }) {
  return (
    <div className='bg-white p-8 rounded-xl  w-[400px] h-[160px]   '>
      <h1 className='md:w-[70%] text-right'>{text}</h1>

      <div className='flex  items-center  gap-1'>
        <img className='rounded-full h-8 w-8' src={photo} alt="" />
        <div className='text-left'>
          <h1>{name}</h1>
          <p>{job}</p>
        </div>
      </div>

    </div>
  )

}