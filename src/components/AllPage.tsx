import router from 'next/router';
import * as React from 'react';

import { blogs } from '@/data/mock';

import BaseCarousel from '@/components/BaseCarousel';
import BaseMap from '@/components/BaseMap';
import BlogCard from '@/components/BlogCard';
import ContactForm from '@/components/ContactForm';
import Layout from '@/components/layout/Layout';
import PrimaryLink from '@/components/links/PrimaryLink';
import PropertyCard from '@/components/PropertyCard';
import Seo from '@/components/Seo';

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

export default function AllPage({properties, selected}) {
  const renderBlogCard = (item) => <BlogCard prop={item} />;

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.setSubmitting(false);
  };

  const navigateTo = (e) => {
     //get the value of the button then navigate to that page
        const { value } = e.target;
        if (value === 'properties') {
            //use next to navigate to the properties page
            router.push('/properties');
        } else if (value === 'rentals') {
            router.push('/rentals');
        } else if (value === 'lots') {
            router.push('/lots');
        }
     
    };

    const redirect = selected.toLowerCase();
    

  const address = {
    street: '3117 N 3800 E',
    city: 'Hansen',
    state: 'ID',
    zip: '83334',
  };


  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='overflow-hidden bg-gradient-to-r from-teal-500 via-teal-400 to-teal-500'>
        <div className='container mx-auto overflow-hidden px-4 lg:px-32'>
            
          <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-32 content-center align-middle'>
            {properties.map((item: { id: Key | null | undefined }) => (
              <PrimaryLink className='mx-auto' key={item.id} href={`/${redirect}/${item.id}`}>
                <PropertyCard prop={item} />
              </PrimaryLink>
            ))}
          </div>

          <div className='flex w-full justify-center space-x-4 py-4 mt-16'>

              <button
                className={
                  selected === 'Properties'
                    ? 'bg-teal-500 text-white btn'
                    : 'bg-white text-teal-500 btn'
                }
                value='properties'
                onClick={navigateTo}
              >
                Properties
              </button>

              <button
                className={
                  selected === 'Rentals'
                  ? 'bg-teal-500 text-white btn'
                  : 'bg-white text-teal-500 btn'
                }
                value='rentals'
                onClick={navigateTo}
              >
                Rentals
              </button>

              <button
                className={
                  selected === 'Lots'
                  ? 'bg-teal-500 text-white btn'
                  : 'bg-white text-teal-500 btn'
                }
                value='lots'
                onClick={navigateTo}
              >
                Lots
              </button>

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
