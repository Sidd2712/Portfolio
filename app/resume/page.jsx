"use client";
import React from 'react'
import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDatabase, 
  FaGithub 
} from 'react-icons/fa';

import { 
  SiExpress, 
  SiMongodb, 
  SiFastapi, 
  SiCplusplus, 
  SiTypescript, 
  SiPytorch 
} from 'react-icons/si';

const about={
  title:"About Me",
  description:"I am Siddharth Goyal, a passionate software developer with expertise in front-end and full-stack development. With a strong foundation from ABV-IIITM Gwalior, I have developed a range of skills in technologies like React.js, Next.js, and Node.js. My experience includes internships at Qwings and Rarity Metrix, where I enhanced user interfaces, optimized performance, and secured applications. As a freelancer, I developed a full-stack e-commerce site for Punjab Desi Ghee, integrating Razorpay for seamless payments. Currently, I am building a modern shoe sales platform for ToeToys using Next.js and GraphQL. I thrive in collaborative environments and am dedicated to delivering high-quality, impactful software solutions.",
  info:[
    {
      fieldName:'Name',
      fieldValue:"Siddharth Goyal",
    },
    {
      fieldName:'Phone',
      fieldValue:"+91-8000609851",
    },
    {
      fieldName:'Experience',
      fieldValue:"1+ Year",
    },
    {
      fieldName:'Nationality',
      fieldValue:"Indian",
    },
    {
      fieldName:'Email',
      fieldValue:"siddharth.2727goyal@gmail.com",
    },
  ]
}

const experience={
  icon:"/assets/resume/badge.svg",
  title:"My Experience",
  items:[
    {
      company:"Ayudo",
      position:"Software Engineer Intern",
      duration:"Dec 2025 - Feb 2026",
      location: "Noida",
    },
    {
      company:"Qwings",
      position:"React Developer",
      duration:"June 2023 - September 2023",
      location: "Remote",
    },
    {
      company:"Rarity Metrix",
      position:"Full Stack Developer",
      duration:"October 2023 - December 2023",
      location: "Remote",
    },
    {
      company:"Friendigos", 
      position:"Freelance Web Developer",
      duration:"June 2024",
      location: "Remote",
    },
  ]
};

const education={
  icon:"/assets/resume/cap.svg",
  title:"My Education",
  items:[
    {
      institution:"ABV-IIITM Gwalior",
      degree:"Integerated Post Graduate Masters of Technology in Information Technology",
      duration:"June 2021 - Present",
    }
  ]
};

const skills = {
  title: "My Skills",
  description: "A comprehensive toolkit spanning frontend design, backend architecture, and machine learning, with a strong foundation in core CS concepts and distributed systems.",
  skillList: [
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiFastapi />,
      name: "FastAPI",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <FaDatabase />,
      name: "SQL & DBMS",
    },
    {
      icon: <SiPytorch />,
      name: "PyTorch",
    },
    {
      icon: <FaGithub />,
      name: "CI/CD & Git",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    }
  ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion'

const Resume = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:"easeIn"}}}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <Tabs defaultValue='experience'
          className='flex flex-col xl:flex-row gap=[60px]'>
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className='min-h-[70vh] w-full ml-10'>
            <TabsContent value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item,index)=>{
                      return(
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>
                              {item.company}
                              {item.location && (
                                <span className="text-white/40 text-sm ml-2">
                                  • {item.location}
                                </span>
                              )}
                            </p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item,index)=>{
                      return(
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.degree}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.skillList.map((skill,index)=>{
                    return(
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left ">
              <div className=' flex:col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item,index)=>{
                    return(
                      <li key={index} className='flex items-center justify-center xl:justify-start'>
                        <span className='text-white/60'>{item.fieldName}: </span>
                        <span className='text-xl ml-4'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume