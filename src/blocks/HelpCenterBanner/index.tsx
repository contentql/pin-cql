import { Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

const HelpCenterBanner = ({
  title,
  sub_title,
  button_text,
  background_image,
}: {
  title?: string
  sub_title?: string
  button_text?: string
  background_image?: Media
}) => {
  return (
    <section id='banner-9' className='bg--02 py-70 x-border banner-section'>
      <div className='container'>
        {/* BANNER-9 WRAPPER */}
        <div className='banner-7-wrapper'>
          <div className='row justify-content-center d-flex align-items-center'>
            {/* BANNER-9 TEXT */}
            <div className='col-md-7 col-xl-5'>
              <div className='banner-9-txt'>
                {/* Title */}
                <h3 className='s-40 w-700'>{title}</h3>
                {/* Text */}
                <p className='p-lg'>{sub_title}</p>
                {/* Button */}
                <Link
                  href='/contacts'
                  className='btn r-04 btn--theme hover--theme'>
                  {button_text}
                </Link>
              </div>
            </div>
            {/* BANNER-9 IMAGE */}
            <div className='col-md-5 col-xl-5'>
              <div className='banner-9-img text-end'>
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
        {/* END BANNER-9 WRAPPER */}
      </div>{' '}
      {/* End container */}
    </section>
  )
}

export default HelpCenterBanner
