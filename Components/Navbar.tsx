'use client'
import { NAV_LINKS } from "@/Constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    return (
      <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
          <Image src="/hilink-logo.svg" alt="Logo" width={74} height={29} />
        </Link>
  
        <ul className="hidden h-full gap-12 lg:flex md:items-center md:flex md:px-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
  
        <div className="lg:flexCenter hidden md:block">
          <Button
            type="button"
            title=""
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
  
        <Image
          onClick={toggleMenu}
          src={isMenuOpen ? "/close-black.png" : "menu.svg"}
          alt={isMenuOpen ? "close" : "menu"}
          width={27}
          height={27}
          className="inline-block md:hidden cursor-pointer lg:hidden"
        />
  
        <div className={`menu-container ${isMenuOpen ? 'visible' : 'hidden'}`}>
          <div
            className="overlay"
            onClick={toggleMenu}
            style={{ zIndex: 10 }}
          ></div>
          <ul
            className="h-screen w-full flex flex-col justify-center items-center"
            style={{
                position: 'fixed',
                top: 0,
                right: 0,
                backgroundColor: '#fff',
              }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className={`regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold ${
                    isMenuOpen ? 'text-4xl font-bold' : 'text'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={toggleMenu}
            className="cursor-pointer"
            style={{ position: 'absolute', top: '19px', right: '24px' }}
          >
            <Image
              src="/close-black.png"
              alt="close"
              width={27}
              height={27}
            />
          </div>
        </div>
      </nav>
    );
  };
export default Navbar