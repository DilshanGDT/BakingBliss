import React from "react";
import { Links } from "./links/Links";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="bg-slate-400">
      <nav className="px-10 py-3 flex">
        {/* left side */}
        <div className="flex items-center bg-blue-400">
          <Image
            src="/logoBB.png"
            width={60}
            height={60}
            alt="Logo"
            className="h-auto md:w-16 xs:w-12"
          />
          <div className="flex flex-col text-white ml-3">
            <h1 className=" md:text-xl font-semibold text-base">
              Baking Bliss
            </h1>
            <h2 className="md:text-base text-sm">Cake Atelier</h2>
          </div>
        </div>
        {/* right side */}
        <div className="flex items-center bg-slate-500">
          <Links />
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
