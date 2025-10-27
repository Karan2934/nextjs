'use client'
import NavLinks from "./navLinks"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from "@fortawesome/free-solid-svg-icons"

export default function NavbarAfterScroll() {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const [openSubSubMenu, setOpenSubSubMenu] = useState(null);
    const [navData, setNavData] = useState([]);

    useEffect(() => {
        const data = NavLinks()
        setNavData(data)
    }, []);
    return (
        <div>
            <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
                <div className="flex justify-between items-center py-4 px-20 p">

                    <Image src="/logo.png" alt="dynamic" width={89} height={32} />

                    <div className="hidden lg:flex items-center space-x-10 text-[#1b152c80] ml-20 font-medium text-base">
                        {navData.map((navBar) => (
                            <div key={navBar.title} className="relative group flex items-center">
                                <Link href={navBar.slug} className="hover:text-[#6c43e3] mr-1" >{navBar.title.toUpperCase()}
                                </Link>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABaklEQVR4nO3aMWrDQBRF0VclhKcsMllJymwnVcoUnqzLwSA3Ng4yaPxn/r8HBC4Mku+TsQtJAAAAAAAAAAAAAAAAAAAAAACgojdJS/RFDGhZ23T1Ieko6VfSa++TTcSSftY2n73jnw9GuI5/7DXCZXxGuB1/9xHeb5zgfByK/iYs62f/r82pXdeVq34TvKFJ27MJIwTGv+fE2UdwVPx7LiDrCI6OX3kEjxK/4ggeLX6lETxq/AojePT4mUfwLPEzjuDZ4mcawbPGzzCCZ48/8wjOEn/GEZwt/kwjOGv8GUZw9vgjj+Aq8UccwdXijzSCq8YfYQRXjx85gokfN4KJHzeCiR83gokfN4KJHzeCiR83gokfN4KJHzeCiR83gokf9/j3YeN7Kj4+vwtvuLu58wcdoRE/boRG/LgRGvHjRmjEjxuhEf9xlosRTq/5q/lgz5K+JH1Leom+mKqe1gMAAAAAAAAAAAAAoCt/zPyDj6AVJN0AAAAASUVORK5CYII=" alt="expand-arrow--v1"
                                    className="h-3 w-3 mt-1"></img>

                                {/* sub-nav */}
                                {navBar.child && (
                                    <div className="absolute top-full left-0 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-52 z-50">
                                        {navBar.child.map((subNav) => (
                                            <div key={subNav.title} className="relative group/sub p-2">
                                                <Link href={subNav.slug} className="py-3 px-6  hover:text-[#6c43e3] cursor-pointer">

                                                    {subNav.title.toUpperCase()}
                                                    {subNav.child && (
                                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABaklEQVR4nO3aMWrDQBRF0VclhKcsMllJymwnVcoUnqzLwSA3Ng4yaPxn/r8HBC4Mku+TsQtJAAAAAAAAAAAAAAAAAAAAAACgojdJS/RFDGhZ23T1Ieko6VfSa++TTcSSftY2n73jnw9GuI5/7DXCZXxGuB1/9xHeb5zgfByK/iYs62f/r82pXdeVq34TvKFJ27MJIwTGv+fE2UdwVPx7LiDrCI6OX3kEjxK/4ggeLX6lETxq/AojePT4mUfwLPEzjuDZ4mcawbPGzzCCZ48/8wjOEn/GEZwt/kwjOGv8GUZw9vgjj+Aq8UccwdXijzSCq8YfYQRXjx85gokfN4KJHzeCiR83gokfN4KJHzeCiR83gokfN4KJHzeCiR83gokf9/j3YeN7Kj4+vwtvuLu58wcdoRE/boRG/LgRGvHjRmjEjxuhEf9xlosRTq/5q/lgz5K+JH1Leom+mKqe1gMAAAAAAAAAAAAAoCt/zPyDj6AVJN0AAAAASUVORK5CYII=" alt="expand-arrow--v1"
                                                            className={`h-4 w-4 transition-transform duration-300`}
                                                        ></img>
                                                    )}

                                                </Link>

                                                {subNav.child && (
                                                    <div className="absolute left-full top-0 bg-white shadow-lg p-4 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 min-w-48">
                                                        {subNav.child.map((subSubNav) => (
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
                    <button
                        className="lg:hidden p-2 text-[#1b152c80] hover:text-[#6c43e3]"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>

                    </button>
                </div>
            </nav>

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
                            {navData.map((mainNav) => (
                                <div key={mainNav.title}>
                                    <div className="flex justify-between items-center border-t w-full">
                                        <p className="text-lg font-medium text-gray-800 p-2">{mainNav.title}</p>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABaklEQVR4nO3aMWrDQBRF0VclhKcsMllJymwnVcoUnqzLwSA3Ng4yaPxn/r8HBC4Mku+TsQtJAAAAAAAAAAAAAAAAAAAAAACgojdJS/RFDGhZ23T1Ieko6VfSa++TTcSSftY2n73jnw9GuI5/7DXCZXxGuB1/9xHeb5zgfByK/iYs62f/r82pXdeVq34TvKFJ27MJIwTGv+fE2UdwVPx7LiDrCI6OX3kEjxK/4ggeLX6lETxq/AojePT4mUfwLPEzjuDZ4mcawbPGzzCCZ48/8wjOEn/GEZwt/kwjOGv8GUZw9vgjj+Aq8UccwdXijzSCq8YfYQRXjx85gokfN4KJHzeCiR83gokfN4KJHzeCiR83gokfN4KJHzeCiR83gokf9/j3YeN7Kj4+vwtvuLu58wcdoRE/boRG/LgRGvHjRmjEjxuhEf9xlosRTq/5q/lgz5K+JH1Leom+mKqe1gMAAAAAAAAAAAAAoCt/zPyDj6AVJN0AAAAASUVORK5CYII=" alt="expand-arrow--v1"
                                            className={`h-4 w-4 transition-transform duration-300 mr-2 ${openSubMenu === mainNav.title ? 'rotate-180' : 'rotate-0'}`}
                                            onClick={() => setOpenSubMenu(openSubMenu === mainNav.title ? null : mainNav.title)}
                                        ></img>
                                    </div>
                                    {openSubMenu === mainNav.title
                                        && (
                                            <div>
                                                {mainNav.child.map((subNav) => (
                                                    <div>
                                                        <div key={subNav.title} className="flex justify-between items-center border-t w-full">
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
                                                                    {subNav.child.map((subSubNav) => (
                                                                        <div key={subSubNav.title} className="flex justify-between items-center border-t w-full">
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
                        <div className="p-6 border-t">
                            <div className="mb-4">
                                <div className="text-sm text-gray-600">CALL NOW</div>
                                <div className="font-medium">+92 (8800) - 98670</div>
                            </div>
                            <div className="mb-4">
                                <div className="text-sm text-gray-600">SEND EMAIL</div>
                                <div className="font-medium">help@company.com</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-600">ADDRESS</div>
                                <div className="font-medium">66 Broklyant, New York India 3269</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}