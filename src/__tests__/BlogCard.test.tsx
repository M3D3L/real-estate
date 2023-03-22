import { render, screen } from '@testing-library/react';

import BlogCard from '@/components/BlogCard';

const props = {
  prop: {
    image: '/path/to/image.png',
    title: 'Blog Title',
    name: 'Author Name',
    date: '2022-03-22',
  },
};

describe('BlogCard', () => {
  it('renders the component with the correct props and image', () => {
    render(<BlogCard {...props} />);
    const title = screen.getByText(props.prop.title);
    expect(title).toBeInTheDocument();

    const author = screen.getByText(props.prop.name);
    expect(author).toBeInTheDocument();

    const date = screen.getByText(props.prop.date);
    expect(date).toBeInTheDocument();

    const image = screen.getByAltText(props.prop.title + ' Picture');
    expect(image).toBeInTheDocument();
  });
});
