import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = ({ page, link }) => {
  return (
    <header>
      <div className="flex flex-row">
        <div className="basis-3/4">
          <Image
            src="/logo.png"
            alt="match your clothes"
            width={300}
            height={300}
          />
        </div>
        <div className="basis-1/4 pr-4">
          <Link href={link} className="font-Playfair text-end">
            {page}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
