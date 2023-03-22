import NextImage from '@/components/NextImage';

const img = '/../public/images/beachside.png';

export default function AboutUs() {
  return (
    <div
      id='about'
      className='mx-auto grid min-h-screen content-center'
    >
      <div className='mt-6 grid grid-cols-1 content-center gap-4 lg:mt-0 lg:grid-cols-2'>
        <div className='relative flex h-auto lg:h-[540px] w-full in-view flex-col overflow-hidden rounded-lg bg-white shadow-lg'>
          <NextImage
            useSkeleton
            className='w-full rounded-t-lg align-middle'
            src={img}
            width='800'
            height='400'
            alt='Picture'
          />
          <blockquote className='relative z-0 mb-4 p-8'>
            <svg
              preserveAspectRatio='none'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 583 95'
              className='absolute left-0 -z-10 block w-full'
            >
              <polygon
                points='-30,95 583,95 583,65'
                className='fill-current text-teal-500 opacity-25'
              ></polygon>
            </svg>
            <h4 className='text-xl font-bold text-teal-500'>
              Great for your awesome project
            </h4>
            <p className='text-md x-100 z-100 mt-2 inline font-semibold  text-black'>
              Putting together a page has never been easier than matching
              together pre-made components. From landing pages presentation to
              login areas, you can easily customise and built your pages.
            </p>
          </blockquote>
        </div>

        <div className='flex flex-wrap lg:h-[540px] w-full content-center overflow-hidden rounded-lg  bg-white shadow-lg'>
         
            <div className='w-full px-4 md:w-6/12'>
              <div className='relative mt-4 flex flex-col'>
                <div className='flex-auto px-4 py-5'>
                  <div className='in-view mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 p-3 text-center shadow-lg'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='h-6 w-6 text-white'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                      />
                    </svg>
                  </div>
                  <h6 className='mb-1 text-xl font-semibold'>CSS Components</h6>
                  <p className='text-blueGray-500 mb-4'>
                    Notus JS comes with a huge number of Fully Coded CSS
                    components.
                  </p>
                </div>
              </div>
              <div className='relative flex min-w-0 flex-col'>
                <div className='flex-auto px-4 py-5'>
                  <div className='text-blueGray-500 in-view mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 p-3 text-center shadow-lg'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='h-6 w-6 text-white'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                      />
                    </svg>
                  </div>
                  <h6 className='mb-1 text-xl font-semibold'>
                    JavaScript Components
                  </h6>
                  <p className='text-blueGray-500 mb-4'>
                    We also feature many dynamic components for React, NextJS,
                    Vue and Angular.
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full px-4 md:w-6/12'>
              <div className='relative mt-4 flex min-w-0 flex-col'>
                <div className='flex-auto px-4 py-5'>
                  <div className='text-blueGray-500 in-view mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 p-3 text-center shadow-lg'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='h-6 w-6 text-white'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                      />
                    </svg>
                  </div>
                  <h6 className='mb-1 text-xl font-semibold'>Pages</h6>
                  <p className='text-blueGray-500 mb-4'>
                    This extension also comes with 3 sample pages. They are
                    fully coded so you can start working.
                  </p>
                </div>
              </div>
              <div className='relative flex min-w-0 flex-col'>
                <div className='flex-auto px-4 py-5'>
                  <div className='text-blueGray-500 in-view mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 p-3 text-center shadow-lg'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='h-6 w-6 text-white'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                      />
                    </svg>
                  </div>
                  <h6 className='mb-1 text-xl font-semibold'>Documentation</h6>
                  <p className='text-blueGray-500 mb-4'>
                    Built by developers for developers. You will love how easy
                    is to to work with Notus JS.
                  </p>
                </div>
              </div>
            </div>
       
        </div>
      </div>
    </div>
  );
}
