import { render } from '@testing-library/react';

import BaseMap from '@/components/BaseMap';

const address = {
  street: '123 Main St',
  city: 'Anytown',
  state: 'CA',
  zip: '12345',
};

describe('BaseMap component', () => {
  it('renders the map with the correct URL based on the address prop', () => {
    const { container } = render(<BaseMap address={address} />);
    const iframe = container.querySelector('iframe');
    expect(iframe).toBeInTheDocument();
    expect(iframe?.src).toContain(
      'https://www.google.com/maps/embed/v1/place?q=123+Main+St,+Anytown,+CA,+12345'
    );
  });
});
