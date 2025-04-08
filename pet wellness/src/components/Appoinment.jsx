import React from 'react';

// import image
import DogImg from '../assets/ldog.png';

const Appointment = () => {
  return (
    <section className='bg-yellow-secondary py-12 lg:pb-12 lg:mt-32 relative min-h-[584px]'>
      <div className='container mx-auto'>
        <div className='lg:absolute lg:-top-32 lg:left-0 lg:right-0'>
          {/* image */}
          <div className='hidden w-full max-w-[790px] mx-auto lg:flex justify-center'>
            <img src={DogImg} alt='' className='w-[40%]' />
          </div>
          {/* form */}
          <form className='bg-amber-400 text-black w-full max-w-[500px] h-[280px] mx-auto lg:-mt-9 rounded-[90px] py-8 px-6 text-center flex flex-col justify-start items-center gap-y-4'>
            <h2 className='h2 my-4'>Get an appointment</h2>
            <input
              className='input-control'
              type='text'
              placeholder='Full name'
            />
            <input
              className='input-control'
              type='email'
              placeholder='Email address'
            />
            <input
              className='input-control'
              type='text'
              placeholder='Phone number'
            />
            <button className='btn w-full max-w-[500px]'>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
