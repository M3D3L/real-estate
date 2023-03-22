import { useCallback, useEffect, useState } from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

const BaseHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const toggleSidePanel = () => {
    //get the width of the inner window
    const { innerWidth } = window;
    //if the width is less than 1024px, toggle the side panel
    if (innerWidth <= 1024) {
      setIsToggled(!isToggled);
    }
  };

  const handleScroll = useCallback(() => {
    setIsScrolled(true);
    clearTimeout(scrollTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    scrollTimeout = setTimeout(() => {
      setIsScrolled(false);
    }, 500);
  }, []);

  const handleResize = useCallback(() => {
    const { innerWidth } = window;
    setIsToggled(innerWidth >= 1024);
  }, []);

  let scrollTimeout: NodeJS.Timeout;

  useEffect(() => {
    const { innerWidth } = window;
    setIsToggled(innerWidth >= 1024);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScroll, handleResize]);

  const links = [
    {
      name: 'About',
      href: '/#about',
    },
    {
      name: 'Properties',
      href: '/#properties',
    },
    {
      name: 'Activities',
      href: '/#activities',
    },
    {
      name: 'Blog',
      href: '/#blog',
    },
    {
      name: 'Contact',
      href: '/#contact',
    },
  ];

  const headerClasses = `fixed w-full z-[999] bg-white shadow-lg transition-all left-0 top-0 righ-0 duration-300 ease-in-out ${
    isScrolled ? 'bg-opacity-20 py-2 px-4' : 'bg-opacity-95 py-4 px-8 lg:py-6'
  } ${isToggled ? 'h-full w-full lg:h-auto' : 'h-auto'}`;

  return (
    <header className={headerClasses}>
      <div className='mx-auto lg:px-16'>
        <nav className='flex flex-col items-center justify-between lg:flex-row'>
          <div className='flex w-full justify-between lg:w-auto'>
            <UnstyledLink href='/'>
              <p className='text-3xl font-bold text-teal-400'>Tetakawi</p>
            </UnstyledLink>

            <button
              className='lg:hidden'
              onClick={() => setIsToggled(!isToggled)}
            >
              {!isToggled && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='fade-in h-6 w-6 transition-all'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
                  />
                </svg>
              )}
              {isToggled && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='fade-in h-6 w-6 transition-all'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
            </button>
          </div>

          {isToggled && (
            <ul className='mt-4 flex w-full max-w-3xl flex-col justify-between space-y-4 lg:mt-1 lg:flex-row lg:space-y-0 lg:pl-16'>
              {links.map((link) => (
                <li key={link.name} onClick={() => toggleSidePanel()}>
                  <UnderlineLink href={link.href}>{link.name}</UnderlineLink>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default BaseHeader;
