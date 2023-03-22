import NextImage from '@/components/NextImage';

import { MosaicGalleryProps } from '@/interfaces/mosaicGallery';

const MosaicGallery = ({ prop }: { prop: MosaicGalleryProps }) => {
  const [one, two, three, four, five, six] = prop;
  return (
    <div className='container mx-auto py-2'>
      <div className='-m-1 flex flex-col md:-m-2 lg:flex-row'>
        <div className='flex w-full flex-wrap lg:w-1/2'>
          <div className='in-view group relative w-1/2 p-1 md:p-2'>
            <div className='relative overflow-hidden rounded-lg'>
              <NextImage
                useSkeleton
                className='w-full transform transition-all group-hover:scale-105'
                src={one.image}
                width='500'
                height='500'
                alt={one.title}
              />
              <div className='absolute top-0 h-full w-0 cursor-pointer overflow-hidden bg-black bg-opacity-50 transition-all duration-300 group-hover:w-full'>
                <div className='absolute bottom-0 flex flex-col p-2 lg:p-4 text-white'>
                  <h3>{one.title}</h3>

                  <h5 className='hidden md:block'>{one.description}</h5>

                  <h4>{one.price}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='in-view group w-1/2 p-1 md:p-2'>
            <div className='relative overflow-hidden rounded-lg'>
              <NextImage
                useSkeleton
                className='w-full transform transition-all group-hover:scale-105'
                src={two.image}
                width='500'
                height='500'
                alt={two.title}
              />
              <div className='absolute top-0 h-full w-0 cursor-pointer overflow-hidden bg-black bg-opacity-50 transition-all duration-300 group-hover:w-full'>
                <div className='absolute bottom-0 flex flex-col p-2 lg:p-4 text-white'>
                  <h3>{one.title}</h3>

                  <h5 className='hidden md:block'>{one.description}</h5>

                  <h4>{one.price}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='in-view group w-full p-1 md:p-2'>
            <div className='relative overflow-hidden rounded-lg'>
              <NextImage
                useSkeleton
                className='w-full transform transition-all group-hover:scale-105'
                src={three.image}
                width='1000'
                height='1000'
                alt={three.title}
              />
              <div className='absolute top-0 h-full w-0 cursor-pointer overflow-hidden bg-black bg-opacity-50 transition-all duration-300 group-hover:w-full'>
                <div className='absolute bottom-0 flex flex-col p-2 lg:p-4 text-white'>
                  <h3>{one.title}</h3>

                  <h5 className='hidden md:block'>{one.description}</h5>

                  <h4>{one.price}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-full flex-wrap lg:w-1/2'>
          <div className='in-view group w-full p-1 md:p-2'>
            <div className='relative overflow-hidden rounded-lg'>
              <NextImage
                useSkeleton
                className='w-full transform transition-all group-hover:scale-105'
                src={four.image}
                width='1000'
                height='1000'
                alt={four.title}
              />
              <div className='absolute top-0 h-full w-0 cursor-pointer overflow-hidden bg-black bg-opacity-50 transition-all duration-300 group-hover:w-full'>
                <div className='absolute bottom-0 flex flex-col p-2 lg:p-4 text-white'>
                  <h3>{one.title}</h3>

                  <h5 className='hidden md:block'>{one.description}</h5>

                  <h4>{one.price}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='in-view group w-1/2 p-1 md:p-2'>
            <div className='relative overflow-hidden rounded-lg'>
              <NextImage
                useSkeleton
                className='w-full transform transition-all group-hover:scale-105'
                src={five.image}
                width='500'
                height='500'
                alt={five.title}
              />
              <div className='absolute top-0 h-full w-0 cursor-pointer overflow-hidden bg-black bg-opacity-50 transition-all duration-300 group-hover:w-full'>
                <div className='absolute bottom-0 flex flex-col p-2 lg:p-4 text-white'>
                  <h3>{one.title}</h3>

                  <h5 className='hidden md:block'>{one.description}</h5>

                  <h4>{one.price}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='in-view group w-1/2 p-1 md:p-2'>
            <div className='relative overflow-hidden rounded-lg'>
              <NextImage
                useSkeleton
                className='w-full transform transition-all group-hover:scale-105'
                src={six.image}
                width='500'
                height='500'
                alt={six.title}
              />
              <div className='absolute top-0 h-full w-0 cursor-pointer overflow-hidden bg-black bg-opacity-50 transition-all duration-300 group-hover:w-full'>
                <div className='absolute bottom-0 flex flex-col p-2 lg:p-4 text-white'>
                  <h3>{one.title}</h3>

                  <h5 className='hidden md:block'>{one.description}</h5>

                  <h4>{one.price}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MosaicGallery;
