import { Media } from '@payload-types'
import Image from 'next/image'

export default function Ct03_4({
  caption,
  title,
  points,
  background_image,
}: {
  caption?: string
  title?: string
  points?: {
    point: string
    id?: string | null
  }[]
  background_image?: Media
}) {
  return (
    <>
      <section className='py-100 ct-03 content-section division'>
        <div className='container'>
          <div className='row d-flex align-items-center'>
            {/* IMAGE BLOCK */}
            <div className='col-md-6 col-lg-7'>
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
            <div className='col-md-6 col-lg-5'>
              <div className='txt-block right-column wow fadeInLeft'>
                {/* Section ID */}
                <span className='section-id'>{caption}</span>
                {/* Title */}
                <h2 className='s-44 w-700'>{title}</h2>
                {/* List */}
                <ul className='simple-list'>
                  {points?.map((point, index) => (
                    <li key={point?.id} className='list-item'>
                      <p>{point?.point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>{' '}
            {/* END TEXT BLOCK */}
          </div>{' '}
          {/* End row */}
        </div>{' '}
        {/* End container */}
      </section>
    </>
  )
}
