"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from '@/components/ui/select'
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { useState } from 'react';
import axios from 'axios';


const info=[
  {
    icon:<FaPhoneAlt/>,
    title:"Phone",
    description:"(+91) 8000609851",
  },
  {
    icon:<FaEnvelope/>,
    title:"Mail",
    description:"siddharth.2727goyal@gmail.com",
  },
  {
    icon:<FaMapMarkedAlt/>,
    title:"Address",
    description:"ABV-IIITM Gwalior",
  },
];

import {motion} from 'framer-motion'

const Contact = () => {
  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  
  //   formData.append("access_key", "3f3c0804-a538-4673-925d-c32b661b0feb");
  
  //   const object = Object.fromEntries(formData);
  //   const json = JSON.stringify(object);
  
  //   try {
  //     const response = await fetch("https://api.web3forms.com/submit", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json"
  //       },
  //       body: json
  //     });
  
  //     if (!response.ok) {
  //       // If the response status is not 2xx, throw an error
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  
  //     const result = await response.json();
  
  //     if (result.success) {
  //       console.log("Form submitted successfully:", result);
  //     } else {
  //       console.log("Form submission failed:", result);
  //     }
  //   } catch (error) {
  //     console.error("There was an error submitting the form:", error);
  //   }
  // }
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      service: value
    });
  };
   axios.defaults.withCredentials=true;
  const handleSubmit = async (e) => {
    e?.preventDefault();
    try {
      const response = await axios.post('https://sidportfolio-api.vercel.app/submit', formData);
      alert('Form submitted successfully');
      setFormData(initialFormData);
    } catch (error) {
      alert('Failed to submit the form');
    }
  };
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:"easeIn"}}} className='py-6'>
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form action="\" className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl' onSubmit={handleSubmit}>
              <h3 className='text-4xl text-accent'>Let&apos;s work together</h3>
              <p className='text-white/60'>Have any questions or want to get in touch? Fill out the form below, and I&apos;ll get back to you as soon as possible!</p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type="text" name='firstName' placeholder="Firstname" value={formData.firstName} onChange={handleChange}/>
                <Input type="text" name='lastName' placeholder="Lastname" value={formData.lastName} onChange={handleChange}/>
                <Input name='email' type="text" placeholder="Email" value={formData.email} onChange={handleChange}/>
                <Input name='phone' type="text" placeholder="Phone Number" value={formData.phone} onChange={handleChange}/>
              </div>
              <Select onValueChange={handleSelectChange} value={formData.service}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="uiux">UI/UX Design</SelectItem>
                    <SelectItem value="adobe">Adobe Illustrator</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[200px]" placeholder="Type your message here." name="message" value={formData.message} onChange={handleChange}/>
              <Button size="md" className="max-w-40" type="Submit">Send Message</Button>
            </form>
          </div>
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item,index)=>{
                return(
                  <li key={index} className='flex items-center gap-6'>
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'>{item.title}</p>
                      <h3 className='text-xl'>{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
