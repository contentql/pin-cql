import { Media } from '@payload-types'
import Image from 'next/image'

import VideoPopup from '@/app/(app)/_components/elements/VidepPopup'

const Hero28 = ({
  title,
  sub_title,
  background_image,
}: {
  title?: string
  sub_title?: string
  background_image?: Media
}) => {
  return (
    <section className='gr--whitesmoke ct-08 inner-page-hero content-section division'>
      <div className='container'>
        {/* SECTION TITLE */}
        <div className='row justify-content-center'>
          <div className='col-md-10 col-lg-9'>
            <div className='section-title mb-70'>
              {/* Title */}
              <h2 className='s-52 w-700'>{title}</h2>
              {/* Text */}
              <p className='s-21'>{sub_title}</p>
            </div>
          </div>
        </div>
        {/* IMAGE BLOCK */}
        <div className='row'>
          <div className='col'>
            <div className='img-block video-preview wow fadeInUp'>
              {/* Play Icon */}
              <VideoPopup style={2} />
              {/* Preview Image */}
              <Image
                className='img-fluid'
                src={background_image?.url || ''}
                alt={background_image?.alt || ''}
                height={2000}
                width={2000}
              />
            </div>
          </div>
        </div>
      </div>{' '}
      {/* End container */}
    </section>
  )
}

export default Hero28
