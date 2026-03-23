
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import Contact from '../sections/Contact';
export default function ContactPage(){
    return (
      <>
        <Header/>
        <Contact/>
        <div className='relative w-full text-sm sm:text-xl md:text-[18px] pt-14 pb-4 bg-black  text-white md:flex md:justify-between z-10 text-center px-8  '>
          <a href='mailto:kawalkarnayan07@gmail.com' className='text-white'>nayan@design.com</a>
          <h1 >©<span  className='text-white'>2026</span></h1>
          <h1 className='text-white' ><span className='  text-gray-400'>By    </span >  Nayan Kawalkar</h1>
        </div>
        </>
    )
  
}