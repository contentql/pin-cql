import { Media } from '@payload-types'
import Image from 'next/image'

const listOfIcons = [
  { icon: 'flaticon-paper-sizes', key: 'paper-sizes' },
  { icon: 'flaticon-layers-1', key: 'layers-1' },
  { icon: 'flaticon-pie-chart', key: 'pie-chart' },
]

export default function Ct01_37({
  features,
  background_image,
}: {
  features?: {
    title: string
    description: string
    id?: string | null
  }[]
  background_image?: Media
}) {
  return (
    <>
      <section className='pt-100 ct-01 content-section division'>
        <div className='container'>
          {/* SECTION CONTENT (ROW) */}
          <div className='row d-flex align-items-center'>
            {/* TEXT BLOCK */}
            <div className='col-md-6 order-last order-md-2'>
              <div className='txt-block left-column wow fadeInRight'>
                {/* CONTENT BOX #1 */}
                {features?.map((feature, index) => (
                  <div key={feature?.id} className='cbox-4'>
                    {/* Icon & Title */}
                    <div className='box-title'>
                      <span
                        className={`${listOfIcons[index]?.icon} color--theme`}
                      />
                      <h5 className='s-24 w-700'>{feature?.title}</h5>
                    </div>
                    {/* Text */}
                    <div className='cbox-4-txt'>
                      <p>{feature?.description}</p>
                    </div>
                  </div>
                ))}
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
          {/* END SECTION CONTENT (ROW) */}
        </div>{' '}
        {/* End container */}
      </section>
    </>
  )
}
