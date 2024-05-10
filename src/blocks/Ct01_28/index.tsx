import { Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

export default function Ct01_28({
  caption,
  title,
  paragraphs,
  background_image,
}: {
  caption?: string
  title?: string
  paragraphs?: {
    paragraph: string
    id?: string | null
  }[]
  background_image?: Media
}) {
  return (
    <>
      <section className='bg--white-400 py-100 ct-01 content-section division'>
        <div className='container'>
          {/* SECTION CONTENT (ROW) */}
          <div className='row d-flex align-items-center'>
            {/* TEXT BLOCK */}
            <div className='col-md-6 order-last order-md-2'>
              <div className='txt-block left-column wow fadeInRight'>
                {/* Section ID */}
                <span className='section-id color--grey'>{caption}</span>
                {/* Title */}
                <h2 className='s-46 w-700'>{title}</h2>
                {/* Text */}
                {paragraphs?.map(paragraph => (
                  <p key={paragraph?.id}>{paragraph?.paragraph}</p>
                ))}
                {/* Link */}
                <div className='txt-block-tra-link mt-25'>
                  <Link
                    href='#features-5'
                    className='tra-link ico-20 color--theme'>
                    Friendly with others <span className='flaticon-next' />
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
          {/* END SECTION CONTENT (ROW) */}
        </div>{' '}
        {/* End container */}
      </section>
    </>
  )
}
