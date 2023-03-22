import { useEffect } from 'react';

import Skeleton from '@/components/Skeleton';

export const TourComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.dataset.short = 'MMqLrAhy2oN';
    script.dataset.path = 'tours';
    script.src = 'https://app.cloudpano.com/public/shareScript.js';

    //check if the script is already attached to the DOM

    //remove all scripts with the same id
    const scripts = document.querySelectorAll(`script[id='${script.id}']`);
    scripts.forEach((s) => s.remove());

    return () => {
      //check if the script is already attached to id and return if it is\\
      document.getElementById('MMqLrAhy2oN')?.appendChild(script);
    };
  }, []);

  return (
    <div
      className='relative z-10 min-h-[500px] w-full overflow-hidden rounded-lg shadow-lg'
      id='MMqLrAhy2oN'
    >
      <Skeleton className='absolute -z-10 h-[500px] w-full' />
    </div>
  );
};

export default TourComponent;
