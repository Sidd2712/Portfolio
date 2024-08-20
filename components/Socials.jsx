import React from 'react'
import Link from 'next/link'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

const socials=[
    {
        icons:<FaGithub/>,
        path:'https://github.com/Sidd2712'
    },
    {
        icons:<FaLinkedinIn/>,
        path:'https://www.linkedin.com/in/siddharth-goyal-340386230/'
    },
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}> 
        {socials.map((item, index)=>{
            return <Link key={index} href={item.path} className={iconStyles}>{item.icons}</Link>
        })}
    </div>
  )
}

export default Socials