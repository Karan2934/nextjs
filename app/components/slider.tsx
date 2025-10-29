'use client'
import sliderData from "../../public/jsondata/slider.json";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'swiper/css';
import Link from "next/link";
import { faAngleLeft, faAngleRight, faArrowRight, } from "@fortawesome/free-solid-svg-icons";

export default function Slider() {
    return (
        <div className='p-7'>
            <div className='bg-[url(/icons/pattern-3.jpg)] min-h-64 w-full rounded-3xl overflow-hidden'>

                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next'
                    }}
                    className='flex-1 overflow-hidden'
                >
                    {sliderData.bannerSlider.map((data) => (
                        <SwiperSlide key={data.id} className="overflow-hidden">
                            <div className="lg:flex overflow-hidden">
                                <div className="pt-36 pb-52 pl-12">
                                    <p className="text-7xl text-white mb-6">{data.title1}</p>
                                    <p className="text-7xl text-white font-bold mb-7">{data.title2}</p>
                                    <p className="text-[16px] text-gray-300 mb-7">{data.description}</p>
                                    <Link href={data.buttonLink}>
                                        <div className=" flex gap-3 items-center hover:">
                                            <button className="bg-gradient-to-r from-[#a051e6f1] to-[#6b43e3] rounded-3xl p-5 font-bold text-white"
                                            >{data.buttonText.toUpperCase()}</button>
                                            <FontAwesomeIcon icon={faArrowRight} className="p-5 bg-gradient-to-r from-[#a051e6f1] to-[#6b43e3] text-white rounded-full" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="relative">

                                    <div className="">
                                        <img
                                            src={data.image}
                                            alt="AI Marketing"
                                            className="block w-full lg:ml-60 -mt-19 lg:rounded-full h-auto max-w-full"
                                        />

                                        <svg
                                            viewBox="0 0 100 100"
                                            className="relative w-[179px] h-[179px] rounded-full border border-white/50 bg-white/10 animate-spin-slow text-current origin-center"
                                        >
                                        </svg>

                                    </div>

                                    <div className="lg:hidden absolute bottom-4 left-4 bg-[#E6E0FA] w-36 rounded-4xl h-[66px] flex flex-row items-center justify-center gap-3">
                                        <button className="swiper-button-prev"><FontAwesomeIcon icon={faAngleLeft} className="border border-white p-4 rounded-full text-[#6b43e3]" /></button>
                                        <button className="swiper-button-next"><FontAwesomeIcon icon={faAngleRight} className="border border-white p-4 rounded-full text-[#6b43e3]" /></button>
                                    </div>

                                </div>

                            </div>
                            <div className="hidden lg:flex bg-[#E6E0FA] w-36 rounded-4xl h-[66px] flex-row items-center justify-center gap-3 m-5">
                                <button className="swiper-button-prev"><FontAwesomeIcon icon={faAngleLeft} className="border border-white p-4 rounded-full text-[#6b43e3]" /></button>
                                <button className="swiper-button-next"><FontAwesomeIcon icon={faAngleRight} className="border border-white p-4 rounded-full text-[#6b43e3]" /></button>
                            </div>

                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
            <div className='pt-3'>
                <div className='bg-[#1B152C] rounded-3xl min-h-27 lg:flex-row flex flex-col justify-center items-center p-9'>
                    <div className='mr-8 pr-14 w-48 lg:w-auto'>
                        <div className="text-gray-100 font-bold lg:flex-col flex">
                            <div className="whitespace-nowrap">Trusted By</div>
                            <div className="whitespace-nowrap">Top Companies</div>
                        </div>
                    </div>


                    <section className="py-5 overflow-hidden">
                        <div className="flex animate-marquee gap-20 lg:gap-60">
                            {/* ---- Original list ---- */}
                            {sliderData.companySlider.images.map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    alt={`Client ${i + 1}`}
                                    className="h-16 w-auto object-contain flex-shrink-0"
                                />
                            ))}

                            {/* ---- Duplicate for seamless loop ---- */}
                            {sliderData.companySlider.images.map((src, i) => (
                                <img
                                    key={`dup-${i}`}
                                    src={src}
                                    alt={`Client ${i + 1}`}
                                    className="h-16 w-auto object-contain flex-shrink-0"
                                />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>

    )
}
