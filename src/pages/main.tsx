import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Works } from '../components'
// import Preloader from '../components/preloader';
// import { useAppContext } from '../contexts/app.context';

const MainPage = () => {

    // const { appLoaded } = useAppContext();
  return (
    <div className='relative z-0 bg-primary'>

      {/* {!appLoaded && <div className='max-h-[100vh] overflow-hidden'>
        <Preloader />
        <Hero />
        <Contact />
        <StarsCanvas />
      </div>} */}

      {/* {appLoaded && <> */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
        </div>
        <StarsCanvas />
      {/* </>} */}
    </div>
  )
}

export default MainPage