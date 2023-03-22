import Skeleton from '@/components/Skeleton';

import { BaseMapProps } from '@/interfaces/baseMap';

const BaseMap = ({ address }: {address: BaseMapProps}) => {
  
  const fullAddress = `${address.street}, ${address.city}, ${address.state}, ${address.zip}`;

  function initMap(fullAddress: string) {
    let s = fullAddress;
    s = s.replace(/\./g, ''); // Remove dots using regex
    const t = s.split(' '); // Split the string by spaces
    s = t
      .map((w, i) => (i === 0 ? w : '+' + w))
      .join('')
      .replace(/,/g, ',');
    return s;
  }

  const urlAddress = initMap(fullAddress);

  return (
    <div className='relative z-10 h-full w-full'>
      <Skeleton className='absolute h-full w-full object-cover' />
      <iframe
        className='absolute h-full w-full object-cover'
        src={
          'https://www.google.com/maps/embed/v1/place?q=' +
          urlAddress +
          '&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'
        }
      ></iframe>
    </div>
  );
};

export default BaseMap;