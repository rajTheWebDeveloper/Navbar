import React, { useState } from 'react'
import { links, social } from '../utils';
import { MdOutlineSegment } from "react-icons/md";
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const NavComp = () => {
    let [showNavItems,setShowNavItems]=useState(false)
  return (
    <nav className="w-[100vw] h-auto bg-blue-700 py-6 md:h-[70px] text-white">
      <div className="container w-[90vw] max-w-[1170px] mx-auto md:flex md:items-center md:justify-between md:h-[100%]">
        <header className="flex justify-between w-[100%] md:w-auto">
          <h2 className="text-xl font-medium cursor-pointer">Social Service</h2>
          <button
            className="md:hidden"
            onClick={() => setShowNavItems(!showNavItems)}
          >
            <MdOutlineSegment size={25} />
          </button>
        </header>
        <ul
          className={`links mt-5 md:flex md:mt-0 ${
            showNavItems ? null : "hidden"
          } md:w-auto`}
        >
          {links.map((items) => {
            let { id, text, url } = items;
            return (
              <li className="my-4 md:my-0 md:mx-2 lg:mx-4 capitalize cursor-pointer">
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <footer className={`flex justify-center md:flex ${!showNavItems?'hidden':null}`}>
          {social.map((items) => {
            let { id, icon,url } = items;
            return (
              <p className="mx-2 cursor-pointer">
                <Link to={url} target='blank'>{icon}</Link>
              </p>
            );
          })}
        </footer>
      </div>
    </nav>
  );
}

export default NavComp