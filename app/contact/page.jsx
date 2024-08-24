"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from '@/components/ui/select'
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';

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
    icon:<FaPhoneAlt/>,
    title:"Phone",
    description:"(+91) 8000609851",
  },
];

import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div>Contact</div>
  )
}

export default Contact