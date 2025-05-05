import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHeadphonesAlt, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    isActive ? 'text-[#db2777] font-semibold' : 'text-gray-800';

  return (
    <nav className="shadow-md px-6 py-4 mb-">
      <div className="flex justify-between items-center">
        {/* <h2 className="text-2xl font-bold text-white">RNTPW</h2> */}
        <img className='size-20' src="src/assets/images/logo3.png" alt="" />

        {/* Desktop menu */}
        <div className="hidden lg:flex gap-6">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/aboutus" className={navLinkClass}>About Us</NavLink>
          <NavLink to="/ourworks" className={navLinkClass}>Blog</NavLink>
          <NavLink to="/careers" className={navLinkClass}></NavLink>
          {/* <NavLink to="/contactus" className={navLinkClass}>Contact Us</NavLink> */}
        </div>

        {/* Right button (always visible) */}
        <div className="hidden lg:flex">
          {/* <Link to={'/contactus'} className="bg-white text-purple-700 flex gap-2 items-center  py-2 px-4 rounded hover:bg-orange-700">
            <FaHeadphonesAlt /> Contact Us
          </Link> */}
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl text-orange-600" />
            ) : (
              <FaBars className="text-2xl text-orange-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col gap-4 mt-4 lg:hidden">
          <NavLink to="/" onClick={closeMenu} className={navLinkClass}>Home</NavLink>
          <NavLink to="/aboutus" onClick={closeMenu} className={navLinkClass}>About Us</NavLink>
          <NavLink to="/ourworks" onClick={closeMenu} className={navLinkClass}>Our Work</NavLink>
          <NavLink to="/careers" onClick={closeMenu} className={navLinkClass}>Careers</NavLink>
          <Link to={'/contactus'} onClick={closeMenu} className="bg-orange-600 w-fit flex gap-2 items-center text-white py-2 px-4 rounded hover:bg-orange-700">
            <FaHeadphonesAlt /> Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
