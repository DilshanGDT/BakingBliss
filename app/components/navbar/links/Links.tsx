import React from "react";
import Link from "next/link";

export const Links = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Work",
      path: "/work",
    },
  ];

  return (
    <div className="bg-blue-600">
      {links.map((link) => (
        <div className="flex flex-row justify-between">
          <Link href={link.path} key={link.title}>
            {link.title}
          </Link>
        </div>
      ))}
    </div>
  );
};
