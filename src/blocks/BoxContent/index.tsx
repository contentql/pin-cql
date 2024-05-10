import { Media } from '@payload-types'
import Image from 'next/image'

const BoxContent = ({
  caption,
  title,
  sub_title,
  heading,
  description,
  background_image,
}: {
  caption?: string
  title?: string
  sub_title?: string
  heading?: string
  description?: string
  background_image?: Media
}) => {
  return (
    <section className='pt-100 ws-wrapper content-section'>
      <div className='container'>
        <div className='bc-1-wrapper bg--02 bg--fixed r-16'>
          <div className='section-overlay'>
            <div className='row d-flex align-items-center'>
              {/* TEXT BLOCK */}
              <div className='col-md-6 order-last order-md-2'>
                <div className='txt-block left-column wow fadeInRight'>
                  {/* Section ID */}
                  <span className='section-id'>{caption}</span>
                  {/* Title */}
                  <h2 className='s-46 w-700'>{title}</h2>
                  {/* Text */}
                  <p>{sub_title}</p>
                  {/* Small Title */}
                  <h5 className='s-24 w-700 h5-title'>{heading}</h5>
                  {/* Text */}
                  <p className='mb-0'>{description}</p>
                </div>
              </div>{' '}
              {/* END TEXT BLOCK */}
              {/* IMAGE BLOCK */}
              <div className='col-md-6 order-first order-md-2'>
                <div className='img-block right-column wow fadeInLeft'>
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
          {/* End section overlay */}
        </div>{' '}
        {/* End content wrapper */}
      </div>{' '}
      {/* End container */}
    </section>
  )
}

export default BoxContent
