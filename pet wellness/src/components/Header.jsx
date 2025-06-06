import React, { useEffect, useState } from 'react';

// import logo
import Logo from '../assets/images.jpg';

// import icons
import { CgMenuRight } from 'react-icons/cg';

// import components
import Program from './Program';
import Nav from './Nav';
import NavMobile from './NavMobile';

const Header = () => {
  const [bg, setBg] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? 'bg-gray-300 shadow-md py-3' : 'bg-none py-5'
      } fixed w-20xl right-10 left-10 z-10 transition-all duration-300`}
    >
      <div className='container mx-auto flex justify-between items-center text-black'>
        {/* logo */}
        <a href='#'>
          <img src={Logo} alt='' className='w-25 h-25' />
        </a>
        {/* nav */}
        <div className='hidden lg:flex'>
          <Nav />
        </div>
        {/* program */}
        <Program />
        {/* nav mobile button */}
        <div
          onClick={() => setNavMobile(!navMobile)}
          className='lg:hidden cursor-pointer'
        >
          <CgMenuRight className='text-blue text-3xl' />
        </div>
        {/* nav mobile */}
        <div
          className={`${
            navMobile ? 'max-h-[260px]' : 'max-h-0'
          } fixed w-full bg-yellow shadow-lg top-[78px] left-0 h-full overflow-hidden transition-all`}
        >
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
