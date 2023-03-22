import { Key, useEffect,useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import PrimaryLink from '@/components/links/PrimaryLink';

function BaseCarousel(props: { items: any; renderItem: any; redirect: string; }) {
  const { items, renderItem, redirect } = props;

  const [slidePercentage, setSlidePercentage] = useState(100);

  const getSlidePercentage = () => {
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        return 100 / 1.25;
      } else if (screenWidth < 1024) {
        return 100 / 2.25;
      } else if (screenWidth < 1280) {
        return 100 / 2.5;
      } else if (screenWidth < 1536) {
        return 100 / 2.75;
      } else if (screenWidth < 1920) {
        return 100 / 3.25;
      } else {
        return 100 / 3.5;
      }
    }
    return 100;
  };

  useEffect(() => {
    setSlidePercentage(getSlidePercentage());
    const handleResize = () => {
      setSlidePercentage(getSlidePercentage());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='container overflow-hidden'>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={slidePercentage}
        swipeable={true}
        emulateTouch={true}
        autoPlay={true}
      >
        {items.map((item: { id: Key | null | undefined }) => (
          <PrimaryLink key={item.id} href={`/${redirect}/${item.id}`}>
            <div className='px-4'>
              {renderItem(item)}
            </div>
          </PrimaryLink>
        ))}
      </Carousel>
    </div>
  );
}

export default BaseCarousel;
