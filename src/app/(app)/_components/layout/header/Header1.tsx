import Menu from '../Menu'
import MobileMenu from '../MobileMenu'
import Image from 'next/image'
import Link from 'next/link'

import { Header, Media } from '@/payload-types'

interface Props {
  scroll: boolean
  isMobileMenu: boolean
  handleMobileMenu: () => void
  headerCls?: string
  headerData?: Header
}

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  headerCls,
  headerData,
}: Props) {
  return (
    <>
      <header
        id='header'
        className={`tra-menu white-scroll ${headerCls ? headerCls : ''}`}>
        <div className='header-wrapper'>
          {/* MOBILE HEADER */}
          <div className='wsmobileheader clearfix'>
            <span className='smllogo'>
              <Image
                src={(headerData?.logo_pink as Media)?.url || ''}
                alt={(headerData?.logo_pink as Media)?.alt || ''}
                height={500}
                width={500}
              />
            </span>
            <a
              id='wsnavtoggle'
              className='wsanimated-arrow'
              onClick={handleMobileMenu}>
              <span />
            </a>
          </div>
          {/* NAVIGATION MENU */}
          <div className={`wsmainfull menu clearfix ${scroll ? 'scroll' : ''}`}>
            <div className='wsmainwp clearfix'>
              {/* HEADER BLACK LOGO */}
              <div className='desktoplogo'>
                <Link href='/' className='logo-black'>
                  <Image
                    src={(headerData?.logo_pink as Media)?.url || ''}
                    className='light-theme-img'
                    alt={(headerData?.logo_pink as Media)?.alt || ''}
                    height={500}
                    width={500}
                  />
                  <Image
                    src={(headerData?.logo_pink_white as Media)?.url || ''}
                    className='dark-theme-img'
                    alt={(headerData?.logo_pink_white as Media)?.alt || ''}
                    height={500}
                    width={500}
                  />
                </Link>
              </div>
              {/* HEADER WHITE LOGO */}
              <div className='desktoplogo'>
                <Link href='#hero-1' className='logo-white'>
                  <Image
                    src={(headerData?.logo_white as Media)?.url || ''}
                    alt={(headerData?.logo_white as Media)?.alt || ''}
                    height={500}
                    width={500}
                  />
                </Link>
              </div>
              {/* MAIN MENU */}
              <nav
                className='wsmenu clearfix'
                style={{ height: `${isMobileMenu ? '100vh' : ''}` }}>
                {isMobileMenu ? (
                  <MobileMenu headerData={headerData} />
                ) : (
                  <Menu headerData={headerData} />
                )}
              </nav>{' '}
              {/* END MAIN MENU */}
            </div>
          </div>{' '}
          {/* END NAVIGATION MENU */}
        </div>{' '}
        {/* End header-wrapper */}
      </header>
    </>
  )
}
