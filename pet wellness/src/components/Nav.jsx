import React from 'react';

// import data
import { navigation } from '../Data';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='text-[15px]'>
      <ul className='flex gap-x-10'>
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <a className='capitalize hover:text-orange-500 transition' href='#'>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
