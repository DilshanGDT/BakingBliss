import React from "react";
import { Links } from "./links/Links";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="bg-slate-300">
      <nav className="px-20 py-2 flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center">
          <Image
            src="/logoBB.png"
            width={60}
            height={60}
            alt="Logo"
            className="h-auto md:w-16 xs:w-12"
          />
          <div className="flex flex-col text-pink-400 ml-5">
            <h1 className="md:text-xl font-semibold text-base">Baking Bliss</h1>
            <h2 className="md:text-base text-sm">Cake Atelier</h2>
          </div>
        </div>

        {/* right side */}
        <div className="flex items-center">
          <ul className="flex items-center gap-[3vw] ">
            <li>
              <Link
                className="hover:text-gray-500 sm:text-sm md:text-lg"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-500 sm:text-sm md:text-lg"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-500 sm:text-sm md:text-lg"
                href="/work"
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-500 sm:text-sm md:text-lg"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

/* <div className="bg-slate-200 mx-10">
<div>Logo</div>
<div>Baking Bliss</div>
<div>
  <Links />
</div>
</div> */
