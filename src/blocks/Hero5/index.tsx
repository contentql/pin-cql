import { Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero5({
  title,
  subtitle,
  background_image,
}: {
  title?: string
  subtitle?: string
  background_image?: Media
}) {
  return (
    <>
      <section id='hero-5' className='bg--scroll hero-section'>
        <div className='container'>
          <div className='row d-flex align-items-center'>
            {/* HERO TEXT */}
            <div className='col-md-6'>
              <div className='hero-5-txt wow fadeInRight'>
                {/* Title */}
                <h2 className='s-58 w-700'>{title}</h2>
                {/* Text */}
                <p className='p-lg'>{subtitle}</p>
                {/* Button */}
                <Link
                  href='#banner-7'
                  className='btn r-04 btn--theme hover--theme'>
                  Get started for free
                </Link>
              </div>
            </div>{' '}
            {/* END HERO TEXT */}
            {/* HERO IMAGE */}
            <div className='col-md-6'>
              <div className='hero-5-img wow fadeInLeft'>
                <Image
                  className='img-fluid'
                  src={background_image?.url || ''}
                  alt='hero-image'
                  height={1000}
                  width={1000}
                />
              </div>
            </div>
          </div>{' '}
          {/* End row */}
        </div>{' '}
        {/* End container */}
        {/* WAVE SHAPE BOTTOM */}
        <div className='wave-shape-bottom'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 170'>
            <path
              fillOpacity={1}
              d='M0,160L120,160C240,160,480,160,720,138.7C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
            />
          </svg>
        </div>
      </section>
      <hr className='divider' />
    </>
  )
}
