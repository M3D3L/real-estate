import { render } from '@testing-library/react';

import PropertyCard from '@/components/PropertyCard';

describe('PropertyCard component', () => {
  const property = {
    image: 'https://example.com/image.jpg',
    title: 'Example property',
    description: 'Lorem ipsum dolor sit amet',
    rooms: 2,
    bathrooms: 1,
    area: 100,
  };

  it('should render the property image with the correct alt text', () => {
    const { getByAltText } = render(<PropertyCard prop={property} />);
    const image = getByAltText('Example property Picture');
    expect(image).toBeInTheDocument();
  });

  it('should render the property title and description', () => {
    const { getByText } = render(<PropertyCard prop={property} />);
    const title = getByText('Example property');
    const description = getByText('Lorem ipsum dolor sit amet');
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('should render the property rooms, bathrooms, and area if they are provided', () => {
    const { getByText } = render(<PropertyCard prop={property} />);
    const rooms = getByText('Rooms: 2');
    const bathrooms = getByText('Baths: 1');
    const area = getByText('Area: 100');
    expect(rooms).toBeInTheDocument();
    expect(bathrooms).toBeInTheDocument();
    expect(area).toBeInTheDocument();
  });

  it('should not render the property rooms, bathrooms, or area if they are not provided', () => {
    const propertyWithoutFeatures = {
      image: 'https://example.com/image.jpg',
      title: 'Example property',
      description: 'Lorem ipsum dolor sit amet',
    };
    const { queryByText } = render(
      <PropertyCard prop={propertyWithoutFeatures} />
    );
    const rooms = queryByText('Rooms:');
    const bathrooms = queryByText('Baths:');
    const area = queryByText('Area:');
    expect(rooms).toBeNull();
    expect(bathrooms).toBeNull();
    expect(area).toBeNull();
  });
});
