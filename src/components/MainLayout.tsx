'use client';

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";

export default function MainLayout({ children }: {children: React.ReactNode}) {
    const [openMenu, setOpenMenu] = useState(false);

    const location = usePathname();

    useEffect(() => {
        setOpenMenu(false);
    }, [location])

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
            <aside className='flex items-center justify-between md:inline-block w-full md:w-1/4 bg-primary md:border-r border-gray-600 px-7 py-5 md:py-10 fixed md:h-full z-10 shadow-md'>
                <h2 className='text-lg md:text-2xl xl:text-4xl font-black text-center text-third'>CRM - Clients</h2>

                {!openMenu && (
                    <div className="max-[479px]:block hidden cursor-pointer">
                        <FontAwesomeIcon
                            icon={faBars}
                            style={{fontSize: 23}}
                            className="text-secondary"
                            onClick={handleNav}
                        />
                    </div>
                )}

                {openMenu && (
                    <div className="max-[479px]:block hidden cursor-pointer">
                        <FontAwesomeIcon
                            icon={faTimes}
                            style={{ fontSize: 25}}
                            className="text-secondary"
                            onClick={handleNav}
                        />
                    </div>
                )}

                {/*NAV MENU - MOBILE*/}
                <nav className="nav-mobile top-[-200px] flex justify-center items-start gap-1 absolute  bg-primary flex-col w-full left-0 pt-0 pb-6 px-6 min-[480px]:hidden shadow-[0px_7px_5px_1px_rgba(0,0,0,0.3)]">
                    <Link
                        className={`${location === '/' ? 'text-third' : 'text-secondary'} md:text-xl xl:text-2xl block md:mt2`}
                        href="/"
                    >
                        Clients
                    </Link>
                    <Link
                        className={`${location === '/new-client' ? 'text-third' : 'text-secondary'} md:text-xl xl:text-2xl block md:mt-2`}
                        href="/new-client"
                    >
                        New Client
                    </Link>
                </nav>

                <nav className="flex justify-between gap-4 md:inline-block md:mt-10 max-[479px]:hidden">
                    <Link
                        className={`${location === '/' ? 'text-third' : 'text-secondary'} md:text-xl xl:text-2xl block md:mt2`}
                        href="/"
                    >
                        Clients
                    </Link>
                    <Link
                        className={`${location === '/new-client' ? 'text-third' : 'text-secondary'} md:text-xl xl:text-2xl block md:mt-2`}
                        href="/new-client"
                    >
                        New Client
                    </Link>
                </nav>

                <footer className="absolute bottom-5 w-full text-center left-0 text-xs lg:text-sm hidden md:inline-block">
                    <p className="text-secondary">Created by <span className="font-bold">Rub</span><span>Developer</span> © <span className="year">{new Date().getFullYear()}</span></p>
                </footer>
            </aside>

            <main className='md:w-3/4 pt-0 md:pt-6 p-4 w-full absolute md:right-0 z-0 top-20 md:top-0'>
                {children}

                <footer className="mt-10 mb-5 w-full text-center md:hidden text-sm">
                    <p className="text-secondary">Created by <span className="font-bold">Rub</span><span className="">Developer</span> © <span className="year">{new Date().getFullYear()}</span></p>
                </footer>
            </main>

        </div>
    )
}
