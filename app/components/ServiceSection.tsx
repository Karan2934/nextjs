'use client'
import React, { useState, useEffect, useRef } from 'react'
import JsonData from '../../public/jsondata/service.json'
import { PiArrowUpRightBold } from 'react-icons/pi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { faArrowRight, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { motion, useScroll, useTransform } from 'framer-motion';


export default function ServiceSection() {

  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const serviceText = JsonData.description;
  const aboutUs = JsonData.about.title;
  const progressRef = useRef(null);
  const textRef = useRef(null);
  const aboutRef = useRef(null);

  const { scrollYProgress: serviceScrollProgress } = useScroll({
    target: textRef,
    offset: ["start 0.6", "end 0.1"]  // Start at 40% viewport, end at 70%
  })

  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutRef,
    offset: ["start 0.6", "end 0.3"]  //its same as above
  })


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }

        else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );
    if (progressRef.current) {
      observer.observe(progressRef.current)
    }
    return () => observer.disconnect();

  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setProgress(prev => prev < 86 ? prev + 1 : 86);
    }, 50);
    return () => clearInterval(interval);
  }, [isVisible]);


  return (
    <div className='px-7 -mt-7'>

      {/* service section */}
      <div className='relative flex flex-col justify-center items-center '>
        <img
          src={JsonData.bgImage}
          className=''
        />
        <div className='absolute flex flex-col justify-center items-center'>

          <p className="relative pl-[21px] inline-block text-[16px] text-[#736c87] font-semibold uppercase">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-current bg-linear-to-r from-[#a051e6] to-[#6b43e3] rounded-full"></span>
            {JsonData.header}
          </p>

          <p className="font-bold text-4xl text-black tracking-wide" ref={textRef}>
            {serviceText.split(' ').map((word, index) => {
              const opacity = useTransform(
                serviceScrollProgress,
                [index * 0.1, (index + 1) * 0.1],
                [0.2, 1]
              );

              return (
                <motion.span key={index} style={{ opacity }} className="inline-block mr-2">
                  {word}
                </motion.span>
              );
            })}
          </p>
        </div>
      </div>
      
      <div className='lg:flex sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 sm:justify-items-center lg:justify-between'>
        {JsonData.services.map((service, index) => (
          <div key={index} className='p-2 w-96 group z-10'>
            <div className='relative rounded-tr-2xl rounded-tl-[150px] shadow-xl rounded-b-4xl bg-white'>
              <div className="absolute rounded-tr-2xl overflow-hidden rounded-tl-[150px] rounded-b-4xl inset-0 scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100 bg-[url('/icons/shape-25.png')] bg-cover bg-center">
                <div className="absolute inset-0 bg-linear-to-r from-[#a051e6d1] to-[#6b43e3c7] opacity-90"></div>
              </div>

              <div className={`transition-all duration-300  relative pt-10 pb-3.5 pl-12 pr-7 min-h-36 flex flex-col justify-between items-end ${service.margin === 15 ? 'lg:-mt-15' : 'lg:-mt-35'} `}>
                <div className='p-4 absolute rounded-full left-0 h-24 w-24 top-5 bg-linear-to-r from-[#a051e6] to-[#6b43e3] group-hover:bg-linear-to-r group-hover:from-black group-hover:to-black'>
                  <img src={service.logo} className='group-hover:hidden' />
                  <img src={service.hover} className='hidden group-hover:block absolute h-15 w-15 left-5' />
                </div>
                <p className='text-[#e6e0fa] mb-10 text-5xl group-hover:text-orange-400'>{service.number}</p>
                <p className='font-bold text-sm text-[#736c87] group-hover:text-[#b6b0c6]'>{service.title}</p>
                <p className='text-[28px] font-bold group-hover:text-white'>{service.description}</p>
              </div>
              <div className=' rounded-b-4xl overflow-hidden shadow-xl relative'>
                <div className="overflow-hidden relative border-t-8 group-hover:border-black border-orange-400 rounded-tr-[175px] lg:rounded-tr-[260px]  rounded-2xl">
                  <img
                    src={service.image}
                    alt="service1"
                    className='rounded-tr-[175px] lg:rounded-tr-[250px]  rounded-xl w-full transition-transform duration-300 group-hover:scale-110'
                  />
                </div>
                <PiArrowUpRightBold className="text-white h-8 w-8 hover:bg-black bg-orange-400 rounded-full absolute lg:right-18 lg:top-10 right-8 top-10" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* About us section */}
      <div className='pt-28 lg:flex-row items-center lg:gap-2 gap-30 justify-center flex flex-col'>
        <div className='flex justify-center lg:justify-start relative lg:w-1/2 w-full order-2 lg:order-1'>
          <img
            src="/icons/icon-15.png"
            className='absolute -top-1 lg:-top-2 left-16 md:left-47 lg:left-11 z-10 animate-[spin_30s_linear_infinite]'
          />
          <img
            src="/resource/about2-1.jpg"
            className='rounded-full z-20 relative max-w-[630px] h-auto'
          />
          <img
            src="/resource/about2-2.jpg"
            className='absolute z-30 top-87 lg:top-87 left-95 shadow-lg md:left-133 lg:left-95 h-56 w-56 rounded-full border-8 border-white'
          />
          <div className='absolute shadow-lg top-50 lg:top-50 md:left-20 -left-12 lg:-left-20 z-30 h-44 w-44 bg-[#6b43e3] flex items-center border-8 border-white justify-center rotate-45 rounded-bl-full p-8'>
            <p className='-rotate-45 text-sm text-center text-white ml-5'>
              <span className='text-5xl font-bold block'>19</span>
              Years of Experience
            </p>
          </div>
          <div className=" z-30 w-36 h-36 absolute -top-13 left-100 md:left-128 lg:-top-10 lg:left-85 rounded-full bg-orange-300 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_30s_linear_infinite]">
              <path id="circle" fill="none" />
              <text className="text-[14px] fill-white">
                <textPath href="#circle">EXPLORE MORE - EXPLORE MORE</textPath>
              </text>
            </svg>
            <div className="rounded-full relative z-10">
              <PiArrowUpRightBold className="h-8 w-8 text-white" />
            </div>
          </div>
          <img src="/icons/icon-16.png" alt="background1" className='absolute lg:-top-30 lg:left-30 rounded-full animate-[zoom-one_10s_infinite_linear]' />
          <img src="/icons/icon-17.png" alt="background2" className='absolute lg:top-0 lg:left-0 animate-[zoom-one_10s_infinite_linear]' />
        </div>
        <div className='pl-5 relative lg:w-xl w-full order-1 lg:order-2'>
          <img
            src="/icons/h44.png"
            className='absolute top-15 right-10 -z-10 -rotate-10 animate-[bounceX_10s_infinite_linear]'
          />
          <p className='relative m-2  text-[#736c87] font-semibold uppercase '>
            <span className="absolute top-2 -left-3 w-2.5 h-2.5 bg-current bg-linear-to-r from-[#a051e6] to-[#6b43e3] rounded-full"></span>
            About us</p>
          <p className="font-bold text-4xl text-black tracking-wide" ref={aboutRef}>
            {aboutUs.split(' ').map((word, index) => {
              const opacity = useTransform(
                aboutScrollProgress,
                [index * 0.1, (index + 1) * 0.1],
                [0.2, 1]
              );
              return (
                <motion.span key={index} style={{ opacity }} className="inline-block mr-2">
                  {word}
                </motion.span>
              );
            })}
          </p>
          <p className=' m-2  border-l-2 pl-4 border-orange-300'>{JsonData.about.description}</p>
          <div className=' m-2 grid grid-cols-2 bg-[#f0edfd] pt-7 pb-3.5 pr-2.5 pl-10 gap-3 border-8 border-white'>
            <p><FontAwesomeIcon icon={faCircleCheck} className='text-[#6b43e3]' />{JsonData.about.point1}</p>
            <p><FontAwesomeIcon icon={faCircleCheck} className='text-[#6b43e3]' />{JsonData.about.point2}</p>
            <p><FontAwesomeIcon icon={faCircleCheck} className='text-[#6b43e3]' />{JsonData.about.point3}</p>
            <p><FontAwesomeIcon icon={faCircleCheck} className='text-[#6b43e3]' />{JsonData.about.point4}</p>
          </div>
          <p className='m-2  font-bold'>Marketing</p>
          <div className='m-2  pb-5' ref={progressRef}>
            <span>{progress}%</span>
            <div className='w-full  rounded-full h-2'>
              <progress value={progress} max={100}
                className='w-full h-3 [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:bg-linear-to-r [&::-webkit-progress-value]:from-[#a051e6] [&::-webkit-progress-value]:to-[#6b43e3] [&::-webkit-progress-value]:rounded-full' />
            </div>
          </div>
          <div className='flex  gap-2'>
            <div className="flex gap-3 items-center group max-w-64">
              <button className="bg-linear-to-r from-[#a051e6f1] to-[#6b43e3] rounded-3xl p-5 font-bold text-white order-1 group-hover:order-2"
              >{JsonData.about.buttonText}</button>
              <FontAwesomeIcon icon={faArrowRight} className="p-5 bg-linear-to-r from-[#a051e6f1] to-[#6b43e3] text-white rounded-full order-2 group-hover:order-1" />
            </div>
            <Image
              src="/icons/sign.png"
              alt="sign"
              width={149}
              height={33}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
