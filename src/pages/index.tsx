import router from 'next/router';
import * as React from 'react';

import { activities, blogs, lots, properties, rentals } from '@/data/mock';

import AboutUs from '@/components/AboutUs';
import BaseCarousel from '@/components/BaseCarousel';
import BaseHero from '@/components/BaseHero';
import BaseMap from '@/components/BaseMap';
import BlogCard from '@/components/BlogCard';
import ContactForm from '@/components/ContactForm';
import Layout from '@/components/layout/Layout';
import MosaicGallery from '@/components/MosaicGallery';
import PropertyCard from '@/components/PropertyCard';
import Seo from '@/components/Seo';

import { PropertyCardProps } from '@/interfaces/propertyCard';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const renderPropertyCard = (item: PropertyCardProps) => (
    <PropertyCard prop={item} />
  );

  const renderBlogCard = (item) => <BlogCard prop={item} />;

  const handleSubmit = (values, actions) => {
    alert(values + actions);
  };

  const address = {
    street: '3117 N 3800 E',
    city: 'Hansen',
    state: 'ID',
    zip: '83334',
  };

  const [selectedArray, setSelectedArray] = React.useState(properties);
  const [selected, setSelected] = React.useState('Properties');

  const handleSelect = (e) => {
    const { value } = e.target;
    if (value === 'properties') {
      if (selected === 'Properties') {
        router.push('/properties');
      } else {
        setSelectedArray(properties);
        setSelected('Properties');
      }
    } else if (value === 'lots') {
      if (selected === 'Lots') {
        router.push('/lots');
      } else {
        setSelectedArray(lots);
        setSelected('Lots');
      }
    } else if (value === 'rentals') {
      if (selected === 'Rentals') {
        router.push('/rentals');
      } else {
        setSelectedArray(rentals);
        setSelected('Rentals');
      }
    }
  };

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='overflow-hidden bg-gradient-to-r from-teal-500 via-teal-400 to-teal-500'>
        <BaseHero />
        <div className='container mx-auto overflow-hidden px-4 lg:px-32'>
          <AboutUs />

          <div
            id='properties'
            className='container mx-auto grid min-h-[100vh] content-center py-16 lg:py-0'
          >
            <h3 className='in-view mb-16 text-center text-4xl font-bold'>
              {selected}
            </h3>
            <BaseCarousel
              redirect={selected.toLowerCase()}
              items={selectedArray}
              renderItem={renderPropertyCard}
            />
            <div className='mt-8 flex w-full justify-center space-x-4 py-4'>
              <button
                className={
                  selected === 'Properties'
                    ? 'btn bg-teal-500 text-white'
                    : 'btn bg-white text-teal-500'
                }
                onClick={handleSelect}
                value='properties'
              >
                {selected === 'Properties' ? 'All Properties' : 'Properties'}
              </button>

              <button
                className={
                  selected === 'Rentals'
                    ? 'btn bg-teal-500 text-white'
                    : 'btn bg-white text-teal-500'
                }
                onClick={handleSelect}
                value='rentals'
              >
                {selected === 'Rentals' ? 'All Rentals' : 'Rentals'}
              </button>

              <button
                className={
                  selected === 'Lots'
                    ? 'btn bg-teal-500 text-white'
                    : 'btn bg-white text-teal-500'
                }
                onClick={handleSelect}
                value='lots'
              >
                {selected === 'Lots' ? 'All Lots' : 'Lots'}
              </button>
            </div>
          </div>

          <div
            className='grid min-h-screen w-full content-center'
            id='activities'
          >
            <h3 className='in-view mb-16 text-center text-4xl font-bold'>
              Activities
            </h3>
            <MosaicGallery prop={activities} />
          </div>

          <div id='blog' className='grid min-h-screen content-center'>
            <h3 className='in-view mb-16 mt-32 text-center text-4xl font-bold'>
              Blog
            </h3>
            <BaseCarousel
              redirect='blogs'
              items={blogs}
              renderItem={renderBlogCard}
            />
          </div>

          <div
            id='contact'
            className='mx-auto grid min-h-screen content-center py-16'
          >
            <h3 className='in-view mb-16 text-center text-4xl font-bold'>
              Contact Us
            </h3>
            <div className='grid w-full grid-cols-1 content-center gap-4 lg:grid-cols-2'>
              <div className='grid h-[500px]  w-full content-center'>
                <ContactForm onSubmit={handleSubmit} />
              </div>
              <div className='h-[500px] w-full overflow-hidden rounded-lg'>
                <BaseMap address={{ address }} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
