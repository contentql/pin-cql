import { Media } from '@payload-types'
import Image from 'next/image'

export default function Features2_5({
  title,
  sub_title,
  features,
}: {
  title?: string
  sub_title?: string
  features?: {
    title: string
    description: string
    feature_image_light: string | Media
    feature_image_dark: string | Media
    id?: string | null
  }[]
}) {
  return (
    <>
      <section id='features-2' className='py-100 features-section division'>
        <div className='container'>
          {/* SECTION TITLE */}
          <div className='row justify-content-center'>
            <div className='col-md-10 col-lg-9'>
              <div className='section-title mb-80'>
                {/* Title */}
                <h2 className='s-50 w-700'>{title}</h2>
                {/* Text */}
                <p className='s-21 color--grey'>{sub_title}</p>
              </div>
            </div>
          </div>
          {/* FEATURES-2 WRAPPER */}
          <div className='fbox-wrapper text-center'>
            <div className='row row-cols-1 row-cols-md-3'>
              {/* FEATURE BOX #1 */}
              {features?.map((feature, index) => (
                <div key={feature?.id} className='col'>
                  <div className={`fbox-2 fb-${index + 1} wow fadeInUp`}>
                    {/* Image */}
                    <div className='fbox-img gr--whitesmoke h-175'>
                      <Image
                        className='img-fluid light-theme-img'
                        src={(feature?.feature_image_light as Media)?.url || ''}
                        alt={(feature?.feature_image_light as Media)?.alt || ''}
                        height={500}
                        width={500}
                      />
                      <Image
                        className='img-fluid dark-theme-img'
                        src={(feature?.feature_image_dark as Media)?.url || ''}
                        alt={(feature?.feature_image_dark as Media)?.alt || ''}
                        height={500}
                        width={500}
                      />
                    </div>
                    {/* Text */}
                    <div className='fbox-txt'>
                      <h6 className='s-22 w-700'>{feature?.title}</h6>
                      <p>{feature?.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* END FEATURE BOX #1 */}
            </div>{' '}
            {/* End row */}
          </div>{' '}
          {/* END FEATURES-2 WRAPPER */}
        </div>{' '}
        {/* End container */}
      </section>
      <hr className='divider' />
    </>
  )
}
