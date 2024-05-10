import { Media } from '@payload-types'
import Image from 'next/image'
import Link from 'next/link'

export default function Blog1_6({
  title,
  sub_title,
  blogs,
}: {
  title?: string
  sub_title?: string
  blogs?: {
    blog_image: string | Media
    caption: string
    title: string
    description: string
    bloger_name: string
    date: string
    id?: string | null
  }[]
}) {
  return (
    <>
      <section id='blog-1' className='py-100 blog-section division'>
        <div className='container'>
          {/* SECTION TITLE */}
          <div className='row justify-content-center'>
            <div className='col-md-10 col-lg-9'>
              <div className='section-title mb-70'>
                {/* Title */}
                <h2 className='s-52 w-700'>{title}</h2>
                {/* Text */}
                <p className='s-21 color--grey'>{sub_title}</p>
              </div>
            </div>
          </div>
          <div className='row'>
            {/* BLOG POST #1 */}
            {blogs?.map((blog, index) => (
              <div key={blog?.id} className='col-md-6 col-lg-4'>
                <div
                  id={`bp-1-${index + 1}`}
                  className='blog-post wow fadeInUp'>
                  {/* BLOG POST IMAGE */}
                  <div className='blog-post-img mb-35'>
                    <Image
                      className='img-fluid r-16'
                      src={(blog?.blog_image as Media)?.url || ''}
                      alt={(blog?.blog_image as Media)?.alt || ''}
                      height={500}
                      width={500}
                    />
                  </div>
                  {/* BLOG POST TEXT */}
                  <div className='blog-post-txt'>
                    {/* Post Tag */}
                    <span className='post-tag color--pink-400'>
                      {blog?.caption}
                    </span>
                    {/* Post Link */}
                    <h6 className='s-20 w-700'>
                      <Link href='/single-post'>{blog?.title}</Link>
                    </h6>
                    {/* Text */}
                    <p>{blog?.description}</p>
                    {/* Post Meta */}
                    <div className='blog-post-meta mt-20'>
                      <ul className='post-meta-list ico-10'>
                        <li>
                          <p className='p-sm w-500'>{blog?.bloger_name}</p>
                        </li>
                        <li className='meta-list-divider'>
                          <p>
                            <span className='flaticon-minus' />
                          </p>
                        </li>
                        <li>
                          <p className='p-sm'>{blog?.date}</p>
                        </li>
                      </ul>
                    </div>
                  </div>{' '}
                  {/* END BLOG POST TEXT */}
                </div>
              </div>
            ))}
            {/* END BLOG POST #1 */}
          </div>{' '}
          {/* End row */}
        </div>{' '}
        {/* End container */}
      </section>
      <hr className='divider' />
    </>
  )
}
