import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link legacyBehavior href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img width={35} src="/logo.svg" alt="" />

            <span className="ml-3 text-xl">TuShop</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link legacyBehavior href="/">
            <a className="mr-5 hover:text-gray-900">Home</a>
          </Link>
          <Link legacyBehavior href="/about">
            <a className="mr-5 hover:text-gray-900">About</a>
          </Link>
          <Link legacyBehavior href="/products">
            <a className="mr-5 hover:text-gray-900">Products</a>
          </Link>
          <Link legacyBehavior href="/contact">
            <a className="mr-5 hover:text-gray-900">Contact Us</a>
          </Link>
        </nav>

        <button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 md:px-4 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Login
        </button>
      </div>
    </header>
  );
};

export default NavBar;
