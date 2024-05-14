import { Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero25({
  caption,
  title,
  sub_title,
  button_text,
  background_image,
}: {
  caption?: string
  title?: string
  sub_title?: string
  button_text?: string
  background_image?: Media
}) {
  return (
    <>
      <section id='hero-25' className='1gr--whitesmoke bg--fixed hero-section'>
        <div className='container'>
          <div className='row d-flex align-items-center'>
            {/* HERO TEXT */}
            <div className='col-md-6'>
              <div className='hero-25-txt wow fadeInRight'>
                {/* Section ID */}
                <span className='section-id'>{caption}</span>
                {/* Title */}
                <h2 className='s-52 w-700'>{title}</h2>
                {/* Text */}
                <p className='p-lg'>{sub_title}</p>
                {/* Button */}
                <Link
                  href='https://cloud.contentql.io/guest'
                  target='_blank'
                  className='btn r-04 btn--theme hover--theme'>
                  {button_text}
                </Link>
              </div>
            </div>{' '}
            {/* END HERO TEXT */}
            {/* HERO IMAGE */}
            <div className='col-md-6'>
              <div className='hero-25-img wow fadeInLeft'>
                <Image
                  className='img-fluid'
                  src={background_image?.url || ''}
                  alt={background_image?.alt || ''}
                  height={1000}
                  width={1000}
                />
              </div>
            </div>
          </div>{' '}
          {/* End row */}
        </div>{' '}
        {/* End container */}
      </section>
    </>
  )
}
