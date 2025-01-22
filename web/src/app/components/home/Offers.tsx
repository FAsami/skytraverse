import { Carousel, Image } from 'antd'
const items = [
  { src: '/images/offers/upto_50_off.png', alt: 'Image 1' },
  { src: '/images/offers/find_my_flight.png', alt: 'Image 1' },
  { src: '/images/offers/2.png', alt: 'Image 1' },
  { src: '/images/offers/offer_page_1.png', alt: 'Image 1' }
]

const FlightOffers = () => {
  return (
    <div className="bg-white">
      <section className="md:py-32 py-12 container mx-auto">
        <h1 className="text-2xl w-full md:text-4xl font-semibold pb-5">
          Offers
        </h1>{' '}
        <div className="container mx-auto">
          <Carousel
            responsive={[
              { breakpoint: 1280, settings: { slidesToShow: 2 } },
              { breakpoint: 860, settings: { slidesToShow: 1 } }
            ]}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            dots={true}
            swipe={true}
            swipeToSlide={true}
          >
            {items.map((slide, index) => (
              <div key={slide.src} className="rounded overflow-hidden px-2">
                <Image
                  src={slide.src}
                  alt={slide.alt || `Slide ${index}-${index}`}
                  preview={false}
                  className="rounded"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  )
}

export { FlightOffers }
