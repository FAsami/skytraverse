import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'

type Testimonial = {
  name: string
  status: string
  heading: string
  description: string
  imgSrc: string
  bgColor: string
  textColor: string
  imgBorderColor: string
  quoteIcon?: string
  colSpan?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Ava Roberts',
    status: 'Verified Traveler',
    heading:
      'Booking my flight with Skytraver was seamless, and the options provided were excellent. I was thrilled with my journey!',
    description:
      'As a frequent traveler, I’ve used many booking services, but Skytraver stood out. The user interface was easy to navigate, and I found the best prices quickly. My trip was smooth from start to finish.',
    imgSrc: 'https://randomuser.me/api/portraits/women/11.jpg',
    bgColor: 'bg-purple-600',
    textColor: 'text-white',
    imgBorderColor: 'border-white',
    quoteIcon:
      'https://raw.githubusercontent.com/khatri2002/testimonials-grid-section/e8e46d2c6e99c1e65142988a356eedd01037133d/images/bg-pattern-quotation.svg',
    colSpan: 'md:col-span-2'
  },
  {
    name: 'Liam Johnson',
    status: 'Verified Traveler',
    heading:
      'The booking experience with Skytraver was fantastic and incredibly user-friendly.',
    description:
      'I was initially a bit hesitant, but Skytraver exceeded my expectations. I secured an amazing deal for my flight and will definitely use it again.',
    imgSrc: 'https://randomuser.me/api/portraits/men/12.jpg',
    bgColor: 'bg-amber-50',
    textColor: 'text-gray-700',
    imgBorderColor: 'border-white'
  },
  {
    name: 'Sophia Williams',
    status: 'Verified Traveler',
    heading: 'Absolutely amazing! Couldn’t ask for more.',
    description:
      'This platform made my travel planning so easy! With Skytraver, I was able to find my ideal flights quickly and without any hassle.',
    imgSrc: 'https://randomuser.me/api/portraits/women/13.jpg',
    bgColor: 'bg-white',
    textColor: 'text-gray-800',
    imgBorderColor: 'border-gray-800'
  },
  {
    name: 'Mason Brown',
    status: 'Verified Traveler',
    heading:
      'Exceptional customer support at Skytraver and great deals on flights.',
    description:
      'Every question I had was answered promptly, and the booking process felt personal. Skytraver is my go-to for all my travel needs now!',
    imgSrc: 'https://randomuser.me/api/portraits/men/14.jpg',
    bgColor: 'bg-gray-900',
    textColor: 'text-white',
    imgBorderColor: 'border-white',
    colSpan: 'md:col-span-2'
  },
  {
    name: 'Isabella Garcia',
    status: 'Verified Traveler',
    heading: 'A life-changing experience for every traveler!',
    description:
      'I never thought booking flights could be so easy and stress-free. I’m thrilled with my travel arrangements through Skytraver.',
    imgSrc: 'https://randomuser.me/api/portraits/women/15.jpg',
    bgColor: 'bg-indigo-600',
    textColor: 'text-white',
    imgBorderColor: 'border-white'
  },
  {
    name: 'Garcia',
    status: 'Verified Traveler',
    heading: 'A life-changing experience for every traveler!',
    description:
      'I never thought booking flights could be so easy and stress-free. I’m thrilled with my travel arrangements through Skytraver.',
    imgSrc: 'https://randomuser.me/api/portraits/women/90.jpg',
    bgColor: 'bg-amber-400',
    textColor: 'text-white',
    imgBorderColor: 'border-white'
  }
]

const Testimonials = () => {
  return (
    <div className="md:pt-16 pt-12 max-w-screen-xl mx-auto bg-neutral-50 rounded shafow-sm">
      <h1 className="text-3xl w-full md:text-4xl text-center font-semibold">
        What our Travelers are saying
      </h1>{' '}
      <h2 className="text-sm mx-auto w-full max-w-screen-sm text-gray-400 text-center mt-4 font-medium">
        At <span className="text-blue-400">Skytraver</span>, we focus on
        personalized travel experiences, ensuring smooth planning and the best
        flight and accommodation options for your journey.
      </h2>
      <main className="flex justify-center items-center min-h-screen p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={clsx(
                'p-6 rounded-lg relative transition-transform duration-300 hover:scale-105',
                testimonial.bgColor,
                testimonial.textColor,
                testimonial.colSpan
              )}
            >
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">
                  <div
                    className={clsx(
                      'absolute inset-0 rounded-full',
                      testimonial.imgBorderColor,
                      'opacity-50'
                    )}
                  ></div>
                  <Image
                    src={testimonial.imgSrc}
                    alt={testimonial.name}
                    className="relative rounded-full w-10 h-10 z-10"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h1 className="text-lg font-semibold">{testimonial.name}</h1>
                  <h2 className="text-sm opacity-70">{testimonial.status}</h2>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">{testimonial.heading}</h3>
              </div>
              <div className="mt-2">
                <p className="text-sm opacity-80">{testimonial.description}</p>
              </div>
              {testimonial.quoteIcon && (
                <Image
                  src={testimonial.quoteIcon}
                  alt="Quote icon"
                  className="absolute w-16 h-16 top-0 right-4 opacity-20"
                  height={64}
                  width={64}
                />
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export { Testimonials }
