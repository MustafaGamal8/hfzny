import React, { useRef } from 'react'
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import { useInView } from 'react-intersection-observer';


export default function About() {
  return (
    <section className='w-full mx-auto mt-20 '>

      <h1 className='text-4xl font-bold  mb-10'>من نحن</h1>

      <div className='flex flex-col md:flex-row w-full flex-wrap items-start justify-around overflow-x-hidden'>
        <Item photo={p1} animate={"animate__fadeInRight"} title="معلم ومعلمة" text="هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها" />
        <Item photo={p2} animate={"animate__fadeInLeft"} title="معلم ومعلمة" text="هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها" />
        <Item photo={p2} animate={"animate__fadeInRight"} title="معلم ومعلمة" text="هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها" />
        <Item photo={p1} animate={"animate__fadeInLeft"} title="معلم ومعلمة" text="هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها" />
      </div>


    </section>
  )
}


function Item({ photo, title, text ,animate}) {
  const [ref, inView] = useInView({
    triggerOnce: true, 
  });

  return (
    <div ref={ref} className={`flex flex-col gap-3 md:w-[40%] w-full p-2 animate__animated   animate-on-scroll ${ inView && animate}`}>

      <img className='w-[500px] md:w-[800px] h-auto' src={photo} alt="" />

      <h1 className='text-xl font-bold text-primary'>{title}</h1>

      <p className='text-primary text-lg'>{text}</p>

    </div>
  )
}
