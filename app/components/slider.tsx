'use client'
import sliderData from "../../public/jsondata/slider.json";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'swiper/css';
import Link from "next/link";
import { faAngleLeft, faAngleRight, faArrowRight, } from "@fortawesome/free-solid-svg-icons";

export default function Slider() {
    return (
        <div className='p-7'>
            <div className='bg-[url(/icons/pattern-3.jpg)] min-h-64 w-full rounded-3xl'>

                <Swiper
                    slidesPerView={1}
                    loop={true}
                    className='flex-1'
                >
                    {sliderData.bannerSlider.map((data) => (
                        <SwiperSlide key={data.id}>
                            <div className="flex">
                                <div className="pt-36 pb-52 pl-12">
                                    <p className="text-7xl text-white">{data.title1}</p>
                                    <p className="text-7xl text-white font-bold">{data.title2}</p>
                                    <p className="text-[16px] text-gray-300">{data.description}</p>
                                    <Link href={data.buttonLink}>
                                        <div className=" flex gap-3 items-center hover:">
                                            <button className="bg-gradient-to-r from-[#a051e6f1] to-[#6b43e3] rounded-3xl p-5 font-bold text-white"
                                            >{data.buttonText.toUpperCase()}</button>
                                            <FontAwesomeIcon icon={faArrowRight} className="p-5 bg-gradient-to-r from-[#a051e6f1] to-[#6b43e3] text-white rounded-full" />
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <img src={data.image} className="rounded-l-full w-full h-full" />
                                </div>
                            </div>
                            <div className="bg-[#E6E0FA] w-36 rounded-4xl h-[66px] flex flex-row items-center justify-center gap-3 m-5">
                                
                                <button><FontAwesomeIcon icon={faAngleLeft}  className="border border-white p-4 rounded-full text-[#6b43e3]"/></button>
                                <button><FontAwesomeIcon icon={faAngleRight} className="border border-white p-4 rounded-full text-[#6b43e3]"/></button>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='p-3'>
                <div className='bg-[#1B152C] rounded-3xl min-h-27 flex items-center p-9'>
                    <div className='text-gray-100 mr-8'>{sliderData.companySlider.title}</div>

                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={3}
                        loop={true}
                        className='flex-1'
                    >
                        {sliderData.companySlider.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image}
                                    alt={`Client ${index}`}
                                    className="h-12 w-auto object-contain"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>

    )
}
