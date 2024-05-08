import { Media } from '@payload-types'
import Image from 'next/image'

export default function Features5_1({
  title,
  sub_title,
  heading1,
  light_theme_image1,
  dark_theme_image1,
  light_theme_image2,
  dark_theme_image2,
  heading2,
  description1,
  description2,
}: {
  title?: string
  sub_title?: string
  heading1?: string
  light_theme_image1?: Media
  dark_theme_image1?: Media
  light_theme_image2?: Media
  dark_theme_image2?: Media
  heading2?: string
  description1?: string
  description2?: string
}) {
  return (
    <>
      <section id='features-5' className='pt-100 features-section division'>
        <div className='container'>
          {/* SECTION TITLE */}
          <div className='row justify-content-center'>
            <div className='col-md-10 col-lg-9'>
              <div className='section-title mb-70'>
                {/* Title */}
                <h2 className='s-50 w-700'>{title}</h2>
                {/* Text */}
                <p className='s-21 color--grey'>{sub_title}</p>
              </div>
            </div>
          </div>
          {/* FEATURES-5 WRAPPER */}
          <div className='fbox-wrapper text-center'>
            <div className='row d-flex align-items-center'>
              {/* FEATURE BOX #1 */}
              <div className='col-md-6'>
                <div className='fbox-5 fb-1 bg--white-400 r-16 wow fadeInUp'>
                  {/* Text */}
                  <div className='fbox-txt order-last order-md-2'>
                    <h5 className='s-26 w-700'>{heading1}</h5>
                    <p>{description1}</p>
                  </div>
                  {/* Image */}
                  <div className='fbox-5-img order-first order-md-2'>
                    <Image
                      className='img-fluid light-theme-img'
                      src={light_theme_image1?.url || ''}
                      alt={light_theme_image1?.alt || ''}
                      height={1000}
                      width={1000}
                    />
                    <Image
                      className='img-fluid dark-theme-img'
                      src={dark_theme_image1?.url || ''}
                      alt={dark_theme_image1?.alt || ''}
                      height={1000}
                      width={1000}
                    />
                  </div>
                </div>
              </div>{' '}
              {/* END FEATURE BOX #1 */}
              {/* FEATURE BOX #2 */}
              <div className='col-md-6'>
                <div className='fbox-5 fb-2 bg--white-400 r-16 wow fadeInUp'>
                  {/* Image */}
                  <div className='fbox-5-img'>
                    <Image
                      className='img-fluid light-theme-img'
                      src={light_theme_image2?.url || ''}
                      alt={light_theme_image2?.alt || ''}
                      height={1000}
                      width={1000}
                    />
                    <Image
                      className='img-fluid dark-theme-img'
                      src={dark_theme_image2?.url || ''}
                      alt={dark_theme_image2?.alt || ''}
                      height={1000}
                      width={1000}
                    />
                  </div>
                  {/* Text */}
                  <div className='fbox-txt'>
                    <h5 className='s-26 w-700'>{heading2}</h5>
                    <p>{description2}</p>
                  </div>
                </div>
              </div>{' '}
              {/* END FEATURE BOX #2 */}
            </div>{' '}
            {/* End row */}
          </div>{' '}
          {/* END FEATURES-5 WRAPPER */}
        </div>{' '}
        {/* End container */}
      </section>
    </>
  )
}
