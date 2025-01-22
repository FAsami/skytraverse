import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

const Destination = () => {
  const cards = [
    {
      img: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      location: 'London',
      landmark: 'Big Ben',
      rating: 4.5,
      description:
        'Big Ben is the nickname for the Great Bell of the clock at the north end of the Palace of Westminster in London.'
    },
    {
      img: 'https://images.unsplash.com/photo-1581010864468-c972b8705439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      location: 'Paris',
      landmark: 'Eiffel Tower',
      rating: 5,
      description:
        'Located in Paris, France, the Eiffel Tower is a wrought-iron lattice tower and a global cultural icon of France.'
    },
    {
      img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1096&q=80',
      location: 'Rome',
      landmark: 'Colosseum',
      rating: 4.7,
      description:
        'The Colosseum in Rome, Italy, is an ancient amphitheater and one of the greatest works of Roman architecture and engineering.'
    },
    {
      img: 'https://images.unsplash.com/photo-1581473483413-313a5afffb08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=714&q=80',
      location: 'Pisa',
      landmark: 'Pisa Tower',
      rating: 4.3,
      description:
        'The Leaning Tower of Pisa is a freestanding bell tower, known for its unintended tilt, located in Pisa, Italy.'
    },
    {
      img: 'https://images.unsplash.com/photo-1585155967849-91c736589c84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
      location: 'Venice',
      landmark: 'Canal',
      rating: 4.6,
      description:
        'The Grand Canal is the largest and most important canal in Venice, lined with beautiful buildings and historic sites.'
    }
  ]

  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="py-8 md:py-16 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl inline-block text-center font-semibold">
          Discover Iconic destinations
        </h1>
      </div>
      <div className="grid grid-cols-1 h-full gap-4 xl:place-content-center min-h-[460px] p-6 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative min-h-[280px] rounded-md overflow-hidden ${
              index === 1 ? 'md:row-span-2 xl:col-span-2' : ''
            }`}
          >
            <div className="relative h-full w-full">
              <Image
                src={card.img}
                alt={card.landmark}
                layout="fill"
                objectFit="cover"
                className="rounded-md transition-transform duration-300 transform hover:scale-110"
              />
              <span className="absolute text-sm top-4 left-4 bg-white text-orange-500 px-1 rounded-full flex items-center">
                <FaStar className="3 w-3 text-orange-500 mr-1" />
                {card.rating}
              </span>
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent rounded-2xl flex flex-col justify-end">
                <h2 className="text-lg font-bold text-white">
                  {card.location}
                </h2>
                <p className="text-white text-sm">{card.landmark}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export { Destination }
