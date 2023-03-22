export default function BaseHero() {
  return (
    <div
      style={{
        backgroundImage: `url('../images/beachside.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='h-[100vh] w-full'
    >
      <div className='flex flex-col h-screen text-center text-gray-100 justify-center rounded-lg bg-black bg-opacity-30'>
        <h1 className='in-view lg:text-7xl md:text-5xl text-4xl font-bold'>
          <span className='lg:text-9xl md:text-7xl text-6xl text-teal-400'>Tetakawi</span> <br className="md:hidden"/> Real Estate
        </h1>
        <p className='in-view mt-2 md:text-lg text-gray-200 text-base lg:text-2xl font-bold'>
          Where the desert meets the sea
        </p>
      </div>
    </div>
  );
}
