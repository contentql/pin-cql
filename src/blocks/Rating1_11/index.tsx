import { Media } from '@payload-types'
import Image from 'next/image'

export default function Rating1_11({
  title,
  ratings,
}: {
  title?: string
  ratings?: {
    light_theme_image: string | Media
    dark_theme_image: string | Media
    rating: number
    rating_out_of: number
    id?: string | null
  }[]
}) {
  return (
    <>
      <div id='rating-1' className='pt-70 rating-section'>
        <div className='container'>
          {/* RATING TITLE */}
          <div className='row justify-content-center'>
            <div className='col-md-10 col-lg-9'>
              <div className='rating-title mb-40'>
                <h5 className='s-18 color--grey w-500'>{title}</h5>
              </div>
            </div>
          </div>
          {/* RATING-1 WRAPPER */}
          <div className='rating-1-wrapper'>
            <div className='row justify-content-md-center row-cols-1 row-cols-md-3'>
              {/* RATING BOX #1 */}
              {ratings?.map((rating, index) => (
                <div key={rating?.id} className='col'>
                  <div id={`rb-1-${index + 1}`} className='rbox-1'>
                    {/* Brand Logo */}
                    <div className='rbox-1-img'>
                      <Image
                        className='img-fluid light-theme-img'
                        src={(rating?.light_theme_image as Media)?.url || ''}
                        alt={(rating?.light_theme_image as Media)?.alt || ''}
                        height={500}
                        width={500}
                      />
                      <Image
                        className='img-fluid dark-theme-img'
                        src={(rating?.dark_theme_image as Media)?.url || ''}
                        alt={(rating?.dark_theme_image as Media)?.alt || ''}
                        height={500}
                        width={500}
                      />
                    </div>
                    {/* Rating Stars */}
                    <div className='star-rating ico-10 bg--white-100 r-100 clearfix'>
                      <span className='flaticon-star' />
                      <span className='flaticon-star' />
                      <span className='flaticon-star' />
                      <span className='flaticon-star' />
                      <span className='flaticon-star-half-empty mr-5' />
                      {rating?.rating}/{rating?.rating_out_of}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>{' '}
          {/* END RATING-1 WRAPPER */}
        </div>{' '}
        {/* End container */}
      </div>
    </>
  )
}
