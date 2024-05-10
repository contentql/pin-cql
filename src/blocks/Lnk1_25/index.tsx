import { Media } from '@payload-types'
import Image from 'next/image'

export default function Lnk1_25({
  title,
  sub_title,
  heading1,
  description1,
  heading2,
  description2,
  points,
  background_image,
}: {
  title?: string
  sub_title?: string
  heading1?: string
  description1?: string
  heading2?: string
  description2?: string
  points?: {
    point: string
    id?: string | null
  }[]
  background_image?: Media
}) {
  return (
    <>
      <section id='lnk-1' className='pt-100 ct-02 content-section division'>
        <div className='container'>
          {/* SECTION TITLE */}
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <div className='section-title mb-70'>
                {/* Title */}
                <h2 className='s-48 w-700'>{title}</h2>
                {/* Text */}
                <p className='s-21 color--grey'>{sub_title}</p>
              </div>
            </div>
          </div>
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
                {/* TEXT BOX */}
                <div className='txt-box'>
                  {/* Title */}
                  <h5 className='s-24 w-700'>{heading1}</h5>
                  {/* Text */}
                  <p>{description1}</p>
                </div>{' '}
                {/* END TEXT BOX */}
                {/* TEXT BOX */}
                <div className='txt-box mb-0'>
                  {/* Title */}
                  <h5 className='s-24 w-700'>{heading2}</h5>
                  {/* Text */}
                  <p>{description2}</p>
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
          </div>{' '}
          {/* END SECTION CONTENT (ROW) */}
        </div>{' '}
        {/* End container */}
      </section>
    </>
  )
}
