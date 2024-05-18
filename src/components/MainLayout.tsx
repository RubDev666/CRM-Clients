'use client';

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";

export default function MainLayout({ children }: {children: React.ReactNode}) {
    const [openMenu, setOpenMenu] = useState(true);

    const location = usePathname();

    useEffect(() => {
        const navMobile = document.querySelector('.nav-mobile') as HTMLElement;

        if (openMenu) {
            navMobile.style.top = '64px';
        } else {
            navMobile.style.top = '-200px';
        }

    }, [openMenu])

    const handleNav = () => {
        if (openMenu) {
            setOpenMenu(false);
        } else {
            setOpenMenu(true);
        }
    }

    return (
        <div className='md:flex md:min-h-screen relative'>
            <aside className='flex items-center justify-between md:inline-block w-full md:w-1/4 bg-blue-900 px-7 py-5 md:py-10 fixed md:h-full z-10 shadow-md'>
                <h2 className='text-lg md:text-2xl xl:text-4xl font-black text-center text-white'>CRM - Clientes</h2>

                {!openMenu && (
                    <div className="max-[479px]:block hidden cursor-pointer">
                        <FontAwesomeIcon
                            icon={faBars}
                            style={{fontSize: 23}}
                            className="text-white hover:text-blue-300"
                            onClick={handleNav}
                        />
                    </div>
                )}

                {openMenu && (
                    <div className="max-[479px]:block hidden cursor-pointer">
                        <FontAwesomeIcon
                            icon={faTimes}
                            style={{ fontSize: 25}}
                            className="text-white hover:text-blue-300"
                            onClick={handleNav}
                        />
                    </div>
                )}

                {/*NAV MENU - MOBILE*/}
                <nav className="nav-mobile flex justify-center items-start gap-1 absolute  bg-blue-900 flex-col w-full left-0 p-6 min-[480px]:hidden shadow-[0px_7px_5px_1px_rgba(0,0,0,0.3)]">
                    <Link
                        className={`${location === '/' ? 'text-white' : 'text-blue-300'} md:text-xl xl:text-2xl block md:mt2 hover:text-white`}
                        href="/"
                    >
                        Clientes
                    </Link>
                    <Link
                        className={`${location === '/nuevo' ? 'text-white' : 'text-blue-300'} md:text-xl xl:text-2xl block md:mt-2 hover:text-white`}
                        href="/new-client"
                    >
                        Nuevo Cliente
                    </Link>
                </nav>

                <nav className="flex justify-between gap-4 md:inline-block md:mt-10 max-[479px]:hidden">
                    <Link
                        className={`${location === '/' ? 'text-white' : 'text-blue-300'} md:text-xl xl:text-2xl block md:mt2 hover:text-white `}
                        href="/"
                    >
                        Clientes
                    </Link>
                    <Link
                        className={`${location === '/nuevo' ? 'text-white' : 'text-blue-300'} md:text-xl xl:text-2xl block md:mt-2 hover:text-white`}
                        href="/new-client"
                    >
                        Nuevo Cliente
                    </Link>
                </nav>

                <footer className="absolute bottom-5 w-full text-center left-0 text-xs lg:text-sm hidden md:inline-block">
                    <p className="text-gray-300">Created by <span className="font-bold text-white">Rub</span><span className="text-white">Developer</span> © <span className="year">{new Date().getFullYear()}</span></p>
                </footer>
            </aside>

            <main className='md:w-3/4 pt-0 md:pt-6 p-6 w-full absolute md:right-0 z-0 top-20 md:top-0'>
                {children}

                <footer className="mt-10 mb-5 w-full text-center md:hidden text-sm">
                    <p className="text-gray-700">Created by <span className="font-bold text-gray-800">Rub</span><span className="">Developer</span> © <span className="year">{new Date().getFullYear()}</span></p>
                </footer>
            </main>

        </div>
    )
}
