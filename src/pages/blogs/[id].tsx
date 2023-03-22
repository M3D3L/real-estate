import BlogsPage from '@/components/BlogsPage';

import { blogs, properties } from '@/data/mock';

export default function BlogPage({ property }) {
  return <BlogsPage property={property} blogs={blogs} properties={properties} />;
};


export async function getStaticPaths() {
  const paths = blogs.map((property) => ({
    params: { id: property.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const property = blogs.find((p) => p.id.toString() === params.id);
  return { props: { property } };
}
