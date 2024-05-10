import { Media } from '@payload-types'
import Image from 'next/image'

import VideoPopup from '@/app/(app)/_components/elements/VidepPopup'

const TextContent_1 = ({
  caption,
  title,
  paragraph,
  background_image,
}: {
  caption?: string
  title?: string
  paragraph?: string
  background_image?: Media
}) => {
  return (
    <section className='bg--04 bg--fixed py-100 ct-01 content-section division'>
      <div className='container'>
        <div className='row d-flex align-items-center'>
          {/* TEXT BLOCK */}
          <div className='col-md-6 order-last order-md-2'>
            <div className='txt-block left-column wow fadeInRight'>
              {/* Section ID */}
              <span className='section-id'>{caption}</span>
              {/* Title */}
              <h2 className='s-50 w-700'>{title}</h2>
              {/* Text */}
              <p className='p-lg'>{paragraph}</p>
            </div>
          </div>{' '}
          {/* END TEXT BLOCK */}
          {/* IMAGE BLOCK */}
          <div className='col-md-6 order-first order-md-2'>
            <div className='img-block j-img video-preview right-column wow fadeInLeft'>
              {/* Play Icon */}
              <VideoPopup style={2} />
              {/* Preview Image */}
              <Image
                className='img-fluid r-20'
                src={background_image?.url || ''}
                alt={background_image?.url || ''}
                height={1000}
                width={1000}
              />
            </div>
          </div>
        </div>{' '}
        {/* End row */}
      </div>{' '}
      {/* End container */}
    </section>
  )
}

export default TextContent_1
