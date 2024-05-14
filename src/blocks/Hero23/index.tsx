import { Media } from '@payload-types'
import Image from 'next/image'

import VideoPopup from '@/app/(app)/_components/elements/VidepPopup'

export default function Hero23({
  image,
  title,
  sub_title,
  background_image,
}: {
  image?: Media
  title?: string
  sub_title?: string
  background_image?: Media
}) {
  return (
    <>
      <section id='hero-23' className='bg--scroll hero-section'>
        <div className='container text-center'>
          {/* HERO TEXT */}
          <div className='row justify-content-center'>
            <div className='col-md-10 col-lg-9 col-xl-10'>
              <div className='hero-23-txt wow fadeInUp'>
                {/* Hero Logo  */}
                <div className='hero-square-logo'>
                  <Image
                    className='img-fluid'
                    src={image?.url || ''}
                    alt={image?.alt || ''}
                    height={500}
                    width={500}
                  />
                </div>
                {/* Title */}
                <h2 className='s-58 w-700'>{title}</h2>
                {/* Text */}
                <p className='p-xl'>{sub_title}</p>
              </div>
            </div>
          </div>{' '}
          {/*END HERO TEXT */}
          {/* HERO IMAGE */}
          <div className='row'>
            <div className='col'>
              <div className='hero-23-img video-preview wow fadeInUp'>
                {/* Play Icon */}
                <VideoPopup style={1} />
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
          </div>{' '}
          {/* END HERO IMAGE */}
        </div>{' '}
        {/* End container */}
        {/* WAVE SHAPE BOTTOM */}
        <div className='wave-shape-bottom'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
            <path
              fill='#ffffff'
              fillOpacity={1}
              d='M0,128L80,149.3C160,171,320,213,480,240C640,267,800,277,960,277.3C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
            />
          </svg>
        </div>
      </section>
    </>
  )
}
