import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Contact = () => {
  return (
    <section className='py-16 h-[1200px] lg:section:' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row mt-[250px]'>
          <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-red-400 font-medium mb-2 tracking-wide'>Get in Touch</h4>
              <h2 className='text-[45px] uppercase lg:text-[90px] leading-none mb-12'>Let's work <br /> together</h2>
            </div>
          </motion.div>
          <motion.form variants={fadeIn('left', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.3}} className='flex-1 border rounded-2xl flex-col gap-y-6 pb-24 p-6 items-start'>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-red-400 transition-all' type='text' placeholder='Your Name' />
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-red-400 transition-all' type='email' placeholder='Your Email' />
            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-red-400 transition-all resize-none mb-12' placeholder='Your massage'></textarea>
            <button className='btn btn-lg' type='submit'>Send Massage</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
