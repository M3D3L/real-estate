import { useCallback, useEffect, useMemo, useRef } from 'react';

import BaseCarousel from '@/components/BaseCarousel';
import BaseMap from '@/components/BaseMap';
import Layout from '@/components/layout/Layout';
import PropertyCard from '@/components/PropertyCard';
import PropertyLarge from '@/components/PropertyLarge';
import Seo from '@/components/Seo';
import TourComponent from '@/components/TourComponent';

import { PropertyCardProps } from '@/interfaces/propertyCard';

export default function ElementPage({ property, properties, type }) {
  const parentContainer = useRef(null);
  const map = useRef(null);
  //use effect so that map is the same height as the parent container and keep track of changes
  useEffect(() => {
    //get the height of the parent container
    const height = parentContainer.current?.clientHeight;
    //set the height of the map to the height of the parent container
    map.current.style.height = `${height}px`;

    // add an event listener to detect changes in the height of the parent container
    const resizeObserver = new ResizeObserver(() => {
      const height = parentContainer.current?.clientHeight;
      if (map.current) {
        map.current.style.height = `${height}px`;
      }
    });
    resizeObserver.observe(parentContainer.current);

    // cleanup function to remove the event listener when the component unmounts
    return () => {
      if (parentContainer.current) {
        resizeObserver.unobserve(parentContainer.current);
      }
    };
  }, [parentContainer]);

  const filteredProperties = useMemo(
    () => properties.filter((p) => p.id !== property.id),
    [property]
  );

  const renderPropertyCard = useCallback(
    (item: PropertyCardProps) => <PropertyCard prop={item} />,
    []
  );

  const redirect = type.toLowerCase();

  return (
    <Layout>
      <Seo title={property.name} />

      <main className='container mx-auto px-4 pt-24 lg:px-32 lg:pt-28'>
        <TourComponent />
        <div className='mx-auto mt-4 flex min-h-[500px] w-full flex-col overflow-hidden rounded-lg bg-white shadow-lg lg:mt-8 lg:flex-row'>
          <div className='w-full lg:w-1/2' ref={parentContainer}>
            <PropertyLarge property={property} />
          </div>
          <div ref={map} className='relative z-10 h-full w-full lg:w-1/2'>
            <BaseMap address={property.address} />
          </div>
        </div>

        <div className='grid min-h-[100vh] content-center py-16'>
          <h3 className='in-view mb-16 text-center text-4xl font-bold'>
            Other {type}
          </h3>
          <BaseCarousel
            redirect={redirect}
            items={filteredProperties}
            renderItem={renderPropertyCard}
          />
        </div>
      </main>
    </Layout>
  );
}
