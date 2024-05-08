import { Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

export default function Lnk2_1({
  title,
  subtitle,
  heading,
  points,
  button_text,
  background_image,
}: {
  title?: string
  subtitle?: string
  heading?: string
  points?: {
    point: string
    id?: string | null
  }[]
  button_text?: string
  background_image?: Media
}) {
  return (
    <>
      <section id='lnk-2' className='pt-100 ct-02 content-section division'>
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
                {/* TEXT BOX */}
                <div className='txt-box'>
                  {/* Title */}
                  <h5 className='s-24 w-700'>{title}</h5>
                  {/* Text */}
                  <p>{subtitle}</p>
                </div>{' '}
                {/* END TEXT BOX */}
                {/* TEXT BOX */}
                <div className='txt-box mb-0'>
                  {/* Title */}
                  <h5 className='s-24 w-700'>{heading}</h5>
                  {/* List */}
                  <ul className='simple-list'>
                    {points?.map((point, index) => (
                      <li key={point?.id} className='list-item'>
                        <p>{point?.point}</p>
                      </li>
                    ))}
                  </ul>
                  {/* Button */}
                  <Link
                    href='#features-2'
                    className='btn btn-sm r-04 btn--tra-black hover--theme'>
                    {button_text}
                  </Link>
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
