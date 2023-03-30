import React from 'react';
import images from '../assets/avatar.svg'
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
const Banner = () => {
  return (
    <div className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center'>
          <div className='flex-1 text-center font-secondary lg:text-left'> 
            <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='text-[50px] font-bold leading-[0.8] lg:text-[110px]'>
              OTABEK <span>AHMATJONOV</span>
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I'm a</span>
              <TypeAnimation sequence={[
                "Developer",
                2000,
                "YouTuber",
                2000,
                "Trading",
                2000
              ]}
                speed={50}
                className='text-red-400' wrapper='span' repeat={Infinity} />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='mb-8 max-auto lg:mx-0'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In laboriosam aliquid hic. Mollitia pariatur explicabo sequi laudantium asperiores. Delectus, quisquam!</motion.p>
            <motion.div variants={fadeIn('up', 0.6)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact Me</button>
              <a href="#" className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>
            <motion.div variants={fadeIn('up', 0.7)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="https://youtube.com/channel/UCy7452gMGqlmh8GE0TNkDuA">
                <FaYoutube />
              </a>
              <a href="https://github.com/Otabekwebdeveloper" target={'_blank'}>
                <FaGithub />
              </a>
              <a href="https://dribbble.com/oahmatjonov">
                <FaDribbble />
              </a>
            </motion.div>
          </div>
          <motion.div variants={fadeIn('down', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto'>
            <img src={images} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  )
};

export default Banner;
