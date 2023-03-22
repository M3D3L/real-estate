import ElementPage from "@/components/ElementPage";

import { rentals } from '@/data/mock';

export default function PropertiesPage({ property }) {
  return <ElementPage property={property} properties={rentals} type={'Rentals'} />;
};


export async function getStaticPaths() {
  const paths = rentals.map((property) => ({
    params: { id: property.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const property = rentals.find((p) => p.id.toString() === params.id);
  return { props: { property } };
}
