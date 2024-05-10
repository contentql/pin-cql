import { Media } from '@payload-types'
import Image from 'next/image'

import VideoPopup from '@/app/(app)/_components/elements/VidepPopup'

export default function Lnk2_26({
  title,
  sub_title,
  background_image,
}: {
  title?: string
  sub_title?: string
  background_image?: Media
}) {
  return (
    <>
      <section
        id='lnk-2'
        className='bg--05 bg--scroll ct-10 content-section division'>
        <div className='section-overlay pt-100'>
          <div className='container'>
            {/* SECTION TITLE */}
            <div className='row justify-content-center'>
              <div className='col-md-10 col-lg-9'>
                <div className='section-title color--white mb-70'>
                  {/* Title */}
                  <h2 className='s-50 w-700'>{title}</h2>
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
                  <VideoPopup style={1} />
                  {/* Preview Image */}
                  <Image
                    className='img-fluid'
                    src={background_image?.url || ''}
                    alt={background_image?.alt || ''}
                    height={1500}
                    width={1500}
                  />
                </div>
              </div>
            </div>
          </div>{' '}
          {/* End container */}
        </div>{' '}
        {/* End section overlay */}
      </section>
    </>
  )
}
