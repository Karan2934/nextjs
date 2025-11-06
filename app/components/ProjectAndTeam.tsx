'use client'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import data from '../../public/jsondata/ProjectAndTeam.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faMinus, faPlus, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import 'swiper/css'
import { faFacebookF, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';

export default function ProjectAndTeam() {

    const projectText = data.projects.description;
    const teamText = data.team.description;
    const faqText = data.faq.description;
    const projectRef = useRef(null);
    const teamRef = useRef(null);
    const faqRef = useRef(null);
    const [openAnswer, setOpenAnswer] = useState(0);

    const { scrollYProgress: projectScrollProgress } = useScroll({
        target: projectRef,
        offset: ["start 0.6", "end 0.1"]  // Start at 40% viewport, end at 70%
    })

    const { scrollYProgress: teamScrollProgress } = useScroll({
        target: teamRef,
        offset: ["start 0.6", "end 0.3"]  //its same as above
    })

    const { scrollYProgress: faqScrollProgress } = useScroll({
        target: faqRef,
        offset: ["start 0.6", "end 0.3"]
    })

    return (
        <div className='pt-20'>
            {/* project section */}
            <div className='relative pb-20'>
                <img
                    src="/icons/pattern-9.jpg"
                    alt="background pattern"
                    className='absolute inset-0 w-full object-cover'
                />
                <div className=''>
                    <div className='relative p-20'>
                        <p className='text-[16px] relative ml-4 text-[#736c87] font-semibold uppercase'>
                            <span className="absolute top-2 -left-4 w-2.5 h-2.5 bg-linear-to-r from-[#a051e6] to-[#6b43e3] rounded-full"></span>
                            {data.projects.title}
                        </p>
                        <div className='flex justify-between w-full'>
                            <p className="font-bold text-5xl text-white tracking-wide" ref={projectRef}>
                                {projectText.split(' ').map((word, index) => {
                                    const opacity = useTransform(
                                        projectScrollProgress,
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

                            <div className="bg-[#1b152c] w-36 rounded-4xl h-[66px] flex items-center justify-center gap-3">
                                <button className="swiper-button-prev">
                                    <FontAwesomeIcon icon={faAngleLeft} className="border h-12 w-12 border-[#6b43e3] p-4 rounded-full text-[#6b43e3]" />
                                </button>
                                <button className="swiper-button-next">
                                    <FontAwesomeIcon icon={faAngleRight} className="border h-12 w-12 border-[#6b43e3] p-4 rounded-full text-[#6b43e3]" />
                                </button>
                            </div>

                        </div>

                    </div>
                    <div>
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={4}
                            spaceBetween={20}
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 4 }
                            }}
                            loop={true}
                            navigation={{
                                prevEl: '.swiper-button-prev',
                                nextEl: '.swiper-button-next'
                            }}
                        >
                            {[...data.projects.images, ...data.projects.images].map((image, index) => (
                                <SwiperSlide key={index} >
                                    <div className='overflow-hidden relative rounded-4xl group'>
                                        <img
                                            src={image.image}
                                            className='relative group-hover:scale-110 transition-transform duration-300 '
                                        />
                                        <div className='absolute bottom-0 w-full bg-orange-400 p-5 scale-x-0 rounded-tr-full group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out'>
                                            <p className='text-white text-xl font-bold'>{image.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className='pb-30 relative'>
                <img
                    src="/icons/pattern-10.jpg"
                    className='absolute'
                />

                <div className='flex pt-30 flex-col justify-center relative items-center'>

                    <p className='text-[16px] relative ml-4 text-[#736c87] font-semibold uppercase'>
                        <span className="absolute top-2 -left-4 w-2.5 h-2.5 bg-linear-to-r from-[#a051e6] to-[#6b43e3] rounded-full"></span>
                        {data.team.title}
                    </p>
                    <p className="font-bold text-5xl text-black tracking-wide" ref={teamRef}>
                        {teamText.split(' ').map((word, index) => {
                            const opacity = useTransform(
                                teamScrollProgress,
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

                    <div className='flex gap-4'>
                        {data.team.people.map((person, index) => (

                            <div key={index} className='flex justify-center '>
                                <div
                                    className='border-4 relative overflow-hidden border-[#6b43e3] group rounded-r-[95px] rounded-b-[130px] hover:bg-gradient-to-r hover:from-[#a051e6] hover:to-[#6b43e3] transition-colors ease-out duration-500'

                                >

                                    <div className='rounded-b-full overflow-hidden'>
                                        <img
                                            src={person.image}
                                            className='group-hover:scale-110 transition-transform duration-300'
                                        />
                                    </div>
                                    <div className='p-8'>
                                        <p className='text-center font-bold text-xl group-hover:text-white transition-colors duration-300 hover:text-orange-400'>{person.name}</p>
                                        <p className='text-center text-[#736c87] group-hover:text-white transition-colors duration-300'>{person.position}</p>
                                    </div>



                                </div>
                                <div className='group absolute -bottom-6'>
                                    <FontAwesomeIcon icon={faShareNodes} className=' bg-gradient-to-r text-xl p-5 rounded-full text-white from-[#a051e6] to-[#6b43e3]' />
                                    <div className='absolute bottom-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col gap-2'>
                                        <FontAwesomeIcon icon={faInstagram} className='bg-white rounded-full p-3 text-black' />
                                        <FontAwesomeIcon icon={faFacebookF} className='bg-white rounded-full p-3 text-black' />
                                        <FontAwesomeIcon icon={faTwitter} className='bg-white rounded-full p-3 text-black' />
                                        <FontAwesomeIcon icon={faPinterestP} className='bg-white rounded-full p-3 text-black' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* faq section */}
            <div className='relative overflow-hidden'>

                <Image
                    src="/icons/shape-17.png"
                    alt="faq section"
                    width={1200}
                    height={600}
                    className=' ml-25 absolute w-full'
                />

                <div className='flex items-center justify-center pl-50 relative'>
                    <div className='w-1/2'>
                        <p className='text-[16px] relative ml-4 text-[#736c87] font-semibold uppercase'>
                            <span className="absolute top-2 -left-4 w-2.5 h-2.5 bg-linear-to-r from-[#a051e6] to-[#6b43e3] rounded-full"></span>
                            {data.projects.title}
                        </p>
                        <p className="font-bold text-5xl text-black tracking-wide" ref={faqRef}>
                            {faqText.split(' ').map((word, index) => {
                                const opacity = useTransform(
                                    faqScrollProgress,
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
                        <div>
                            {data.faq.questions.map((question, index) => (
                                <div key={index} className="py-4">
                                    <div className='bg-[#f0edfd] p-5 rounded-4xl'>
                                        <button
                                            onClick={() => setOpenAnswer(openAnswer === index ? -1 : index)}
                                            className="flex items-center gap-5 w-full text-left"
                                        >

                                            {openAnswer === index ?
                                                <FontAwesomeIcon icon={faMinus}
                                                    className='bg-gradient-to-r from-[#a051e6] to-[#6b43e3] text-white rounded-full p-4'
                                                /> :
                                                <FontAwesomeIcon icon={faPlus}
                                                    className='bg-black text-white rounded-full p-4'
                                                />}

                                            <p className="font-bold text-md ">{question.question}</p>

                                        </button>
                                        {openAnswer === index && (
                                            <div className="mt-3 pl-5 transition-all duration-300">
                                                <p className="text-gray-600">{question.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='relative z-10'>

                        <img
                            src={data.faq.image}
                            className='w-full relative scale-80 animate-[bounceX_10s_infinite_linear] z-20'
                            alt='faq1-1'
                        />

                        <img
                            src={data.faq.image2}
                            className='absolute top-14 scale-75 right-8 animate-[bounceX_15s_infinite_linear]'
                            alt='icon-24'
                        />

                        <img
                            src={data.faq.image3}
                            className='absolute z-40 -bottom-15 -right-10 animate-[bounce_15s_infinite_linear]'

                        />
                        <img
                            src={data.faq.image4}
                            className='absolute top-50 right-10 animate-spin [animation-duration:5s] z-10'
                            alt='h4.6'
                        />

                        <img
                            src={data.faq.image5}
                            className='absolute bottom-16 left-8 animate-spin [animation-duration:7s]'
                            alt='icon-22'
                        />


                        <img
                            src={data.faq.image6}
                            className='absolute top-13 left-0 animate-[bounceX_10s_infinite_linear]'
                            alt='icon-21'
                        />


                        <img
                            src={data.faq.image7}
                            className='absolute bottom-8 right-0 animate-pulse'
                            alt='icon-25'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}