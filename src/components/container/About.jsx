import React from 'react'
import about from '../../assets/About.jpg'

const About = () => {
  return (
    <div className='section' id='about'>
      <div className='grid md:grid-cols-2 gap-8 place-items-center'>
        <div className='border-[3px] border-solid border-Teal rounded-lg'>
          <img src={about} alt="about" className='p-4'/>
        </div>
        <div>
          <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-5'>
            We provide the <br /> 
            <span className='text-Teal'>online courses</span>
          </div>
          <p className='text-wm text-gray leading-7 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati molestiae eveniet nulla unde, dolore, illum molestias a, nemo ipsam reiciendis ducimus suscipit repudiandae beatae itaque vitae alias eligendi nobis. Numquam.</p>
          <button className='py-3 px-6 border border-solid border-gray rounded-lg font-bold'>Know More</button>
        </div>
      </div>
    </div>
  )
}

export default About