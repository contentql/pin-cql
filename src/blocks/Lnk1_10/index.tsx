import { Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

export default function Lnk1_10({
  caption,
  title,
  subtitle,
  link_text,
  background_image,
}: {
  caption?: string
  title?: string
  subtitle?: string
  link_text?: string
  background_image?: Media
}) {
  return (
    <>
      <section id='lnk-1' className='pt-100 ws-wrapper content-section'>
        <div className='container'>
          <div className='bc-3-wrapper bg--04 bg--fixed hidd r-16'>
            <div className='section-overlay'>
              <div className='row d-flex align-items-center'>
                {/* TEXT BLOCK */}
                <div className='col-md-6 col-lg-5 order-last order-md-2'>
                  <div className='bc-3-txt wow fadeInRight'>
                    {/* Section ID */}
                    <span className='section-id'>{caption}</span>
                    {/* Title */}
                    <h2 className='s-44 w-700'>{title}</h2>
                    {/* Text */}
                    <p className='mb-0'>{subtitle}</p>
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
                <div className='col-md-6 col-lg-7 order-first order-md-2'>
                  <div className='bc-3-img wow fadeInLeft'>
                    <Image
                      className='img-fluid'
                      src={background_image?.url || ''}
                      alt={background_image?.alt || ''}
                      height={1500}
                      width={1500}
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
