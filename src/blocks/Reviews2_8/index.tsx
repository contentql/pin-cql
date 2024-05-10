import { Media } from '@payload-types'
import Image from 'next/image'

export default function Reviews2_8({
  title,
  subtitle,
  reviews,
}: {
  title?: string
  subtitle?: string
  reviews?: {
    review: string
    name: string
    designation: string
    reviewer_image: string | Media
    id?: string | null
  }[]
}) {
  return (
    <>
      <section id='reviews-2' className='pt-100 reviews-section'>
        <div className='container'>
          {/* SECTION TITLE */}
          <div className='row justify-content-center'>
            <div className='col-md-10 col-lg-9'>
              <div className='section-title mb-70'>
                {/* Title */}
                <h2 className='s-50 w-700'>{title}</h2>
                {/* Text */}
                <p className='s-21 color--grey'>{subtitle}</p>
              </div>
            </div>
          </div>
          {/* TESTIMONIALS-2 WRAPPER */}
          <div className='reviews-2-wrapper rel shape--02 shape--white-400'>
            <div className='row align-items-center row-cols-1 row-cols-md-2'>
              {/* TESTIMONIAL #1 */}
              {reviews?.map((review, index) => (
                <div key={review?.id} className='col'>
                  <div
                    id={`rw-2-${index + 1}`}
                    className='review-2 bg--white-100 block-shadow r-08'>
                    {/* Quote Icon */}
                    <div className='review-ico ico-65'>
                      <span className='flaticon-quote' />
                    </div>
                    {/* Text */}
                    <div className='review-txt'>
                      {/* Text */}
                      <p>{review?.review}</p>
                      {/* Author */}
                      <div className='author-data clearfix'>
                        {/* Avatar */}
                        <div className='review-avatar'>
                          <Image
                            src={(review?.reviewer_image as Media)?.url || ''}
                            alt={(review?.reviewer_image as Media)?.alt || ''}
                            height={50}
                            width={50}
                          />
                        </div>
                        {/* Data */}
                        <div className='review-author'>
                          <h6 className='s-18 w-700'>{review?.name}</h6>
                          <p className='p-sm'>{review?.designation}</p>
                        </div>
                      </div>{' '}
                      {/* End Author */}
                    </div>{' '}
                    {/* End Text */}
                  </div>
                </div>
              ))}{' '}
              {/* END TESTIMONIAL #1 */}
            </div>{' '}
            {/* End row */}
          </div>{' '}
          {/* END TESTIMONIALS-2 WRAPPER */}
        </div>{' '}
        {/* End container */}
      </section>
    </>
  )
}
