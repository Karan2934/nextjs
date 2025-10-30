
'use client'
import sliderData from "../../public/jsondata/slider.json";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PiArrowUpRightBold } from 'react-icons/pi';

import 'swiper/css';
import Link from "next/link";
import { faAngleLeft, faAngleRight, faArrowRight, faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Slider() {
    return (
        <div className='p-7'>

            {/* Banner Slider */}
            <div className='bg-[url(/icons/pattern-3.jpg)] min-h-96 w-full rounded-3xl overflow-hidden'>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next'
                    }}
                    className='flex-1'
                >
                    {sliderData.bannerSlider.map((data) => (
                        <SwiperSlide key={data.id} className="relative overflow-hidden">
                            <div className="lg:flex">
                                <div className="pt-36 pl-12 pb-29">
                                    <p className="text-7xl text-white mb-6">{data.title1}</p>
                                    <p className="text-7xl text-white font-bold mb-7">{data.title2}</p>
                                    <p className="text-[16px] text-gray-300 mb-7">{data.description}</p>

                                    <Link href={data.buttonLink}>
                                        <div className="flex gap-3 items-center group max-w-64">
                                            <button className="bg-gradient-to-r from-[#a051e6f1] to-[#6b43e3] rounded-3xl p-5 font-bold text-white order-1 group-hover:order-2"
                                            >{data.buttonText.toUpperCase()}</button>
                                            <FontAwesomeIcon icon={faArrowRight} className="p-5 bg-gradient-to-r from-[#a051e6f1] to-[#6b43e3] text-white rounded-full order-2 group-hover:order-1" />
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    {/* image part */}
                                    <div className="flex relative">
                                        <img
                                            src="/icons/shape-24.png"
                                            className="hidden 2xl:block absolute lg:left-30"
                                        />
                                        <img
                                            src={data.image}
                                            className="block w-full lg:ml-60 -mt-19 lg:rounded-full h-auto"
                                        />
                                    </div>

                                    {/* the text spinner part */}
                                    <div className="lg:relative lg:w-[179px] lg:h-[179px] absolute bottom-40 right-40 lg:left-40 w-24 h-24 rounded-full border border-white/50 lg:bg-white/10 bg-[#a051e6f1] flex items-center justify-center">
                                        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_30s_linear_infinite]">

                                            <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                                            <text className="text-[12.5px] fill-white ">
                                                <textPath href="#circle">PLAY INTRO VIDEO - PLAY INTRO VIDEO</textPath>
                                            </text>
                                        </svg>
                                        <div className="border border-white rounded-full relative z-10">
                                            <FontAwesomeIcon icon={faPlay} className="text-white text-xl p-3 lg:p-8" />
                                        </div>
                                    </div>

                                    <img src="/icons/icon-31.png" className="absolute bottom-16 hidden lg:block animate-[bounceX_10s_linear_infinite]" />
                                    <img src="/icons/icon-30.png" className="absolute bottom-100 hidden 2xl:block animate-[bounce_10s_linear_infinite]" />

                                </div>

                                {/* btns for next or prev slide */}
                                <div className="absolute bottom-4 left-4 bg-[#E6E0FA] w-36 rounded-4xl h-[66px] flex items-center justify-center gap-3">
                                    <button className="swiper-button-prev"><FontAwesomeIcon icon={faAngleLeft} className="border border-white p-4 rounded-full text-[#6b43e3]" /></button>
                                    <button className="swiper-button-next"><FontAwesomeIcon icon={faAngleRight} className="border border-white p-4 rounded-full text-[#6b43e3]" /></button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>


            {/* Company Slider */}
            <div className='pt-3'>
                <div className='bg-[#1B152C] rounded-3xl min-h-27 lg:flex-row flex flex-col justify-center items-center p-9'>


                    {/* Doubt/problematic part */}
                    <div className='mr-8 pr-14 px-9'>
                        <div className="  lg:border-r border-white min-w-40 gap-5 flex">
                            <div className="lg:flex-col flex gap-1">
                                <p className="text-gray-100 font-bold ">Trusted By</p>
                                <p className="text-gray-100 font-bold ">Top Companies</p>
                            </div>
                            <PiArrowUpRightBold className="text-orange-500 lg:mt-8 lg:mr-2 " />
                        </div>
                    </div>


                    <div className="py-5 overflow-hidden">
                        <div className="flex gap-20 lg:gap-60 animate-[marquee_20s_linear_infinite]">

                            {/* Images original */}
                            {sliderData.companySlider.images.map((src, i) => (
                                <img
                                    key={i}
                                    src={src}

                                    className="h-16 w-auto object-contain flex-shrink-0"
                                />
                            ))}

                            {/* duplicate images */}
                            {sliderData.companySlider.images.map((src, i) => (
                                <img
                                    key={`dup-${i}`}
                                    src={src}
                                    className="h-16 w-auto object-contain flex-shrink-0"
                                />
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
