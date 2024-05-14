import { Media } from '@payload-types'
import Image from 'next/image'

import VideoPopup from '@/app/(app)/_components/elements/VidepPopup'

export default function Lnk1_5({
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
      <section id='lnk-1' className='pt-100 ws-wrapper content-section'>
        <div className='container'>
          <div className='bc-5-wrapper bg--02 hidd bg--scroll r-16'>
            <div className='section-overlay'>
              {/* SECTION TITLE */}
              <div className='row justify-content-center'>
                <div className='col-md-11 col-lg-9'>
                  <div className='section-title wow fadeInUp mb-60'>
                    {/* Title */}
                    <h2 className='s-50 w-700'>{title}</h2>
                    {/* Text */}
                    <p className='p-xl'>{sub_title}</p>
                  </div>
                </div>
              </div>
              {/* IMAGE BLOCK */}
              <div className='row justify-content-center'>
                <div className='col'>
                  <div className='bc-5-img bc-5-tablet img-block-hidden video-preview wow fadeInUp'>
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
            {/* End section overlay */}
          </div>{' '}
          {/* End content wrapper */}
        </div>{' '}
        {/* End container */}
      </section>
    </>
  )
}
