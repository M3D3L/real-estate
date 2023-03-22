import NextImage from '@/components/NextImage';

import { BlogCardProps } from '@/interfaces/blogCard';

export default function BlogCard({ prop }: { prop: BlogCardProps }) {
  return (
    <div className='in-view group rounded-lg bg-white'>
      <div className='overflow-hidden rounded-t-lg'>
        <NextImage
          useSkeleton
          className='h-full w-full object-cover'
          src={prop.image}
          width='400'
          height='400'
          alt={prop.title + 'Picture'}
        />
      </div>

      <h3 className='mt-2 truncate px-4 pb-2 text-left text-xl font-semibold capitalize leading-none text-gray-900'>
        {prop.title}
      </h3>

      <div className='flex items-center space-x-2 px-4 pb-4'>
        <div className='h-10 w-10 overflow-hidden shadow-sm rounded-full bg-teal-400'>
          <NextImage
            useSkeleton
            className='h-full w-full object-cover'
            src={prop.image}
            width='100'
            height='100'
            alt={prop.title + 'Picture'}
          />
        </div>
        <div className='text-left'>
          <p className='font-semibold text-teal-500'>{prop.name}</p>
          <p className='text-sm font-semibold text-gray-500'>{prop.date}</p>
        </div>
        <div className='bg-teal-400 xl:block hidden text-white transform transition-all duration-150 ease-in-out group-hover:bg-teal-500 absolute bottom-100 lg:bottom-4 right-4 px-2 py-1 rounded-sm'>
          Read More
        </div>
      </div>
    </div>
  );
}
