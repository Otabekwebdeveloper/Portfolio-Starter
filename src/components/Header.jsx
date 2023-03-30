import React from 'react';

const Header = () => {
  return (
    <header className='py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <a href="/" className='uppercase font-semibold font-primary'>
            <span className='btn-box text-[30px]'>OTABEK <br /> </span>Ahmatjonov 
          </a>
          <button className='btn btn-sm'>Work with me</button>
        </div>  
      </div>
    </header>
  )
};

export default Header;
