'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import footerLinks from './footerdata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faPaperPlane, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faYoutube, faPinterestP } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {

  const [footerData, setFooterData] = useState();

  useEffect(() => {
    const data = footerLinks();
    setFooterData(data);
  }, []);

  if (!footerData) return null;

  return (
    <div className='p-7'>
      <div className='bg-[url(/icons/pattern-7.png)] bg-[#1b152c] bg-cover bg-center bg-no-repeat min-h-100 rounded-3xl'>
        <div className='p-7 flex items-center justify-center'>
          <div className='rounded-4xl bg-[url(/icons/footer-bg.jpg)] w-full xl:max-w-4/5 bg-cover bg-center'>
            <div className='w-full bg-gradient-to-r from-[#a051e6a8] to-[#6b43e3] bg-center bg-no-repeat min-h-36 flex items-center justify-center rounded-3xl'>
              <div className='flex flex-col md:flex-row items-start gap-4'>
                <div className='flex items-center space-x-2 lg:space-x-2'>
                  <div className='border border-gray-400 rounded-full p-3 transition-all ease duration-300 hover:[transform:scaleX(-1)]'>
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className='text-[#6c43e3] h-5 w-5 bg-white p-3 rounded-full'
                    />
                  </div>

                  <div>
                    <p className='text-white'>office address</p>
                    <p className='text-white text-[20px] font-bold'>{footerData.header_section.location}</p>
                  </div>
                </div>
                <div className='flex items-center justify-center space-x-2 lg:space-x-3'>
                  <div className='border border-gray-400 rounded-full p-3 transition-all ease duration-300 hover:[transform:scaleX(-1)]'>
                    <FontAwesomeIcon icon={faEnvelope} className='text-[#6c43e3] h-5 w-5 bg-white p-3 rounded-full' />
                  </div>
                  <div>
                    <p className='text-white'>send email</p>
                    <p className='text-white text-[20px] hover:text-orange-500 delay-150'>{footerData.header_section.email}</p>
                  </div>
                </div>
                <div className='flex items-center justify-center space-x-2 lg:space-x-3'>
                  <div className='border border-gray-400 rounded-full p-3 transition-all ease duration-300 hover:[transform:scaleX(-1)]'>
                    
                      <FontAwesomeIcon icon={faPhone} className='text-[#6c43e3] h-5 w-5 bg-white p-3 rounded-full' />
                  
                  </div>
                  <div>
                    <p className='text-white'>call emergency</p>
                    <p className='text-white text-[20px] hover:text-orange-500'>{footerData.header_section.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='p-7 flex flex-col xl:ml-36 xl:mr-36 sm:grid sm:grid-cols-1 md:grid md:grid-cols-2 lg:flex lg:flex-row items-start gap-4'>
          <div className='w-full lg:flex-1 h-64'>
            <Image src="/logo-2.png" alt="Logo" width={80} height={30} className='mb-2.5' />
            <p className='text-white font-bold mb-2.5'>
              {footerData.section_one.description}
            </p>
            <div className='flex gap-5'>
              <FontAwesomeIcon icon={faFacebookF} className='h-11 w-11 text-white bg-[#0d0a16] p-3 rounded-full hover:bg-[#6c43e3] transition duration-500 ease-in' />
              <FontAwesomeIcon icon={faTwitter} className='h-11 w-11 text-white bg-[#0d0a16] p-3 rounded-full hover:bg-[#6c43e3] transition duration-500 ease-in' />
              <FontAwesomeIcon icon={faPinterestP} className='h-11 w-11 text-white bg-[#0d0a16] p-3 rounded-full hover:bg-[#6c43e3] transition duration-500 ease-in' />
              <FontAwesomeIcon icon={faYoutube} className='h-11 w-11 text-white bg-[#0d0a16] p-3 rounded-full hover:bg-[#6c43e3] transition duration-500 ease-in' />
            </div>
          </div>
          <div className='w-full lg:flex-1'>
            <p className='font-bold text-white text-2xl mb-1.5'>{footerData.section_two.title}</p>
            <div className='bg-gradient-to-r from-[#a051e6f1] to-[#6b43e3] w-5 h-0.5 mb-2.5'></div>
            <div className='text-[#9c94b3]'>
              {footerData.section_two.links.map((link, index) => (
                <p key={index} className='mb-1.5'>
                  <span className='hover:text-white transition-colors duration-300 ease cursor-pointer group relative inline-block'>
                    {link.title}
                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6b43e3] transition-all duration-300 ease-out group-hover:w-full'></span>
                  </span>
                </p>
              ))}
            </div>
          </div>
          <div className='w-full lg:flex-1'>
            <p className='font-bold text-white text-2xl mb-2.5'>{footerData.section_three.title}</p>
            <div className='bg-gradient-to-r from-[#a051e6f1] to-[#6b43e3] w-5 h-0.5 mb-2.5'></div>
            <div className='text-[#9c94b3]'>
              {footerData.section_three.links.map((link, index) => (

                <p key={index} className='mb-1.5'>
                  <span className='hover:text-white transition-colors duration-300 ease cursor-pointer group relative inline-block'>
                    {link.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6b43e3] transition-all duration-300 ease-out group-hover:w-full"></span>
                  </span>
                </p>
              ))}
            </div>
          </div>
          <div className='w-full lg:flex-1'>
            <p className='font-bold text-white mb-3.5 text-2xl'>Newsletter</p>
            <div className='bg-gradient-to-r from-[#a051e6f1] to-[#6b43e3] w-5 h-0.5 mb-2.5'></div>
            <div>
              <div className='relative mb-2.5'>
                <input
                  type='text'
                  placeholder='Email address'
                  className=' text-[#9c94b3] bg-[#0d0A16] w-full p-4 pr-12 rounded'
                  required
                />
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className='absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#6c43e3] cursor-pointer'
                />
              </div>

            </div>
            <div>
              <input
                type="checkbox"
                className=''
              />
              <label className='text-[#9c94b3] rounded-b-full'> agree to all your terms and politics </label>
            </div>
          </div>
        </div>
        <div className='bg-gradient-to-r from-[#a051e6f1] to-[#6b43e3] rounded-b-3xl'>
          <div className='flex xl:ml-36 xl:mr-36 flex-col lg:flex-row items-center justify-between'>
            <p className='text-white'>© Copyright 2025 by Company.com</p>
            <div className='flex flex-row gap-5 items-center'>
              <p className='text-white'>Terms & Conditions</p>
              <p className='text-white'>Privacy Policy</p>
              <button className='bg-[#ED8A33] text-white p-7 flex items-center gap-2 mr-8 hover:bg-[#6b43e3]'
              onClick={()=>window.scrollTo({top:0, behavior:'smooth'})}
              >
                Top <FontAwesomeIcon icon={faArrowUp} className='h-4 w-4' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}