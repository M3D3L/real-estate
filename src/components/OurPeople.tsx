import React from 'react';

const people = [
  {
    name: 'John Doe',
    title: 'Real Estate Agent',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Jane Doe',
    title: 'Real Estate Agent',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Bob Smith',
    title: 'Real Estate Agent',
    image: 'https://via.placeholder.com/150',
  },
];

const OurPeople = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our People</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {people.map((person) => (
            <div key={person.name} className="bg-white shadow rounded-lg overflow-hidden">
              <img src={person.image} alt={person.name} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{person.name}</h3>
                <p className="text-gray-700">{person.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPeople;