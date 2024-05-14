import { Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

const Banner_12 = ({
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
    <section id='banner-12' className='banner-section'>
      <div className='container'>
        {/* BANNER-12 WRAPPER */}
        <div className='banner-12-wrapper bg--05 bg--fixed r-16'>
          <div className='banner-overlay'>
            <div className='row d-flex align-items-center'>
              {/* BANNER-12 TEXT */}
              <div className='col-md-7'>
                <div className='banner-12-txt color--white'>
                  {/* Title */}
                  <h2 className='s-45 w-700'>{title}</h2>
                  {/* Text */}
                  <p className='p-lg'>{sub_title}</p>
                  {/* Button */}
                  <Link
                    href='#careers-1'
                    className='btn r-04 btn--theme hover--tra-white'>
                    {button_text}
                  </Link>
                </div>
              </div>{' '}
              {/* END BANNER-12 TEXT */}
              {/* BANNER-12 IMAGE */}
              <div className='col-md-5'>
                <div className='banner-12-img text-center'>
                  <Image
                    className='img-fluid'
                    src={background_image?.url || ''}
                    alt={background_image?.url || ''}
                    height={1000}
                    width={1000}
                  />
                </div>
              </div>
            </div>{' '}
            {/* End row */}
          </div>{' '}
          {/* End banner overlay */}
        </div>{' '}
        {/* END BANNER-12 WRAPPER */}
      </div>{' '}
      {/* End container */}
    </section>
  )
}

export default Banner_12
