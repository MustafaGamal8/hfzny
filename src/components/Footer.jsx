
import { useInView } from 'react-intersection-observer';
export default function Footer() {
  

  const [ref, inView] = useInView({
    triggerOnce: true, 
  });


  return (
    <footer ref={ref}  className={`bg-[#073e32] w-full min-h-[450px] flex flex-col md:flex-row items-center justify-around text-white md:py-0 py-4  animate__animated ${inView && ' animate__fadeIn'}` }>

      <div className="md:w-[40%] mb-4 p-1">
        
      <h1 className='text-3xl font-bold text-green-600 underline mt-5'>حفظني</h1>
        <p className="text-xl">هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
      </div>

      <div className="flex flex-col text-xl">
        <h1 className="font-semibold">الصفحات الرئيسية</h1>

        <h2 className="cursor-pointer">الرئيسية</h2>
        <h2 className="cursor-pointer">المعلمون</h2>
        <h2 className="cursor-pointer">الحجوزات</h2>
        <h2 className="cursor-pointer">الجلسات</h2>
        <h2 className="cursor-pointer">القائمة</h2>
            

      </div>


      <div className="md:w-[450px]  w-full h-[230px] my-10">
        <h1 className="text-3xl font-bold mb-2">العنوان</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387131.68899103706!2d-74.25986739450048!3d40.69714942235554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2a3735d893%3A0xd4e119e4713c8eab!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1568180855449!5m2!1sen!2sus" width="100%" height="100%" frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
      </div>





    </footer>
  )
}
