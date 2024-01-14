
import { useInView } from 'react-intersection-observer';

export default function Contact() {

  

  const [ref, inView] = useInView({
    triggerOnce: true, 
  });

  return (
    <section className="flex flex-col md:flex-row justify-evenly   w-full mx-auto my-10 gap-20">

      <div ref={ref} className={`bg-[#f0f0f0] p-4 py-6 md:w-[50%] w-full  h-[500px] animate__animated  ${inView && 'animate__fadeInRight'}`}>
        <h1 className="text-2xl text-primary font-bold">تواصل معنا</h1>
        <p className="text-xl">ارسل لنا استفسارك وسوف يقوم فريقنا بالتواصل معك</p>
      

      <div className="bg-white p-4 w-[90%] mx-auto mt-4 md:text-lg">
        <h1>رقم الهاتف</h1>
        <div className="flex items-center ">
          <p className="mx-2">9661234567891</p>
          <p className="mx-2">9661234567891</p>
        </div>
      </div>

      <div className="bg-white p-4 w-[90%] mx-auto mt-8 text-lg">
        <h1> البريد الالكتروني</h1>
        <div className="flex items-center ">
          <p>publictarnsport@email.com</p>
        </div>
      </div>

      </div>

      <div ref={ref} className={`bg-primary p-5 rounded text-black  md:w-[50%] w-full h-[500px] animate__animated   ${inView && 'animate__fadeInLeft'}`}>

      <form className="w-full h-full p-5 ">
        <div className="mb-4">
          <label className="block text-sm font-medium " htmlFor="name">الاسم</label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 border rounded w-full"
            placeholder="أدخل اسمك"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium " htmlFor="email">البريد الإلكتروني</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 border rounded w-full"
            placeholder="أدخل بريدك الإلكتروني"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium " htmlFor="phone">الهاتف</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 p-2 border rounded w-full text-right"
            placeholder="أدخل رقم هاتفك"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium " htmlFor="text">الرسالة</label>
          <textarea
            id="text"
            name="text"
            rows="4"
            className="mt-1 p-2 border rounded w-full"
            placeholder="أدخل نص الرسالة"
          ></textarea>
        </div>

        <div type="submit" className="bg-black w-[90%] mx-auto text-white p-2 rounded  text-center ">إرسال</div>
      </form>

      </div>

    </section>
  )
}
