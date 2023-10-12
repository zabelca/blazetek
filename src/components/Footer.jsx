import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
      <div className='container p-12 flex justify-between'>
        <span>
          <div className='absolute transform -translate-y-1/2'>
            <Image
              src="/images/Blazetek-logos_white.png"
              alt="blazetek-logo"
              height={50}
              width={125}
              className=''
              //fill={true}
              //objectFit="cover"
            />
          </div>
        </span>
        <p className='text-slate-600'>
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer