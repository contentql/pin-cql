import '/public/css/animate.css'
import '/public/css/bootstrap.min.css'
import '/public/css/demo.css'
import '/public/css/dropdown-effects/fade-down.css'
import '/public/css/flaticon.css'
import '/public/css/lunar.css'
import '/public/css/menu.css'
import '/public/css/pink-theme.css'
import '/public/css/responsive.css'
import type { Metadata } from 'next'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import "/public/css/magnific-popup.css"
// import "/public/css/owl.carousel.min.css"
// import "/public/css/owl.theme.default.min.css"
// import SmoothScroll from "../components/elements/SmoothScroll"
import { serverClient } from '@/trpc/serverClient'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headerData = await serverClient.global.getHeader()
  const footerData = await serverClient.global.getFooter()

  return (
    <html lang='en'>
      <body>
        {/* <Layout
          headerStyle={1}
          footerStyle={3}
          headerCls='navbar-dark inner-page-header'
          headerData={headerData}
          footerData={footerData}> */}
        {children}
        {/* </Layout> */}
      </body>
    </html>
  )
}
