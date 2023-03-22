import React from 'react';

const BaseFooter = () => {
  const legalMessage = `All rights reserved © ${new Date().getFullYear()}`;
  const message = () => {
    alert(
      'Legal Disclaimer: The information provided on this website is for general informational purposes only and is not intended to be relied upon as legal, financial, or other professional advice. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. The content on this website is provided "as is" without warranties of any kind, either express or implied, including, without limitation, warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property. In no event shall we be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use or inability to use the website or the information, products, services, or related graphics contained on the website. The information provided on this website does not constitute an offer to sell or a solicitation of an offer to buy any property, lot, or rental. Prices and availability of properties, lots, and rentals are subject to change without notice. We do not endorse, and are not responsible for, any third-party content that may be accessed through this website. The use of this website and any dispute arising out of such use is subject to the laws of Mexico.'
    );
  };

  return (
    <footer className='body-font bg-white text-gray-700'>
      <div className='md:flex-no-wrap container relative mx-auto flex flex-col flex-wrap p-8 px-4 md:items-center lg:flex-row lg:justify-between lg:px-8 xl:px-32 '>
        <div className='z-0 mx-auto mb-6 w-64 md:mx-0 md:mb-0 md:w-auto'>
          <div className='title-font flex flex-col items-center justify-center gap-2 font-medium text-gray-900 md:justify-start lg:flex-row'>
            <span className='ml-3 text-xl font-bold text-teal-400'>
              Tetakawi
            </span>
            <p className='text-gray-700'>
              {legalMessage}
            </p>
            <a
              onClick={message}
              className='cursor-pointer text-gray-700 hover:text-teal-400'
            >
                <p>
                Legal
                </p>
              
            </a>
  
          </div>
        </div>

        <div className='inline-flex w-full flex-col justify-center md:mt-2 md:w-auto'>
          <span className='flex w-full justify-center'>
            <a className='mx-2 flex h-8 w-8 transform cursor-pointer justify-center rounded-full bg-gradient-to-r from-teal-500 to-teal-400 text-gray-700 shadow-sm transition-all duration-150 ease-in-out hover:translate-y-[-2px]'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='mt-1 h-6 w-6'
                viewBox='0 0 16 16'
              >
                {' '}
                <path d='M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z' />{' '}
              </svg>
            </a>
            <a className='relative mx-2 flex h-8 w-8 transform cursor-pointer justify-center rounded-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-600 text-gray-700 shadow-sm transition-all duration-150 ease-in-out hover:translate-y-[-2px]'>
              <div className='absolute z-0 mt-2 h-5 w-5 bg-white'></div>
              <svg
                className='z-10 mt-1 h-6 w-6 text-gray-700 transition-all'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path
                  d='M408 64H104c-44.188 0-80 35.812-80 80v304c0 44.188 35.812 80 80 80h304c44.188 0 80-35.812 80-80V144c0-44.188-35.812-80-80-80zm-48 128h-48c-26.469 0-32 12.734-32 31.344V256h80l-10.188 80H280v208h-96V336h-56v-80h56v-54.313C184 156.09 225.75 112 296 112h64v80z'
                  fill='#1877f2'
                />
              </svg>
            </a>
            <a className='mx-2 flex h-8 w-8 transform cursor-pointer justify-center rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-600 text-gray-700 shadow-sm transition-all duration-150 ease-in-out hover:translate-y-[-2px]'>
              <svg
                className='ml-1 mt-1 mr-1 h-6 w-6 text-white transition-all'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M16.25 0H7.75C3.467 0 0 3.467 0 7.75v8.5c0 4.283 3.467 7.75 7.75 7.75h8.5c4.283 0 7.75-3.467 7.75-7.75v-8.5c0-4.283-3.467-7.75-7.75-7.75zm4.75 16.25c0 2.623-2.127 4.75-4.75 4.75h-8.5c-2.623 0-4.75-2.127-4.75-4.75v-8.5c0-2.623 2.127-4.75 4.75-4.75h8.5c2.623 0 4.75 2.127 4.75 4.75v8.5z' />
                <path d='M12 6c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8.75c-1.647 0-2.984-1.337-2.984-2.984S10.353 8.781 12 8.781s2.984 1.337 2.984 2.984S13.647 14.75 12 14.75zm4.947-9.401c-.437 0-.788-.35-.788-.787s.35-.788.788-.788.788.35.788.788-.35.787-.788.787z' />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default BaseFooter;
