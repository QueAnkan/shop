import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/react";
const Header = () => {
    return (
        <div>
            <Navbar
                shouldHideOnScroll
                className='w-screen text-white bg-blue-800/50 p-8'
            >
                {" "}
                <NavbarBrand>
                    {" "}
                    <Image
                        src='/logo.png'
                        alt='logo'
                        width={100}
                        height={100}
                    />
                    <h1 className=''>Furious Banana</h1>
                </NavbarBrand>
                <NavbarContent className=' '>
                    <div className='flex gap-6 justify-end w-full'>
                        <NavbarItem className=''>
                            <Link href='/'> Start</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link href='/products'>Products</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link href='/about'> About</Link>
                        </NavbarItem>
                    </div>
                </NavbarContent>
            </Navbar>
        </div>

        /*  <header className='w-screen fixed text-white bg-blue-800/50 p-4'>
            <div className='flex justify-between items-center w-full'>
                <Image src='/logo.png' alt='logo' width={100} height={100} />
                <h1 className="">Furious Banana</h1>
                
            </div>
        </header> */
    );
};

export default Header;
