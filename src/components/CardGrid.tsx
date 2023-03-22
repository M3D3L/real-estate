import { useState } from 'react';

import PropertyCard from '@/components/PropertyCard';

export default function CardGrid({ array }: { array: any[] }) {
  const [total, setTotal] = useState(3);

  const handleLoadMore = () => {
    if (total + 3 <= array.length) {
      setTotal(total + 3);
    } else setTotal(array.length);
  };

  return (
    <ul className='relative grid w-full grid-cols-1 content-center gap-4 px-4 xl:px-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {array.slice(0, total).map((item) => (
        <PropertyCard key={item.id} prop={item} />
      ))}
      <button onClick={handleLoadMore} className='absolute bottom-16 right-16'>
        View More
      </button>
    </ul>
  );
}
