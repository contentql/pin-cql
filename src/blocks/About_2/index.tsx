import { Media } from '@payload-types'
import Image from 'next/image'

const About_2 = ({
  title,
  sub_title,
  image_1,
  image_2,
  image_3,
  image_4,
  text,
  name,
  designation,
}: {
  title?: string
  sub_title?: string
  image_1?: Media
  image_2?: Media
  image_3?: Media
  image_4?: Media
  text?: string
  name?: string
  designation?: string
}) => {
  return (
    <section
      id='about-2'
      className='rel inner-page-hero about-section division'>
      {/* ABOUT-2 TITLE */}
      <div className='container'>
        <div className='row'>
          <div className='col-md-11 col-lg-10 col-xl-9'>
            <div className='about-2-title mb-60'>
              {/* Title */}
              <h2 className='s-52 w-700 mb-30'>{title}</h2>
              {/* Text */}
              <p className='mb-0'>{sub_title}</p>
            </div>
          </div>
        </div>
      </div>{' '}
      {/* END ABOUT-2 TITLE */}
      {/* ABOUT-2 IMAGES */}
      <div className='container-fluid'>
        <div className='row'>
          {/* IMAGES-1 */}
          <div className='col-md-5'>
            <div className='text-end'>
              {/* IMAGE-1 */}
              <div className='about-2-img a-2-1 r-12'>
                <Image
                  className='img-fluid'
                  src={image_1?.url || ''}
                  alt={image_1?.alt || ''}
                  height={1000}
                  width={1000}
                />
              </div>
              {/* IMAGE-2 */}
              <div className='about-2-img a-2-2 r-12'>
                <Image
                  className='img-fluid'
                  src={image_2?.url || ''}
                  alt={image_2?.alt || ''}
                  height={1000}
                  width={1000}
                />
              </div>
            </div>
          </div>{' '}
          {/* END IMAGES-1 */}
          {/* IMAGES-2 */}
          <div className='col-md-7'>
            {/* IMAGE-3 */}
            <div className='about-2-img a-2-3 r-12'>
              <Image
                className='img-fluid'
                src={image_3?.url || ''}
                alt={image_3?.alt || ''}
                height={1000}
                width={1000}
              />
            </div>
            <div className='row'>
              {/* TEXT */}
              <div className='col-md-7 col-lg-6'>
                <div className='a2-txt bg--black-400 pattern-01 bg--fixed color--white r-12'>
                  {/* Icon */}
                  <div className='a2-txt-quote ico-40 o-20'>
                    <span className='flaticon-quote' />
                  </div>
                  {/* Text */}
                  <p>{text}</p>
                  {/* Author */}
                  <p className='a2-txt-author'>
                    {name} <span>{designation}</span>
                  </p>
                </div>
              </div>
              {/* IMAGE-4 */}
              <div className='col-md-5 col-lg-6'>
                <div className='about-2-img a-2-4 r-12'>
                  <Image
                    className='img-fluid'
                    src={image_4?.url || ''}
                    alt={image_4?.alt || ''}
                    height={1000}
                    width={1000}
                  />
                </div>
              </div>
            </div>{' '}
            {/* End row */}
          </div>{' '}
          {/* END IMAGES-2 */}
        </div>{' '}
        {/* End row */}
      </div>{' '}
      {/* END ABOUT-2 IMAGES */}
    </section>
  )
}

export default About_2
