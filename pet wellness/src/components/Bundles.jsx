import React from 'react';

// import icons
import { BsCheckCircleFill } from 'react-icons/bs';

const Bundle = ({ bundles =[]}) => {
  return (
    <div className='flex flex-col md:flex-row justify-between gap-[30px]'>
      {bundles.map((bundle, index) => {
      // {bundles?.map((bundle, index) => {

        // destructure each bundle
        const { name, price, list } = bundle;
        return (
          <div
            key={index}
            className='w-full lg:max-w-1/3 bg-white shadow-primary text-center h-[560px] rounded-[60px] py-12 px-8'
          >
            <div className='text-5xl font-bold text-blue mb-4'>RS-{price}</div>
            <div className='capitalize mb-12 text-blue font-medium'>{name}</div>
            <div className='flex flex-col gap-y-4 max-w-[230px] mx-auto'>
              {list.map((item, i) => (
                <div className='flex items-center gap-x-3' key={i}>
                  <BsCheckCircleFill className='text-orange text-xl' />
                  <div className='capitalize'>{item}</div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Bundle;
