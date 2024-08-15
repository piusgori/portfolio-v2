import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from '../components'
import Preloader from '../components/preloader';
import { useAppContext } from '../contexts/app.context';

const MainPage = () => {

    const { appLoaded } = useAppContext();

    if (!appLoaded) return <div className='max-h-[100vh] overflow-hidden'>
        <Preloader />
        <Hero />
        <Contact />
        <StarsCanvas />
    </div>

  return (
    <>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
        </div>
        <StarsCanvas />
    </>
  )
}

export default MainPage