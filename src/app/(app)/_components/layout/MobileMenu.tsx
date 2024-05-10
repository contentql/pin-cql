'use client'

import { Header } from '@payload-types'
import Link from 'next/link'
import { useState } from 'react'

interface Props {
  headerData?: Header
}
export default function MobileMenu({ headerData }: Props) {
  const [isActive, setIsActive] = useState<{ status: boolean; key?: number }>({
    status: false,
    key: 0,
  })

  const handleToggle = (key: number) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      })
    } else {
      setIsActive({
        status: true,
        key,
      })
    }
  }
  return (
    <>
      <ul className='wsmenu-list nav-theme'>
        {/* DROPDOWN SUB MENU */}
        {/* <li  >
          <span
            className={
              isActive.key == 1 ? "wsmenu-click ws-activearrow" : "wsmenu-click"
            }
            onClick={() => handleToggle(1)}
          >
            <i className="wsmenu-arrow" />
          </span>
          <Link href="#" className="h-link">
            About <span className="wsarrow" />
          </Link>
          <ul
            className="sub-menu"
            style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}
          >
            <li  >
              <Link href="#lnk-1">Why ContentQL?</Link>
            </li>
            <li  >
              <Link href="#lnk-2">Integrations</Link>
            </li>
            <li  >
              <Link href="#lnk-3">How It Works</Link>
            </li>
            <li  >
              <Link href="#features-2">Best Solutions</Link>
            </li>
            <li  >
              <Link href="#reviews-1">Testimonials</Link>
            </li>
          </ul>
        </li> */}
        {/* SIMPLE NAVIGATION LINK */}
        {/* <li className="nl-simple"  >
          <Link href="#features-6" className="h-link">
            Features
          </Link>
        </li> */}
        {/* MEGAMENU */}
        <li className='mg_link'>
          <span
            className={
              isActive.key == 1 ? 'wsmenu-click ws-activearrow' : 'wsmenu-click'
            }
            onClick={() => handleToggle(1)}>
            <i className='wsmenu-arrow' />
          </span>
          <Link href='#' className='h-link'>
            product <span className='wsarrow' />
          </Link>
          <div
            className='wsmegamenu w-75 clearfix'
            style={{ display: `${isActive.key == 1 ? 'block' : 'none'}` }}>
            <div className='container'>
              <div className='row'>
                {/* MEGAMENU LINKS */}
                <ul className='col-md-12 col-lg-3 link-list'>
                  {headerData?.product_links?.map((product_link, index) => (
                    <li key={index} className='fst-li'>
                      <Link href={product_link?.path}>
                        {product_link?.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>{' '}
              {/* End row */}
            </div>{' '}
            {/* End container */}
          </div>{' '}
          {/* End wsmegamenu */}
        </li>{' '}
        {/* END MEGAMENU */}
        {/* SIMPLE NAVIGATION LINK */}
        <li className='nl-simple'>
          <Link href={headerData?.explore_path || ''} className='h-link'>
            Explore
          </Link>
        </li>
        {/* SIMPLE NAVIGATION LINK */}
        <li className='mg_link'>
          <span
            className={
              isActive.key == 2 ? 'wsmenu-click ws-activearrow' : 'wsmenu-click'
            }
            onClick={() => handleToggle(2)}>
            <i className='wsmenu-arrow' />
          </span>
          <Link href='#' className='h-link'>
            Resources <span className='wsarrow' />
          </Link>
          <div
            className='wsmegamenu w-75 clearfix'
            style={{ display: `${isActive.key == 2 ? 'block' : 'none'}` }}>
            <div className='container'>
              <div className='row'>
                {/* MEGAMENU LINKS */}
                <ul className='col-md-12 col-lg-3 link-list'>
                  {headerData?.resources1_links?.map(
                    (resources1_link, index) => (
                      <li key={index} className='fst-li'>
                        <Link href={resources1_link?.path}>
                          {resources1_link?.title}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
                {/* MEGAMENU LINKS */}
                <ul className='col-md-12 col-lg-3 link-list'>
                  {headerData?.resources2_links?.map(
                    (resources2_link, index) => (
                      <li key={index} className='fst-li'>
                        <Link href={resources2_link?.path}>
                          {resources2_link?.title}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
                {/* MEGAMENU LINKS */}
                {/* <ul className='col-md-12 col-lg-3 link-list'>
                  <li className='fst-li'>
                    <Link href='/pricing'>Pricing Page #1</Link>
                  </li>
                  <li>
                    <Link href='/pricing-2'>Pricing Page #2</Link>
                  </li>
                  <li>
                    <Link href='/faqs'>FAQs Page</Link>
                  </li>
                  <li>
                    <Link href='/help-center'>Help Center</Link>
                  </li>
                  <li>
                    <Link href='/404'>404 Page</Link>
                  </li>
                </ul> */}
                {/* MEGAMENU LINKS */}
                {/* <ul className='col-md-12 col-lg-3 link-list'>
                  <li className='fst-li'>
                    <Link href='/blog-listing'>Blog Listing</Link>
                  </li>
                  <li>
                    <Link href='/single-post'>Single Blog Post</Link>
                  </li>
                  <li>
                    <Link href='/login-2'>Login Page</Link>
                  </li>
                  <li>
                    <Link href='/signup-2'>Signup Page</Link>
                  </li>
                  <li>
                    <Link href='/reset-password'>Reset Password</Link>
                  </li>
                </ul> */}
              </div>{' '}
              {/* End row */}
            </div>{' '}
            {/* End container */}
          </div>{' '}
          {/* End wsmegamenu */}
        </li>{' '}
        {/* SIGN IN LINK */}
        <li className='nl-simple'>
          <Link href={headerData?.templates_path || ''} className='h-link'>
            Templates
          </Link>
        </li>
        {/* SIGN UP BUTTON */}
        <li className='nl-simple'>
          <Link
            href='https://cloud.contentql.io/guest'
            className='btn r-04 btn--theme hover--tra-white last-link'>
            Sign in
          </Link>
        </li>
      </ul>
    </>
  )
}
