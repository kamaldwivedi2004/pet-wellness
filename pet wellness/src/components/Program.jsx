import React from 'react';
import phone2 from '../assets/phone2.png'
// import icons
// import { AifillPhone } from 'react-icons/ai';


const Program = () => {
  return (
    <div>
      <div className='flex lg:gap-x-[10px] items-baseline justify-end'>
        <img
          className='w-[28px] h-[28px] lg:w-[34px] lg:h-[34px]'
          src={phone2}
          alt=''
        />
        <div className='lg:text-[25px] text-blue font-extrabold'>
          +91 9306441796
        </div>
      </div>
      <div className='text-sm'>
        <div className='hidden lg:flex'>
          Opening Hours: Mon - Sun: 10am - 6pm
        </div>
        <div className='lg:hidden text-right'>Mon - Sun: 10am - 6pm</div>
      </div>
    </div>
  );
};

export default Program;
