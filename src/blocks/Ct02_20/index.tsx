import { Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

export default function Ct02_20({
  caption,
  title,
  paragraphs,
  link_text,
  background_image,
}: {
  caption?: string
  title?: string
  paragraphs?: {
    paragraph: string
    id?: string | null
  }[]
  link_text?: string
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
                {/* Section ID */}
                <span className='section-id'>{caption}</span>
                {/* Title */}
                <h2 className='s-44 w-700'>{title}</h2>
                {/* Text */}
                {paragraphs?.map((paragraph, index) => (
                  <p key={paragraph?.id}>{paragraph?.paragraph}</p>
                ))}
                {/* Text */}

                {/* Link */}
                <div className='txt-block-tra-link mt-25'>
                  <Link
                    href='#features-12'
                    className='tra-link ico-20 color--theme'>
                    {link_text}
                    <span className='flaticon-next' />
                  </Link>
                </div>
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
