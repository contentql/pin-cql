import { Media } from '@payload-types'

import ReviewSlider1 from '@/app/(app)/_components/slider/ReviewSlider1'

export default function Reviews1_1({
  title,
  sub_title,
  reviews,
}: {
  title?: string
  sub_title?: string
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
      <section
        id='reviews-1'
        className='pt-100 shape--06 shape--gr-whitesmoke reviews-section'>
        <div className='container'>
          {/* SECTION TITLE */}
          <div className='row justify-content-center'>
            <div className='col-md-10 col-lg-9'>
              <div className='section-title mb-70'>
                {/* Title */}
                <h2 className='s-50 w-700'>{title}</h2>
                {/* Text */}
                <p className='s-21 color--grey'>{sub_title}</p>
              </div>
            </div>
          </div>
          {/* TESTIMONIALS CONTENT */}
          <div className='row'>
            <div className='col'>
              <ReviewSlider1 reviews={reviews} />
            </div>
          </div>{' '}
          {/* END TESTIMONIALS CONTENT */}
        </div>{' '}
        {/* End container */}
      </section>
    </>
  )
}
