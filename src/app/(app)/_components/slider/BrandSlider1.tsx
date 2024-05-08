'use client'

import Image from 'next/image'
import Link from 'next/link'
import brand1White from 'public/images/brand-1-white.png'
import brand1 from 'public/images/brand-1.png'
import brand2 from 'public/images/brand-2.png'
import brand3White from 'public/images/brand-3-white.png'
import brand4White from 'public/images/brand-4-white.png'
import brand4 from 'public/images/brand-4.png'
import brand5White from 'public/images/brand-5-white.png'
import brand5 from 'public/images/brand-5.png'
import brand6White from 'public/images/brand-6-white.png'
import brand6 from 'public/images/brand-6.png'
import brand7White from 'public/images/brand-7-white.png'
import brand7 from 'public/images/brand-7.png'
import brand8White from 'public/images/brand-8-white.png'
import brand8 from 'public/images/brand-8.png'
import brand9 from 'public/images/brand-9.png'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const swiperOptions = {
  modules: [Autoplay],
  slidesPerView: 5,
  // spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 4,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 4,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 5,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 5,
      // spaceBetween: 30,
    },
  },
}

export default function BrandSlider1() {
  return (
    <>
      {/* <Swiper {...swiperOptions}>
                <SwiperSlide>

                </SwiperSlide>
            </Swiper> */}

      <Swiper {...swiperOptions} className='brands-carousel-5'>
        {/* BRAND LOGO IMAGE */}
        <SwiperSlide className='brand-logo'>
          <Link href='#'>
            <Image
              className='img-fluid light-theme-img'
              src={brand1}
              alt='brand-logo'
            />
          </Link>
          <Link href='#'>
            <Image
              className='img-fluid dark-theme-img'
              src={brand1White}
              alt='brand-logo'
            />
          </Link>
        </SwiperSlide>
        {/* BRAND LOGO IMAGE */}
        <SwiperSlide className='brand-logo'>
          <Link href='#'>
            <Image
              className='img-fluid light-theme-img'
              src={brand2}
              alt='brand-logo'
            />
          </Link>
          <Link href='#'>
            <Image
              className='img-fluid dark-theme-img'
              src={brand3White}
              alt='brand-logo'
            />
          </Link>
        </SwiperSlide>
        {/* BRAND LOGO IMAGE */}
        <SwiperSlide className='brand-logo'>
          <Link href='#'>
            <Image
              className='img-fluid light-theme-img'
              src={brand4}
              alt='brand-logo'
            />
          </Link>
          <Link href='#'>
            <Image
              className='img-fluid dark-theme-img'
              src={brand4White}
              alt='brand-logo'
            />
          </Link>
        </SwiperSlide>
        {/* BRAND LOGO IMAGE */}
        <SwiperSlide className='brand-logo'>
          <Link href='#'>
            <Image
              className='img-fluid light-theme-img'
              src={brand5}
              alt='brand-logo'
            />
          </Link>
          <Link href='#'>
            <Image
              className='img-fluid dark-theme-img'
              src={brand5White}
              alt='brand-logo'
            />
          </Link>
        </SwiperSlide>
        {/* BRAND LOGO IMAGE */}
        <SwiperSlide className='brand-logo'>
          <Link href='#'>
            <Image
              className='img-fluid light-theme-img'
              src={brand6}
              alt='brand-logo'
            />
          </Link>
          <Link href='#'>
            <Image
              className='img-fluid dark-theme-img'
              src={brand6White}
              alt='brand-logo'
            />
          </Link>
        </SwiperSlide>
        {/* BRAND LOGO IMAGE */}
        <SwiperSlide className='brand-logo'>
          <Link href='#'>
            <Image
              className='img-fluid light-theme-img'
              src={brand7}
              alt='brand-logo'
            />
          </Link>
          <Link href='#'>
            <Image
              className='img-fluid dark-theme-img'
              src={brand7White}
              alt='brand-logo'
            />
          </Link>
        </SwiperSlide>
        {/* BRAND LOGO IMAGE */}
        <SwiperSlide className='brand-logo'>
          <Link href='#'>
            <Image
              className='img-fluid light-theme-img'
              src={brand8}
              alt='brand-logo'
            />
          </Link>
          <Link href='#'>
            <Image
              className='img-fluid dark-theme-img'
              src={brand8White}
              alt='brand-logo'
            />
          </Link>
        </SwiperSlide>
        {/* BRAND LOGO IMAGE */}
        <SwiperSlide className='brand-logo'>
          <Link href='#'>
            <Image
              className='img-fluid light-theme-img'
              src={brand9}
              alt='brand-logo'
            />
          </Link>
          <Link href='#'>
            <Image
              className='img-fluid dark-theme-img'
              src={brand1White}
              alt='brand-logo'
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
