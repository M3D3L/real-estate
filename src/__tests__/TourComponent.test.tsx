import { render } from '@testing-library/react';

import TourComponent from '@/components/TourComponent';

describe('TourComponent', () => {
  it('should render without errors', () => {
    render(<TourComponent />);
    expect(true).toBe(true); // Placeholder assertion
  });
});
