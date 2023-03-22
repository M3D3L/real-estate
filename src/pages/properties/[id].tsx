import ElementPage from "@/components/ElementPage";

import { properties } from '@/data/mock';

export default function PropertiesPage({ property }) {
  return <ElementPage property={property} properties={properties} type={'Properties'} />;
};


export async function getStaticPaths() {
  const paths = properties.map((property) => ({
    params: { id: property.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const property = properties.find((p) => p.id.toString() === params.id);
  return { props: { property } };
}
