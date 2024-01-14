
export default function Header() {
  return (
    <>

      <section className='flex flex-col gap-4 w-full mx-auto mt-28  animate__animated animate__fadeIn  p-1  '>
        <h1 className='text-4xl text-primary font-semibold '>حفظنى معك فى تعلم القرأن</h1>
        <p className='md:w-[50%] w-[75%] text-2xl text-primary font-medium md:mt-0 mt-[50px]'>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها</p>
        <button className='text-primary  w-[250px] relative border border-primary px-4 py-2 rounded   after:absolute after:bottom-0 after:left-0 after:bg-[#0b7162] hover:text-white  after:w-full after:h-0 hover:after:h-full after:transition-all  after:z-[-1] z-[2]' >تواصل معنا</button>
        
        <span className='h-[290px] w-full'></span>
      </section>


    </>
  )
}
