import NextImage from '@/components/NextImage';

import { BlogCardProps } from '@/interfaces/blogCard';

export default function BlogCard({ prop }: { prop: BlogCardProps }) {
  return (
    <div className='in-view group relative min-h-[350px] rounded-lg bg-white pb-16'>
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

      <h3 className='mt-4 truncate px-4 pb-4 text-left text-xl font-semibold capitalize leading-none text-gray-900'>
        {prop.title}
      </h3>

      <div className='flex items-center space-x-2 px-4 pb-4'>
        <div className='h-10 w-10 overflow-hidden rounded-full bg-teal-400 shadow-sm'>
          <NextImage
            useSkeleton
            className='h-full w-full object-cover'
            src={prop.image}
            width='100'
            height='100'
            alt={prop.title + ' Picture'}
          />
        </div>
        <div className='text-left'>
          <p className='font-semibold text-teal-500'>{prop.name}</p>
          <p className='text-sm font-semibold text-gray-500'>{prop.date}</p>
        </div>
      </div>
      <div className='bottom-100 absolute right-4 bottom-4 transform rounded-sm bg-teal-400 px-2 py-1 text-white transition-all duration-150 ease-in-out group-hover:bg-teal-500 lg:bottom-4'>
        Read More
      </div>
    </div>
  );
}
