import { Media } from '@payload-types'
import Image from 'next/image'

export default function Ct02_21({
  features,
  background_image,
}: {
  features?: {
    s_no: number
    title: string
    description: string
    id?: string | null
  }[]
  background_image?: Media
}) {
  return (
    <>
      <section className='pt-100 ct-02 content-section division'>
        <div className='container'>
          {/* SECTION CONTENT (ROW) */}
          <div className='row d-flex align-items-center'>
            {/* IMAGE BLOCK */}
            <div className='col-md-6'>
              <div className='img-block left-column wow fadeInRight'>
                <Image
                  className='img-fluid'
                  src={background_image?.url || ''}
                  alt={background_image?.alt || ''}
                  height={1000}
                  width={1000}
                />
              </div>
            </div>
            {/* TEXT BLOCK */}
            <div className='col-md-6'>
              <div className='txt-block right-column wow fadeInLeft'>
                {/* CONTENT BOX #1 */}
                {features?.map((feature, index) => (
                  <div key={feature?.id} className='cbox-2 process-step'>
                    {/* Icon */}
                    <div className='ico-wrap'>
                      <div className='cbox-2-ico bg--theme color--white'>
                        {feature?.s_no}
                      </div>
                      <span className='cbox-2-line' />
                    </div>
                    {/* Text */}
                    <div className='cbox-2-txt'>
                      <h5 className='s-22 w-700'>{feature?.title}</h5>
                      <p>{feature?.description}</p>
                    </div>
                  </div>
                ))}
                {/* END CONTENT BOX #1 */}
              </div>
            </div>{' '}
            {/* END TEXT BLOCK */}
          </div>{' '}
          {/* END SECTION CONTENT (ROW) */}
        </div>{' '}
        {/* End container */}
      </section>
    </>
  )
}
