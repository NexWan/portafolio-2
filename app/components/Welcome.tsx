import { motion } from 'framer-motion';
import { useState } from 'react';
import { ReactTyped } from 'react-typed';

const Welcome = () => {
  const [typingStopped, setTypingStopped] = useState(false);
  return (
    <motion.div initial={{x: -100}} animate={{x: 0}} className='w-full h-full flex items-center justify-center strong-bg'>
      <div className='container items-center justify-center flex flex-col text-white card-bg w-1/2 h-3/5 rounded-xl shadow-xl'>
      <ReactTyped
        strings={['Welcome to My Portfolio']}
        typeSpeed={40}
        backSpeed={50}
        onComplete={() => {setTypingStopped(true)}}
        className='text-xl lg:text-4xl chewy-regular mb-5 text-center'
      />
      {typingStopped && 
        <motion.div className='flex flex-col items-center justify-center' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <img src="/media/yo.jpg" className='rounded-full mb-2 shadow-2xl w-32 lg:w-64' alt="Leo" width={200} height={200} />
          <p className='lg:text-2xl text-lg text-center'>My name is Leo. <br></br>But you can call me Wan!</p>
          <ReactTyped
            strings={['Frontend Developer', 'Backend Developer', 'Fullstack Developer', 'Power Platform Developer', 'Networking Enthusiast']}
            typeSpeed={40}
            backSpeed={50}
            loop
            className='lg:text-2xl text-lg chewy-regular mb-5'
          />
        </motion.div>
      }
      </div>
    </motion.div>
  );
};

export default Welcome;