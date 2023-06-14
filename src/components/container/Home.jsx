import React from 'react'
import hero from '../../assets/hero.png'
import { logos } from '../../Data'

const Home = () => {
  return (
    <div className='section' id='home'>
      <div className='md:flex items-center justify-center'>
        <div>
          <div className='font-bold text-xs text-Teal mb-4'>
            your e-learning partner
          </div>
          <div className='sm:text-[2.5rem] text-[1.825rem] font-bold'>
            This is <br /> the new way <br /> to learn online
          </div>
          <p className='text-sm leading-7 text-gray max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, recusandae. Earum dolorem est voluptatum alias?</p>
          <div className='mt-6'>
            <button className='px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm'>Get Started</button>
            <button className='px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm'>Discover</button>
          </div>
        </div>
        <div className='md:w-[60%]'>
          <img src={hero} alt="hero" />
        </div>
      </div>
      <div>
        <p className='text-center text-xl'>
          We collaborate with
          <span className='text-Teal'>100+ leading universities ans companies</span>
        </p>
        <div className='flex items-center justify-center flex-wrap gap-8 p-2'>
          {logos.map((logo, index) => (
            <div className='w-28' key={index}>
              <img src={logo} alt="logo" className='w-full flex-wrap object-cover'/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home