import React from 'react';

// import logo
import logo  from '../assets/images.jpg'

// import data
import { social } from '../Data';

const Footer = () => {
  return (
    <footer className='bg-orange py-8 lg:py-9 pt-3 bg-gray-300'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-6 lg:flex-row justify-between items-center text-black'>
          <a href='#'>
            { <img className='w-10 h-10 ' src={logo}/>
            /*'data:image/jpeg;base64,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' alt='' /> */}
          </a>
          <div className='text-[15px]'>
            {/* &copy;  */}
          </div>
          <div className='flex gap-x-4'>
            {social.map((item, index) => {
              return (
                <a href={item.href} key={index}>
                  <div className='bg-[#ebebeba9] hover:bg-gray-500 w-10 h-10 rounded-full flex justify-center items-center transition'>
                    <div className='text-2xl'>{item.icon}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
