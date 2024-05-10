import { Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

import VideoPopup from '@/app/(app)/_components/elements/VidepPopup'

export default function Hero10({
  title,
  sub_title,
  button1_text,
  button2_text,
  description1,
  description2,
  link_text,
  background_image,
}: {
  title?: string
  sub_title?: string
  button1_text?: string
  button2_text?: string
  description1?: string
  description2?: string
  link_text?: string
  background_image?: Media
}) {
  return (
    <>
      <section id='hero-10' className='bg--scroll hero-section'>
        <div className='container'>
          <div className='row d-flex align-items-center'>
            {/* HERO TEXT */}
            <div className='col-md-6'>
              <div className='hero-10-txt wow fadeInRight'>
                {/* Title */}
                <h2 className='s-52 w-700'>{title}</h2>
                {/* Text */}
                <h4 className='s-28 color--grey'>{sub_title}</h4>
                {/* Buttons */}
                <div className='btns-group'>
                  <Link
                    href='#banner-13'
                    className='btn r-04 btn--theme hover--black'>
                    {button1_text}
                  </Link>
                  <VideoPopup buttonText={button2_text} style={3} />
                </div>
                {/* Buttons Text */}
                <p className='p-sm btns-group-txt'>
                  {description1}
                  <span className='txt-data'>
                    {description2} <Link href='/download'>{link_text}</Link>
                  </span>
                </p>
              </div>
            </div>{' '}
            {/* END HERO TEXT */}
            {/* HERO IMAGE */}
            <div className='col-md-6'>
              <div className='hero-10-img wow fadeInLeft'>
                <Image
                  className='img-fluid'
                  src={background_image?.url || ''}
                  alt={background_image?.alt || ''}
                  height={1500}
                  width={1500}
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
