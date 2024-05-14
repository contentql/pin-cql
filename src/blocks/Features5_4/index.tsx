import { Media } from '@payload-types'
import Image from 'next/image'

export default function Features5_4({
  title,
  sub_title,
  feature1_title,
  feature1_description,
  feature2_title,
  feature2_description,
  feature1_image_light,
  feature1_image_dark,
  feature2_image_light,
  feature2_image_dark,
}: {
  title?: string
  sub_title?: string
  feature1_title?: string
  feature1_description?: string
  feature2_title?: string
  feature2_description?: string
  feature1_image_light?: Media
  feature1_image_dark?: Media
  feature2_image_light?: Media
  feature2_image_dark?: Media
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
                <div className='fbox-5 fb-1 gr--smoke r-16 wow fadeInUp'>
                  {/* Text */}
                  <div className='fbox-txt order-last order-md-2'>
                    <h5 className='s-26 w-700'>{feature1_title}</h5>
                    <p>{feature1_description}</p>
                  </div>
                  {/* Image */}
                  <div className='fbox-5-img order-first order-md-2'>
                    <Image
                      className='img-fluid light-theme-img'
                      src={feature1_image_light?.url || ''}
                      alt={feature1_image_light?.alt || ''}
                      height={1000}
                      width={1000}
                    />
                    <Image
                      className='img-fluid dark-theme-img'
                      src={feature1_image_dark?.url || ''}
                      alt={feature1_image_dark?.alt || ''}
                      height={1000}
                      width={1000}
                    />
                  </div>
                </div>
              </div>{' '}
              {/* END FEATURE BOX #1 */}
              {/* FEATURE BOX #2 */}
              <div className='col-md-6'>
                <div className='fbox-5 fb-2 gr--smoke r-16 wow fadeInUp'>
                  {/* Image */}
                  <div className='fbox-5-img'>
                    <Image
                      className='img-fluid light-theme-img'
                      src={feature2_image_light?.url || ''}
                      alt={feature2_image_light?.alt || ''}
                      height={1000}
                      width={1000}
                    />
                    <Image
                      className='img-fluid dark-theme-img'
                      src={feature2_image_dark?.url || ''}
                      alt={feature2_image_dark?.alt || ''}
                      height={1000}
                      width={1000}
                    />
                  </div>
                  {/* Text */}
                  <div className='fbox-txt'>
                    <h5 className='s-26 w-700'>{feature2_title}</h5>
                    <p>{feature2_description}</p>
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
