import { Media } from '@payload-types'
import Image from 'next/image'

export default function Ct01_7({
  title,
  sub_title,
  heading,
  paragraph,
  points,
  background_image,
}: {
  title?: string
  sub_title?: string
  heading?: string
  paragraph?: string
  points?: {
    point: string
    id?: string | null
  }[]
  background_image?: Media
}) {
  return (
    <>
      <section className='py-100 ct-01 content-section division'>
        <div className='container'>
          {/* SECTION CONTENT (ROW) */}
          <div className='row d-flex align-items-center'>
            {/* TEXT BLOCK */}
            <div className='col-md-6 order-last order-md-2'>
              <div className='txt-block left-column wow fadeInRight'>
                {/* TEXT BOX */}
                <div className='txt-box'>
                  {/* Title */}
                  <h5 className='s-24 w-700'>{title}</h5>
                  {/* Text */}
                  <p>{sub_title}</p>
                </div>{' '}
                {/* END TEXT BOX */}
                {/* TEXT BOX */}
                <div className='txt-box mb-0'>
                  {/* Title */}
                  <h5 className='s-24 w-700'>{heading}</h5>
                  {/* Text */}
                  <p>{paragraph}</p>
                  {/* List */}
                  <ul className='simple-list'>
                    {points?.map((point, index) => (
                      <li key={point?.id} className='list-item'>
                        <p>{point?.point}</p>
                      </li>
                    ))}
                  </ul>
                </div>{' '}
                {/* END TEXT BOX */}
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
