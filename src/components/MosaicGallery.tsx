import NextImage from '@/components/NextImage';

import { MosaicGalleryProps } from '@/interfaces/mosaicGallery';

const ImgCard = ({ prop }: { prop: MosaicGalleryProps }) => {
  return (
    <div className='in-view group absolute z-0 flex h-full w-full overflow-hidden'>
      <NextImage
        className='absolute z-0 h-full w-full rounded-lg object-cover'
        src={prop.image}
        alt={prop.title}
        layout='fill'
      />
      <span className='z-10 grid h-full w-full cursor-pointer content-center overflow-hidden rounded-lg bg-black bg-opacity-50 px-4 text-white transition-all duration-150 hover:opacity-100 group-hover:w-full lg:w-0 lg:opacity-0'>
        <h3>{prop.title}</h3>
        <h5>{prop.description}</h5>
        <h4>{prop.price}</h4>
      </span>
    </div>
  );
};

const MosaicGallery = ({ prop }: { prop: MosaicGalleryProps }) => {
  const [one, two, three, four, five, six] = prop;
  return (
    <div className='container mx-auto py-2'>
      <div className='-m-1 flex flex-col gap-4 md:-m-2 lg:flex-row'>
        <div className='flex h-[550px] w-full flex-col gap-4 lg:w-1/2 '>
          <div className='flex h-1/2 w-full flex-row gap-4'>
            <div className='relative h-full w-full overflow-hidden rounded-lg shadow-lg'>
              <ImgCard prop={one} />
            </div>
            <div className='f-full relative w-full overflow-hidden rounded-lg shadow-lg'>
              <ImgCard prop={two} />
            </div>
          </div>
          <div className='relative h-1/2 w-full overflow-hidden rounded-lg shadow-lg'>
            <ImgCard prop={three} />
          </div>
        </div>

        <div className='flex h-full min-h-[550px] w-full flex-row gap-4 lg:w-1/2 '>
          <div className='w-full lg:w-1/2'>
            <div className='relative h-full w-full overflow-hidden rounded-lg shadow-lg'>
              <ImgCard prop={four} />
            </div>
          </div>

          <div className='flex w-full flex-col gap-4 lg:w-1/2'>
            <div className='relative h-1/2 w-full overflow-hidden rounded-lg shadow-lg'>
              <ImgCard prop={five} />
            </div>
            <div className='relative h-1/2 w-full overflow-hidden rounded-lg shadow-lg'>
              <ImgCard prop={six} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MosaicGallery;
