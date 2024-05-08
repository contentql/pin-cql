'use client'

import { Media } from '@payload-types'
import Image from 'next/image'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const swiperOptions = {
  modules: [Autoplay],
  slidesPerView: 3,
  // spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
  },
}

export default function ReviewSlider1({
  reviews,
}: {
  reviews?: {
    review: string
    name: string
    designation: string
    reviewer_image: string | Media
    id?: string | null
  }[]
}) {
  return (
    <>
      {/* <Swiper {...swiperOptions}>
                <SwiperSlide>

                </SwiperSlide>
            </Swiper> */}
      <Swiper {...swiperOptions} className='reviews-1-wrapper'>
        {/* TESTIMONIAL #1 */}
        {reviews?.map((review, index) => (
          <SwiperSlide
            key={review?.id}
            className='review-1 bg--white-100 block-shadow r-08'>
            {/* Quote Icon */}
            <div className='review-ico ico-65'>
              <span className='flaticon-quote' />
            </div>
            {/* Text */}
            <div className='review-txt'>
              {/* Text */}
              <p>{review?.review}</p>
              {/* Author */}
              <div className='author-data clearfix'>
                {/* Avatar */}
                <div className='review-avatar'>
                  <Image
                    src={(review?.reviewer_image as Media)?.url || ''}
                    alt={(review?.reviewer_image as Media)?.alt || ''}
                    height={500}
                    width={500}
                  />
                </div>
                {/* Data */}
                <div className='review-author'>
                  <h6 className='s-18 w-700'>{review?.name}</h6>
                  <p className='p-sm'>{review?.designation}</p>
                </div>
              </div>{' '}
              {/* End Author */}
            </div>{' '}
            {/* End Text */}
          </SwiperSlide>
        ))}
        {/* END TESTIMONIAL #1 */}
      </Swiper>
    </>
  )
}
