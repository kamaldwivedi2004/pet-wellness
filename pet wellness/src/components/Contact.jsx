import React from 'react';

// import image
import phone2 from '../assets/phone2.png';

const Contact = () => {
  return (
    <section className='bg-yellow-secondary pt-6 flex bg-blue-300 px-10 py-3 justify-between items-center '>
      <div className='container mx-auto flex items-center justify-between gap-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-90'>
          {/* image */}
          <div className='order-1 lg:-order-1 lg:mt-16  w-auto  '>
            <img className='mb-[12px] place-items-center w-20 h-20' src= {phone2} alt=''  />
          </div>
          {/* text */}
          <div className='flex flex-col text-center'>
            <div className='text-orange font-semibold mb-3'>Contact</div>
            <div className='text-4xl text-blue font-extrabold'>
              +91 9306441796
            </div>
           <div className='mb-7 text-blue'>
              Opening Hours: Mon - Sat: 10am - 6pm
            </div>
            <button className='btn'>Get an appointment</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
