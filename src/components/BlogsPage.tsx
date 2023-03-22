import Link from 'next/link';
import { useMemo } from 'react';

import BaseHeader from '@/components/BaseHeader';
import Layout from '@/components/layout/Layout';
import PropertyCard from '@/components/PropertyCard';
import Seo from '@/components/Seo';

import { PropertyCardProps } from '@/interfaces/propertyCard';

import BaseCarousel from './BaseCarousel';
import NextImage from './NextImage';

export default function BlogPage({ property, blogs, properties }) {
  //use effect so that map is the same height as the parent container and keep track of changes
  const renderPropertyCard = (item: PropertyCardProps) => (
    <PropertyCard prop={item} />
  );

  const filteredBlogs = useMemo(
    () => blogs.filter((p) => p.id !== property.id),
    [property]
  );

  const replaceTags = (text, regex, replacement) => {
    return text.replace(regex, replacement);
  };

  const formattedText = useMemo(() => {
    let text = replaceTags(
      property.description,
      /<strong>(.*?)<\/strong>/g,
      '<h2 class="mb-4 mt-4 text-2xl font-semibold text-gray-800">$1</h2>'
    );

    text = replaceTags(
      text,
      /<italic>(.*?)<\/italic>/g,
      '<span class="mb-6 rounded border-l-4 border-gray-500 in-view pl-4 italic">$1</span>'
    );

    text = replaceTags(text, /<img-left>(.*?)<\/img-left>/g, (match, p1) => {
      const imgSrc = p1.split(',')[0];
      const imgAlt = p1.split(', ')[1];
      return `<img src="${imgSrc}" alt="${imgAlt}" class="md:float-left w-full md:max-w-[200px] lg:max-h-[300px] mx-auto in-view rounded-lg shadow-lg md:mr-4 mb-4" />`;
    });

    text = replaceTags(text, /<img-right>(.*?)<\/img-right>/g, (match, p1) => {
      const imgSrc = p1.split(',')[0];
      const imgAlt = p1.split(', ')[1];
      return `<img src="${imgSrc}" alt="${imgAlt}" class="md:float-right md:max-w-[200px] w-full md:max-h-[300px] mx-auto in-view rounded-lg shadow-lg md:ml-4 mb-4" />`;
    });

    return text;
  }, [property]);


  return (
    <Layout>
      <Seo title={property.name} />

      <main className='container mx-auto overflow-hidden px-4 pt-24 lg:px-6 xl:px-32 lg:pt-28'>
        {/* <PropertyCard prop={property} /> */}
        <BaseHeader />
        <div className='relative mx-auto mb-4 h-[24em] w-full overflow-hidden rounded-lg shadow-lg'>
          <div
            className='absolute left-0 bottom-0 z-10 h-full w-full'
            style={{ background: 'linear-gradient(180deg, transparent, #000)' }}
          ></div>
          <img
            src='https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
            className='absolute left-0 top-0 z-0 h-full w-full object-cover'
          />
          <div className='absolute bottom-0 left-0 z-20 p-4'>
            <h2 className='text-4xl font-semibold leading-tight text-gray-100'>
              {property.title}
            </h2>
            <div className='mt-3 flex'>
              <img
                src={property.image}
                className='mr-2 h-10 w-10 rounded-full object-cover'
              />
              <div>
                <p className='text-sm font-semibold text-gray-200'>
                  {property.name}
                </p>
                <p className='text-xs font-semibold text-gray-400'>
                  {' '}
                  {property.date}{' '}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='container mx-auto flex flex-col gap-4 text-lg leading-relaxed text-gray-700 md:flex-row'>
          <article dangerouslySetInnerHTML={{ __html: formattedText }} className='w-full rounded-lg bg-white p-4 md:w-3/5 lg:w-2/3 lg:p-8'>
          </article>

          <div className='float-right w-full lg:w-1/3 md:w-2/5'>
            <div className='w-full rounded-lg bg-white p-4 shadow-lg lg:p-8'>
              <h3>Newsletter Sign-up</h3>
              <p>
                Sign up to our newsletter to get the latest news and updates
              </p>
              <form className='mt-4'>
                <input
                  type='text'
                  placeholder='Name'
                  className='mb-4 w-full rounded-lg border border-gray-300 p-2'
                />
                <input
                  type='email'
                  placeholder='Email'
                  className='mb-4 w-full rounded-lg border border-gray-300 p-2'
                />
                <button className='w-full rounded-lg bg-teal-400 p-2 text-white transition-all hover:bg-teal-500'>
                  Sign-up
                </button>
              </form>
            </div>

            <div className='mt-4 h-[600px] w-full justify-center overflow-y-scroll rounded-lg bg-white px-4 pt-4 shadow-lg'>
              <h3 className='mb-4 text-xl font-semibold'>Other Posts</h3>
              <ul className='grid h-full w-full grid-cols-1 gap-4'>
                {filteredBlogs.map((p) => (
                  <li
                    className='in-view relative h-32 overflow-hidden rounded-lg bg-teal-400 text-white shadow-lg transition-all hover:opacity-90'
                    key={p.id}
                  >
                    <Link href={`/blogs/${p.id}`}>
                      <NextImage
                        src={p.image}
                        alt={p.name}
                        layout='fill'
                        objectFit='cover'
                      />

                      <h3 className='z-100 absolute bottom-0 grid h-full w-full content-center bg-black bg-opacity-40 px-4 text-lg text-white'>
                        {p.title}
                        <div>
                          <p className='text-sm font-semibold text-gray-200'>
                            {p.name}
                          </p>
                          <p className='text-xs font-semibold text-gray-200'>
                            {p.date}
                          </p>
                        </div>
                      </h3>
                    </Link>
                  </li>
                ))}
                <div className='h-4'></div>
              </ul>
            </div>
          </div>
        </div>

        <div className='w-full py-16'>
          <h3 className='in-view mb-16 text-center text-4xl font-bold'>
            Properties
          </h3>
          <BaseCarousel
            redirect='properties'
            items={properties}
            renderItem={renderPropertyCard}
          />
        </div>
      </main>
    </Layout>
  );
}
