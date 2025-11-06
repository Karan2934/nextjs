'use client'
import { useRef, useState } from 'react';
import data from '../../public/jsondata/lastsection.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faComment, faStar } from "@fortawesome/free-solid-svg-icons";
import 'swiper/css'


export default function lastsection() {

    const testimonialText = data.Testimonials.subheader;
    const blogsText = data.blogs.subTitle;
    const testimonialRef = useRef(null);
    const blogsRef = useRef(null);
    const { scrollYProgress: testimonialScrollProgress } = useScroll({
        target: testimonialRef,
        offset: ["start 0.6", "end 0.3"]
    });

    const { scrollYProgress: blogsScrollProgress } = useScroll({
        target: blogsRef,
        offset: ["start 0.6", "end 0.3"]
    })
    return (
        <div className=''>
            <div className='relative'>
                <img
                    src="/icons/Testimonial.jpg"
                    className='absolute w-full h-full'
                />
                <div className='relative'>
                    <div className='relative pt-16 pb-16 pl-16 flex'>
                        <div className='w-1/2 pl-45'>
                            <p className='text-[16px] relative ml-4 text-[#736c87] font-semibold uppercase'>
                                <span className="absolute top-2 -left-4 w-2.5 h-2.5 bg-linear-to-r from-[#a051e6] to-[#6b43e3] rounded-full"></span>
                                {data.Testimonials.header}
                            </p>
                            <p className="font-bold text-5xl text-black tracking-wide mb-5" ref={testimonialRef}>
                                {testimonialText.split(' ').map((word, index) => {
                                    const opacity = useTransform(
                                        testimonialScrollProgress,
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
                            <p className='text-[#736c87] text-[16px] mb-5 pr-3'>{data.Testimonials.description}</p>
                            <div className="bg-white w-36 rounded-4xl h-[66px] flex items-center justify-center gap-3">
                                <button className="swiper-button-prev">
                                    <FontAwesomeIcon icon={faAngleLeft} className="border h-12 w-12 border-[#6b43e3] p-4 rounded-full text-[#6b43e3]" />
                                </button>
                                <button className="swiper-button-next">
                                    <FontAwesomeIcon icon={faAngleRight} className="border h-12 w-12 border-[#6b43e3] p-4 rounded-full text-[#6b43e3]" />
                                </button>
                            </div>
                            <img src={data.Testimonials.image1} className='absolute bottom-5 left-1/3 animate-[bounceX_15s_linear_infinite]' />
                        </div>
                        <div className='flex justify-between w-1/2'>
                            <Swiper
                                modules={[Navigation]}
                                slidesPerView={1.3}
                                spaceBetween={50}
                                loop={true}
                                navigation={{
                                    prevEl: '.swiper-button-prev',
                                    nextEl: '.swiper-button-next'
                                }}
                            >
                                {[...data.Testimonials.users, ...data.Testimonials.users].map((user, index) => (
                                    <SwiperSlide key={index}>
                                        <div className='rounded-3xl rounded-br-[100px] w-[570px] border-2 border-amber-500'>
                                            <div className='relative flex flex-col gap-4 px-8 pb-5 rounded-3xl rounded-br-[100px] overflow-hidden'>
                                                <div className='absolute inset-0 w-1/2 bg-white rounded-l-3xl'></div>
                                                <div className='absolute inset-0 left-1/2 w-1/2 rounded-r-3xl rounded-br-[100px]'>
                                                    <img src={data.Testimonials.image3} className='w-full h-full object-cover rounded-r-3xl rounded-br-[100px]' />
                                                </div>
                                                <div className='relative z-10'>
                                                    <div className='flex justify-between'>
                                                        <div className='bg-linear-to-r from-[#a051e6] to-[#6b43e3]   flex justify-center p-2 rounded-b-full pt-6'>
                                                            <img src={user.image} className='rounded-full h-13 w-13' />
                                                        </div>
                                                        <div>
                                                            <img src={data.Testimonials.image2} alt="quote" className='pt-6' />
                                                        </div>
                                                    </div>
                                                    <p className='text-[20px] mb-7'>"{user.comment}"</p>
                                                    <div className='flex justify-between items-center'>
                                                        <div>
                                                            <p className='text-[#6c43e3] font-bold text-md'>{user.name}</p>
                                                            <p className='text-[#736c87] text-sm'>{user.position}</p>
                                                        </div>
                                                        <div className='flex'>
                                                            {Array.from({ length: 5 }, (_, i) => (
                                                                <FontAwesomeIcon icon={faStar} key={i} className={`${i < user.rating ? 'text-[#ed8a33]' : 'text-gray-300'}`} />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className='flex bg-linear-to-r from-[#a051e6] to-[#6b43e3] relative py-10 overflow-hidden'>
                        <div className='animate-[marquee_35s_linear_infinite] flex gap-40'>
                            {[...data.texts, ...data.texts].map((text, index) => (
                                <p key={index} className='text-4xl whitespace-nowrap font-bold text-white'>*{text}</p>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center'>
                        <p className='text-[16px] relative ml-4 text-[#736c87] font-semibold uppercase'>
                            <span className="absolute top-2 -left-4 w-2.5 h-2.5 bg-linear-to-r from-[#a051e6] to-[#6b43e3] rounded-full"></span>
                            {data.blogs.title}
                        </p>
                        <p className="font-bold text-5xl text-black tracking-wide mb-5" ref={blogsRef}>
                            {blogsText.split(' ').map((word, index) => {
                                const opacity = useTransform(
                                    blogsScrollProgress,
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
                        <div className='flex gap-4 pb-10'>
                            {data.blogs.posts.map((blogs, index) => (
                                <div key={index} className=' group'>
                                    <div className='pl-6 group-hover:bg-white rounded-t-4xl'>
                                        <div className='overflow-hidden  rounded-t-4xl'>
                                            <img src={blogs.image} className='group-hover:scale-110 rounded-t-3xl transition-transform duration-300' />
                                        </div>
                                    </div>
                                    <div className='bg-white relative w-91 rounded-l-3xl group-hover:rounded-tl-none pl-10 pr-2.5'>
                                        <div className=''>
                                            <p className='border-b pb-2.5 mb-8'>
                                                <FontAwesomeIcon icon={faComment} className='text-purple-400 ' />
                                                {blogs.comments}comment
                                            </p>    
                                            <div className='absolute -top-13 right-2 text-center bg-white p-3 px-5 rounded-tl-[40px] group-hover:bg-linear-to-r from-[#a051e6] to-[#6b43e3]'>
                                                <p className='text-3xl font-bold group-hover:text-white'>{blogs.date.split(' ')[0]}</p>
                                                <p className='text-2xl group-hover:text-white'>{blogs.date.split(' ')[1]}</p>
                                            </div>
                                        </div>
                                        <p className='text-2xl font-bold mb-4'>{blogs.title}</p>
                                        <p className='mb-2.5 pr-2.5'>{blogs.description}</p>

                                        <p className='pb-4'>Read More</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
