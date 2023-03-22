import ElementPage from "@/components/ElementPage";

import { lots } from '@/data/mock';

export default function PropertiesPage({ property }) {
  return <ElementPage property={property} properties={lots} type={'Lots'} />;
};


export async function getStaticPaths() {
  const paths = lots.map((property) => ({
    params: { id: property.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const property = lots.find((p) => p.id.toString() === params.id);
  return { props: { property } };
}
