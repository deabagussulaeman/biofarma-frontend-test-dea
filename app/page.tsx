'use client'
import Image from 'next/image'

export default function Home() {
  const data = [
    {image: '/home/bali.png', title: 'Bali', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.....'},
    {image: '/home/jakarta.png', title: 'Jakarta', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.....'},
    {image: '/home/surabaya.png', title: 'Surabaya', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.....'},
    {image: '/home/jogja.png', title: 'Jogja', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.....'},
    {image: '/home/pulau_seribu.png', title: 'Pulau Seribu', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.....'},
  ]

  return (
    <main className="justify-between">
      <Image
        src="/home/banner.png"
        alt="image"
        className="w-full"
        width={1000}
        height={1000}
      />

      <div className="p-12 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Image
            src="/home/maldives.png"
            alt="image"
            className="w-full object-cover object-center rounded-md"
            width={500}
            height={500}
          />
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-3">Tujuan <span className="text-green-500">Baru</span>!</div>
            <div className="font-bold mb-3">Maldives, <span className="text-green-500">Surganya Dunia</span></div>
            <p className="text-gray-600">
              Maldives, Surganya Dunia Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate erat sit amet malesuada lacinia. Maecenas hendrerit, nunc ac finibus interdum, metus nibh pharetra elit, in efficitur est sem ut nunc. Cras bibendum turpis tempor, eleifend leo vel, sodales ligula. Vestibulum pulvinar fringilla justo, ac dignissim sapien vulputate eu. Quisque bibendum sagittis orci, id dapibus quam tincidunt eget. Aenean suscipit ex ac ex facilisis, at ullamcorper nibh ultricies. Sed porttitor mi at leo suscipit tincidunt. Fusce molestie pharetra velit ac luctus. Donec feugiat dictum tellus
            </p>
          </div>
        </div>
        
        <div className="text-3xl font-bold mb-3 text-center mb-16">
          <span className="text-green-500">Explore</span> Tempat Lainnya
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center mb-32">
          {data.length > 0 ? data.map((item) => (
            <div className="p-4">
              <Image
                src={item.image}
                alt="image"
                className="w-full object-cover mb-4 rounded-md"
                width={300}
                height={300}
                priority
              />
              <b>{item.title}</b>
              <p>{item.description}</p>
            </div>
          )) : 'Loading...'}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Image
            src="/home/join_people.png"
            alt="image"
            className="w-full object-cover object-center rounded-md"
            width={500}
            height={500}
          />
          
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-0">Experience Nomor <span className="text-green-500">Satu</span>!</div>
            <div className="font-bold mb-3">Dipercaya Seluruh Dunia</div>
            <p className="text-gray-600 mb-3">
              Maldives, Surganya Dunia Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate erat sit amet malesuada lacinia. Maecenas hendrerit, nunc ac finibus interdum, metus nibh pharetra elit, in efficitur est sem ut nunc. Cras bibendum turpis tempor, eleifend leo vel, sodales ligula. Vestibulum pulvinar fringilla justo, ac dignissim sapien vulputate eu. Quisque bibendum sagittis orci, id dapibus quam tincidunt eget. Aenean suscipit ex ac ex facilisis, at ullamcorper nibh ultricies. Sed porttitor mi at leo suscipit tincidunt. Fusce molestie pharetra velit ac luctus. Donec feugiat dictum tellus
            </p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Click me
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}