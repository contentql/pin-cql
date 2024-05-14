import { Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

export default function Integrations1_8({
  title,
  subtitle,
  integrations,
}: {
  title?: string
  subtitle?: string
  integrations?: {
    title: string
    subtitle: string
    integration_image: string | Media
    id?: string | null
  }[]
}) {
  return (
    <>
      <section id='integrations-1' className='py-100 integrations-section'>
        <div className='container'>
          {/* SECTION TITLE */}
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <div className='section-title mb-70'>
                {/* Title */}
                <h2 className='s-48 w-700'>{title}</h2>
                {/* Text */}
                <p className='s-21 color--grey'>{subtitle}</p>
              </div>
            </div>
          </div>
          {/* INTEGRATIONS-1 WRAPPER */}
          <div className='integrations-1-wrapper'>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 rows-2'>
              {/* TOOL #1 */}
              {integrations?.map((integration, index) => (
                <div key={integration?.id} className='col'>
                  <Link
                    href='#'
                    className={`in_tool it-${index + 1} r-12 mb-30 wow fadeInUp`}>
                    {/* Icon */}
                    <div className='in_tool-logo-wrap'>
                      <div className='in_tool-logo ico-60'>
                        <Image
                          className='img-fluid'
                          src={
                            (integration?.integration_image as Media)?.url || ''
                          }
                          alt={
                            (integration?.integration_image as Media)?.url || ''
                          }
                          height={500}
                          width={500}
                        />
                      </div>
                    </div>
                    {/* Text */}
                    <div className='in_tool-txt'>
                      <h6 className='s-20 w-700'>{integration?.title}</h6>
                      <p className='p-sm'>{integration?.subtitle}</p>
                    </div>
                  </Link>
                </div>
              ))}
              {/* END FEATURE BOX #1 */}
            </div>
          </div>{' '}
          {/* END INTEGRATIONS-1 WRAPPER */}
          {/* MORE BUTTON */}
          <div className='row'>
            <div className='col'>
              <div className='more-btn text-center mt-60 wow fadeInUp'>
                <Link
                  href='/integrations'
                  className='btn btn--tra-black hover--theme'>
                  View all integrations
                </Link>
              </div>
            </div>
          </div>
        </div>{' '}
        {/* End container */}
      </section>
    </>
  )
}
