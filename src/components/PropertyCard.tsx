import NextImage from '@/components/NextImage';

import { PropertyCardProps } from '@/interfaces/propertyCard';

export default function PropertyCard({ prop }: { prop: PropertyCardProps }) {
  return (
    <div className='in-view group relative h-[400px] w-full max-w-[300px] cursor-pointer overflow-hidden rounded-lg bg-white text-left shadow-lg md:h-[420px] lg:max-w-[400px]'>
      <NextImage
        useSkeleton
        className='w-full transform transition-all group-hover:scale-105'
        src={prop.image}
        width='400'
        height='250'
        alt={prop.title + 'Picture'}
      />
      <h3 className='px-4 pt-4 text-2xl font-bold'>{prop.title}</h3>
      <p className='px-4 text-gray-700 line-clamp-3'>{prop.description}</p>
      <ul className='flex w-full flex-col justify-between px-4 pt-2 text-sm xl:flex-row'>
        {prop.rooms && (
          <li className='flex space-x-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9'
              />
            </svg>

            <span className='pr-1 text-gray-700'>Rooms: {prop.rooms}</span>
          </li>
        )}
        {prop.bathrooms && (
          <li className='flex space-x-1'>
            <svg
              className='h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <rect x='48' y='80' rx='48' ry='48' fill='#f2f2f2' />
              <rect x='112' y='144' width='288' height='16' fill='#ccc' />
              <rect x='112' y='200' width='288' height='16' fill='#ccc' />
              <rect x='112' y='256' width='288' height='16' fill='#ccc' />
              <rect x='112' y='312' width='288' height='16' fill='#ccc' />
              <circle cx='256' cy='400' r='32' fill='currentColor' />
              <path
                d='M256 48c-79.529 0-144 64.471-144 144v32h288v-32c0-79.529-64.471-144-144-144zM144 192c0-52.935 43.065-96 96-96s96 43.065 96 96v32H144v-32zM352 192c0-52.935-43.065-96-96-96s-96 43.065-96 96v32h192v-32z'
                fill='currentColor'
              />
              <rect
                x='176'
                y='320'
                width='32'
                height='64'
                fill='currentColor'
              />
              <rect
                x='304'
                y='320'
                width='32'
                height='64'
                fill='currentColor'
              />
            </svg>

            <span className='text-gray-700'>Baths: {prop.bathrooms}</span>
          </li>
        )}
        {prop.area && (
          <li className='flex space-x-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25'
              />
            </svg>

            <span className='text-gray-700'>Area: {prop.area}</span>
          </li>
        )}
      </ul>
      <h4 className='absolute bottom-4 px-4 pt-4'>$ {prop.price}</h4>
    </div>
  );
}
