import React from 'react';
import { Button } from '@/components/ui/button';
import {FiDownload} from "react-icons/fi";
import Socials from '@/components/Socials';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';


const Home = () => {
  return (
    <section className='h-full'>
      <div className="container mx-auto h-full">
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>Web Developer</span>
            <h1 className='h1'>
              Hello I&apos;m <br/> <span className='text-accent'>Siddharth Goyal</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
            I bring ideas to life with code, crafting dynamic web experiences that connect and inspire.
            </p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <a href="/Sid_Resume.pdf" download="Siddharth_Goyal_Resume.pdf">
              <Button variant='outline' size='lg' className="uppercase flex items-center gap-8">
                <span>Download Resume</span>
                <FiDownload className='text-xl'/>
              </Button>
              </a>
              <div className='mb-8 xl:mb-0'>
                <Socials containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base 
                  hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Home;
