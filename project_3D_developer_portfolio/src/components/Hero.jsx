import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import  Github  from '../assets/github.png';
import Linkedin from '../assets/linkedin.png';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[200px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div> */}

        <div >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#FF4162]'>Riya</span>
            </h1>
            <h3 className={`${styles.heroSubText} text-white`}>
            <span className='text-[#C0FFF4]'>Software Developer</span>
            </h3>
          <p className={`${styles.heroSubText} mt-1 text-white-100`}>
          Coding with Passion, Delivering with Precision<br className='sm:block hidden' />
            
            
          </p>
          <div className="mt-8">              
          <button
              className={`${styles.resumeButton} bg-yellow-500 p-4 rounded text-xl hover:border-slate-400  ring-blue-500 `}
              onClick={() => window.open('https://docs.google.com/document/d/1_AUwdEfAbwnOAOZ0PG9sIul4oyur7Z_SEcZXX9Nfu8E/edit?usp=sharing', '_blank')}
              onMouseEnter={(e) => {
                e.target.style.backgroundImage = 'linear-gradient(to right, #FF4162, #FF4B2B, #FF4162)';
                e.target.style.backgroundSize = '200% auto';
                e.target.style.animation = 'shine 2s linear infinite';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundImage = '';
                e.target.style.backgroundSize = '';
                e.target.style.animation = '';
              }}
            >
              Resume
            </button>   
            
         
              <IconButton  onClick={() => window.open('https://github.com/Riya-t-21/')}>
                <img src={Github} alt="Github" className="w-14 h-14 ml-5" />
            </IconButton>
            <IconButton onClick={() => window.open('https://www.linkedin.com/in/riya-tulswani-96507724a/')}>
              <img src={Linkedin} alt="Linkedin" className="w-14 h-14 ml-5" />
            </IconButton>          
            
            </div>
    
        
        </div>
      </div>

      {/* <ComputersCanvas /> */}
{/* 
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
