'use client'
import Image from "next/image"
import { useState, useEffect } from "react"
import NavLinks from "./navLinks"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPhone, faArrowRight} from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faInstagram, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons"
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const [openSubSubMenu, setOpenSubSubMenu] = useState(null);
    const [navData, setNavData] = useState<any>([]);
    useEffect(() => {
        const data = NavLinks()
        setNavData(data)
    }, []);

    return (
        <div>
            <div className="p-7">
                <div className="bg-white shadow-lg w-full rounded-3xl flex items-center justify-between max-h-26">
                    <div className="max-w-60 bg-[#1b152c] w-full p-9 rounded-3xl custom-clip">
                        <Image
                            src="/logo-2.png"
                            alt="Dynamic Image"
                            width={113}
                            height={40}
                            className="ml-7"
                        />
                    </div>

                    <div className="hidden lg:flex items-center space-x-10 text-[#1b152c80] ml-20 font-medium text-base">
                        {navData.map((navBar:any) => (
                            <div key={navBar.title} className="relative group flex items-center">
                                <Link href={navBar.slug} className="hover:text-[#6c43e3] mr-1" >{navBar.title.toUpperCase()}
                                </Link>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABaklEQVR4nO3aMWrDQBRF0VclhKcsMllJymwnVcoUnqzLwSA3Ng4yaPxn/r8HBC4Mku+TsQtJAAAAAAAAAAAAAAAAAAAAAACgojdJS/RFDGhZ23T1Ieko6VfSa++TTcSSftY2n73jnw9GuI5/7DXCZXxGuB1/9xHeb5zgfByK/iYs62f/r82pXdeVq34TvKFJ27MJIwTGv+fE2UdwVPx7LiDrCI6OX3kEjxK/4ggeLX6lETxq/AojePT4mUfwLPEzjuDZ4mcawbPGzzCCZ48/8wjOEn/GEZwt/kwjOGv8GUZw9vgjj+Aq8UccwdXijzSCq8YfYQRXjx85gokfN4KJHzeCiR83gokfN4KJHzeCiR83gokfN4KJHzeCiR83gokf9/j3YeN7Kj4+vwtvuLu58wcdoRE/boRG/LgRGvHjRmjEjxuhEf9xlosRTq/5q/lgz5K+JH1Leom+mKqe1gMAAAAAAAAAAAAAoCt/zPyDj6AVJN0AAAAASUVORK5CYII=" alt="expand-arrow--v1"
                                    className="h-3 w-3 mt-1"></img>

                                {/* sub-nav */}
                                {navBar.child && (
                                    <div className="absolute top-full left-0 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-52 z-50">
                                        {navBar.child.map((subNav:any) => (
                                            <div key={subNav.title} className="relative group/sub p-2 border-t border-gray-200">
                                                <Link href={subNav.slug} className="py-1 px-6  hover:text-[#6c43e3] cursor-pointer flex items-center">

                                                    {subNav.title.toUpperCase()}
                                                    {subNav.child && (
                                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABaklEQVR4nO3aMWrDQBRF0VclhKcsMllJymwnVcoUnqzLwSA3Ng4yaPxn/r8HBC4Mku+TsQtJAAAAAAAAAAAAAAAAAAAAAACgojdJS/RFDGhZ23T1Ieko6VfSa++TTcSSftY2n73jnw9GuI5/7DXCZXxGuB1/9xHeb5zgfByK/iYs62f/r82pXdeVq34TvKFJ27MJIwTGv+fE2UdwVPx7LiDrCI6OX3kEjxK/4ggeLX6lETxq/AojePT4mUfwLPEzjuDZ4mcawbPGzzCCZ48/8wjOEn/GEZwt/kwjOGv8GUZw9vgjj+Aq8UccwdXijzSCq8YfYQRXjx85gokfN4KJHzeCiR83gokfN4KJHzeCiR83gokfN4KJHzeCiR83gokf9/j3YeN7Kj4+vwtvuLu58wcdoRE/boRG/LgRGvHjRmjEjxuhEf9xlosRTq/5q/lgz5K+JH1Leom+mKqe1gMAAAAAAAAAAAAAoCt/zPyDj6AVJN0AAAAASUVORK5CYII=" alt="expand-arrow--v1"
                                                            className={`h-4 w-4 transition-transform duration-300 rotate-270 text-gray-200`}
                                                        ></img>
                                                    )}

                                                </Link>

                                                {subNav.child && (
                                                    <div className="absolute left-full top-0 bg-white shadow-lg p-4 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 min-w-48 border-t">
                                                        {subNav.child.map((subSubNav:any) => (
                                                            <Link key={subSubNav.title} href={subSubNav.slug} className="block py-2 px-4 hover:text-[#6c43e3] cursor-pointer">
                                                                {subSubNav.title}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex ml-auto">
                        <div className="flex items-center space-x-4 p-5">
                            <div className="hidden 2xl:block "><p><FontAwesomeIcon icon={faPhone} className="text-[#6c43e3]" /><span className="text-[#2B2B5E] hover:text-[#6c43e3] font-bold text-[20px] transition-colors duration-300 ease">+92 526 420 009</span></p></div>
                            <h1 className="hidden lg:block text-[#1b152c80] scale-x-75 scale-y-250 ">|</h1>

                            {/* This code is for search icon (online code)*/}
                            <button>
                                <svg className="h-6 w-6 fill-black hover:fill-[#6c43e3]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                                    height="30" viewBox="0 0 30 30">
                                    <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971  23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                                    </path>
                                </svg>
                            </button>
                            {/* This code is for user icon */}
                            <svg className="h-7 w-7 hover:text-[#6c43e3]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>

                            <button
                                className="lg:hidden p-2 text-white bg-gradient-to-r from-[#a051e6f1] to-[#6b43e3] rounded"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                            </button>
                        </div>

                        <div className="hidden xl:block max-w-70 bg-[#1b152c] h-26 p-10 rounded-r-3xl">
                            <Link href="/" className="text-white font-bold text-xl">CONTACT NOW <FontAwesomeIcon icon={faArrowRight} className="text-indigo-600 text-[18px]"/> </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed inset-0 pointer-events-none">
                <div
                    className={`fixed inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-75 pointer-events-auto' : 'opacity-0'}`}
                    onClick={() => setIsOpen(false)}
                >

                </div>
                <div className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 pointer-events-auto ease-in-out overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between p-6">
                            <Image src="/logo.png" alt="Logo" width={80} height={30} />
                            <FontAwesomeIcon onClick={() => setIsOpen(false)} icon={faClose} className="p-1 bg-gray-200 hover:bg-gray-100 hover:text-gray-400 transition-colors duration-300 ease" />
                        </div>
                        <div className="">
                            {navData.map((mainNav:any) => (
                                <div key={mainNav.title}>
                                    <div className="flex justify-between items-center border-t border-gray-200">
                                        <p className="text-lg font-medium text-gray-800 p-2">{mainNav.title}</p>
                                        <div className="flex items-center">
                                            <span className="border-l p-2 border-gray-300"></span>
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABaklEQVR4nO3aMWrDQBRF0VclhKcsMllJymwnVcoUnqzLwSA3Ng4yaPxn/r8HBC4Mku+TsQtJAAAAAAAAAAAAAAAAAAAAAACgojdJS/RFDGhZ23T1Ieko6VfSa++TTcSSftY2n73jnw9GuI5/7DXCZXxGuB1/9xHeb5zgfByK/iYs62f/r82pXdeVq34TvKFJ27MJIwTGv+fE2UdwVPx7LiDrCI6OX3kEjxK/4ggeLX6lETxq/AojePT4mUfwLPEzjuDZ4mcawbPGzzCCZ48/8wjOEn/GEZwt/kwjOGv8GUZw9vgjj+Aq8UccwdXijzSCq8YfYQRXjx85gokfN4KJHzeCiR83gokfN4KJHzeCiR83gokfN4KJHzeCiR83gokf9/j3YeN7Kj4+vwtvuLu58wcdoRE/boRG/LgRGvHjRmjEjxuhEf9xlosRTq/5q/lgz5K+JH1Leom+mKqe1gMAAAAAAAAAAAAAoCt/zPyDj6AVJN0AAAAASUVORK5CYII=" alt="expand-arrow--v1"
                                                className={`h-4 w-4 transition-transform duration-300 mr-2 ${openSubMenu === mainNav.title ? 'rotate-180' : 'rotate-0'}`}
                                                onClick={() => setOpenSubMenu(openSubMenu === mainNav.title ? null : mainNav.title)}
                                            ></img>
                                        </div>
                                    </div>
                                    {openSubMenu === mainNav.title
                                        && (
                                            <div>
                                                {mainNav.child.map((subNav:any) => (
                                                    <div key={subNav.title}>
                                                        <div className="flex justify-between items-center border-t  border-gray-200">
                                                            <p className="text-md font-medium text-gray-600 p-2">{subNav.title}</p>
                                                            {subNav.child && (
                                                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABaklEQVR4nO3aMWrDQBRF0VclhKcsMllJymwnVcoUnqzLwSA3Ng4yaPxn/r8HBC4Mku+TsQtJAAAAAAAAAAAAAAAAAAAAAACgojdJS/RFDGhZ23T1Ieko6VfSa++TTcSSftY2n73jnw9GuI5/7DXCZXxGuB1/9xHeb5zgfByK/iYs62f/r82pXdeVq34TvKFJ27MJIwTGv+fE2UdwVPx7LiDrCI6OX3kEjxK/4ggeLX6lETxq/AojePT4mUfwLPEzjuDZ4mcawbPGzzCCZ48/8wjOEn/GEZwt/kwjOGv8GUZw9vgjj+Aq8UccwdXijzSCq8YfYQRXjx85gokfN4KJHzeCiR83gokfN4KJHzeCiR83gokfN4KJHzeCiR83gokf9/j3YeN7Kj4+vwtvuLu58wcdoRE/boRG/LgRGvHjRmjEjxuhEf9xlosRTq/5q/lgz5K+JH1Leom+mKqe1gMAAAAAAAAAAAAAoCt/zPyDj6AVJN0AAAAASUVORK5CYII=" alt="expand-arrow--v1"
                                                                    className={`h-4 w-4 transition-transform duration-300 mr-2 ${openSubSubMenu === subNav.title ? 'rotate-180' : 'rotate-0'}`}
                                                                    onClick={() => setOpenSubSubMenu(openSubSubMenu === subNav.title ? null : subNav.title)}
                                                                ></img>
                                                            )}
                                                        </div>
                                                        {openSubSubMenu === subNav.title
                                                            && (
                                                                <div>
                                                                    {subNav.child.map((subSubNav:any) => (
                                                                        <div key={subSubNav.title} className="flex justify-between items-center border-t border-gray-200">
                                                                            <p className="text-sm font-medium text-gray-600 p-2">{subSubNav.title}</p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                </div>
                            ))}
                        </div>
                        <div className=" border-t border-gray-200 flex-col flex justify-between h-full">
                            <div className="p-6">
                                <div className="mb-4 flex items-center">
                                    <Image
                                        src="/phone.svg"
                                        height={25}
                                        width={25}
                                        alt="phone"
                                    />
                                    <div className="pl-2">
                                        <div className="text-sm text-gray-600">CALL NOW</div>
                                        <div className="font-medium">+92 (8800) - 98670</div>
                                    </div>
                                </div>
                                <div className="mb-4 flex items-center">
                                    <Image
                                        src="/email.svg"
                                        height={25}
                                        width={25}
                                        alt="email"
                                    />
                                    <div className="pl-2">
                                        <div className="text-sm text-gray-600">SEND EMAIL</div>
                                        <div className="font-medium">help@company.com</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Image
                                        src="/location.svg"
                                        height={25}
                                        width={25}
                                        alt="location"
                                    />
                                    <div className="pl-2">
                                        <div className="text-sm text-gray-600">ADDRESS</div>
                                        <div className="font-medium">66 Broklyant, New York India 3269</div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 flex justify-center space-x-4">
                                <FontAwesomeIcon icon={faTwitter} className="border-r p-5 border-gray-200 hover:text-amber-600 transition-colors duration-300 ease" />
                                <FontAwesomeIcon icon={faFacebookF} className="border-r p-5 border-gray-200 hover:text-amber-600 transition-colors duration-300 ease" />
                                <FontAwesomeIcon icon={faPinterest} className="border-r p-5 border-gray-200 hover:text-amber-600 transition-colors duration-300 ease" />
                                <FontAwesomeIcon icon={faInstagram} className="p-5 hover:text-amber-600 transition-colors duration-300 ease" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
