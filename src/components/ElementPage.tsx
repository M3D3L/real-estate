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
    const parentContainerRef = parentContainer.current;
    const mapRef = map.current;

    const setMapHeight = () => {
      const height = parentContainerRef?.clientHeight;
      mapRef.style.height = `${height}px`;
    };

    setMapHeight();

    const resizeObserver = new ResizeObserver(setMapHeight);
    resizeObserver.observe(parentContainerRef);

    return () => {
      resizeObserver.unobserve(parentContainerRef);
    };
  }, [parentContainer]);

  const filteredProperties = useMemo(
    () => properties.filter((p) => p.id !== property.id),
    [property, properties]
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
