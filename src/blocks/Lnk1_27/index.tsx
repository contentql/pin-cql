import { Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

export default function Lnk1_27({
  title,
  points,
  link_text,
  background_image,
}: {
  title?: string
  points?: {
    point?: string
    id?: string | null
  }[]
  link_text?: string
  background_image?: Media
}) {
  return (
    <>
      <section id='lnk-1' className='pt-80 ws-wrapper content-section'>
        <div className='container'>
          <div className='bc-1-wrapper bg--02 bg--fixed r-16'>
            <div className='section-overlay'>
              <div className='row d-flex align-items-center'>
                {/* TEXT BLOCK */}
                <div className='col-md-6 order-last order-md-2'>
                  <div className='txt-block left-column wow fadeInRight'>
                    {/* Title */}
                    <h2 className='s-46 w-700'>{title}</h2>
                    {/* List */}
                    <ul className='simple-list'>
                      {points?.map((point, index) => (
                        <li key={point?.id} className='list-item'>
                          <p>{point?.point}</p>
                        </li>
                      ))}
                    </ul>
                    {/* Link */}
                    <div className='txt-block-tra-link mt-25'>
                      <Link
                        href='#features-2'
                        className='tra-link ico-20 color--theme'>
                        {link_text} <span className='flaticon-next' />
                      </Link>
                    </div>
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
              {/* End row */}
            </div>{' '}
            {/* End section overlay */}
          </div>{' '}
          {/* End content wrapper */}
        </div>{' '}
        {/* End container */}
      </section>
    </>
  )
}
