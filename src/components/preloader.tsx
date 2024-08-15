import { useProgress } from "@react-three/drei";
import { useAppContext } from "../contexts/app.context"
import { useEffect } from "react";

const Preloader = () => {

    const { progress } = useProgress();
    const { setModelsLoaded } = useAppContext();

    useEffect(() => {
        if (progress === 100) {
            setModelsLoaded(true)
        }
    }, [progress])

  return (
    <div className="relative flex items-center justify-center w-full h-screen overflow-hidden transition-all duration-1000">
        <div className="absolute w-[300px] h-[300px] rounded-full shadow-[0_0_5px_black] animate-spin-custom ring"></div>
        <div className="flex flex-col items-center">
            <img src='/logo.png' alt="Welcome to Piuskimsey" className="h-40 md:h-30 lg:h-24"></img>
            <p className="text-center text-[18px] italic text-white">{Math.round(progress)}% loading...</p>
        </div>
    </div>
  )
}

export default Preloader