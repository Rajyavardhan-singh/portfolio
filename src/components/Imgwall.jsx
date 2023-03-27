import React from 'react'
import Portfolio from '../media/Portfolio.png'

import Netflix from '../media/Netflix.png'
import heybuddy from '../media/Hey Buddy.png'
import CloudCast from '../media/CloudCast copy.png'
import Dashboard from '../media/Admin Dashboard.png'
import Foodies from '../media/Foodies.png'

import ImgwallImage from './ImgwallImage'


const Imgwall = () => {
  return (
    <section>


    <div className='flex flex-wrap my-3 '>
      <ImgwallImage src={Dashboard} projectLink='https://dashboard-ivory-five.vercel.app/'/>
      <ImgwallImage src={Netflix} projectLink="https://netflixclone-rust.vercel.app/"/>
      <ImgwallImage src={CloudCast} projectLink='https://cloud-cast.vercel.app/'/>
      <ImgwallImage src={heybuddy} projectLink='https://heybuddy-omega.vercel.app'/>
      <ImgwallImage src={Portfolio} className='hidden md:block' projectLink='https://rajyavardhan.vercel.app/'/>
      <ImgwallImage src={Foodies} projectLink='https://foodiesworld.vercel.app/'/>
      
    </div>

    </section>
  )
}

export default Imgwall
