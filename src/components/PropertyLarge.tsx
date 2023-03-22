import { PropertyCardProps } from '@/interfaces/propertyCard';

const PropertyLarge = ({ property }: { property: PropertyCardProps }) => {
  return (
    <div className='w-full space-y-4 bg-white p-8'>
      <h1 className='text-teal-400'>{property.title}</h1>
      <h4>{property.description}</h4>
      <ul className='flex w-full justify-between'>
        {property.rooms && (
          <li className='flex flex-col'>
            <span className='font-semibold text-teal-400'>Rooms</span>
            <span>{property.rooms}</span>
          </li>
        )}
        {property.bathrooms && (
          <li className='flex flex-col'>
            <span className='font-semibold text-teal-400'>Baths</span>
            <span>{property.bathrooms}</span>
          </li>
        )}
        {property.parking && (
          <li className='flex flex-col'>
            <span className='font-semibold text-teal-400'>Parking</span>
            <span>{property.parking}</span>
          </li>
        )}
        {property.area && (
          <li className='flex flex-col'>
            <span className='font-semibold text-teal-400'>Area</span>
            <span>{property.area}</span>
          </li>
        )}
      </ul>

      <p className='mt-8 font-semibold text-teal-400'>Anemities</p>
      {property.anemities ? (
        <ul className='grid grid-cols-2 gap-4'>
          {property.anemities.map((f: string) => (
            <li className='flex space-x-4' key={f}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-6 w-6 text-teal-400'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              <p>{f}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No amenities found.</p>
      )}
    </div>
  );
};

export default PropertyLarge;
