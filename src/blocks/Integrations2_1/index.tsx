import { Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

export default function Integrations2_1({
  title,
  subtitle,
  integrations,
  button_text,
}: {
  title?: string
  subtitle?: string
  integrations?: {
    title: string
    integration_image: string | Media
    id?: string | null
  }[]
  button_text?: string
}) {
  return (
    <>
      <section id='integrations-2' className='pt-100 integrations-section'>
        <div className='container'>
          {/* INTEGRATIONS-2 WRAPPER */}
          <div className='integrations-2-wrapper bg--02 r-16 text-center'>
            {/* SECTION TITLE */}
            <div className='row justify-content-center'>
              <div className='col-md-10 col-lg-9'>
                <div className='section-title mb-50'>
                  {/* Title */}
                  <h2 className='s-50 w-700'>{title}</h2>
                  {/* Text */}
                  <p className='s-21 color--grey'>{subtitle}</p>
                </div>
              </div>
            </div>
            {/* TOOLS ROW */}
            <div className='row row-cols-1 row-cols-sm-3 row-cols-md-5'>
              {/* TOOL #1 */}
              {integrations?.map((integration, index) => (
                <div key={integration?.id} className='col'>
                  <Link
                    href='#'
                    className={`in_tool it-${index + 1} r-12 wow fadeInUp`}>
                    {/* Logo */}
                    <div className='in_tool_logo ico-65 bg--white-100 block-shadow r-12'>
                      <Image
                        className='img-fluid'
                        src={
                          (integration?.integration_image as Media)?.url || ''
                        }
                        alt={
                          (integration?.integration_image as Media)?.alt || ''
                        }
                        height={500}
                        width={500}
                      />
                    </div>
                    {/* Title */}
                    <h6 className='s-17 w-700'>{integration?.title}</h6>
                  </Link>
                </div>
              ))}
              {/* END TOOL #1 */}
            </div>{' '}
            {/* END TOOLS ROW */}
            {/* MORE BUTTON */}
            <div className='row'>
              <div className='col'>
                <div className='more-btn text-center mt-60 wow fadeInUp'>
                  <Link
                    href='/integrations'
                    className='btn btn--tra-black hover--theme'>
                    {button_text}
                  </Link>
                </div>
              </div>
            </div>
          </div>{' '}
          {/* END INTEGRATIONS-2 WRAPPER */}
        </div>{' '}
        {/* End container */}
      </section>
    </>
  )
}
