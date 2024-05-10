import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { publicProcedure, router } from '@/trpc'

const payload = await getPayload({
  config: configPromise,
})

export const GlobalRouter = router({
  getHeader: publicProcedure.query(async () => {
    try {
      const headerData = await payload.findGlobal({
        slug: 'header',
      })

      return headerData
    } catch (error: any) {
      console.log(error)
      throw new Error(error.message)
    }
  }),

  getFooter: publicProcedure.query(async () => {
    try {
      const footerData = await payload.findGlobal({
        slug: 'footer',
      })

      return footerData
    } catch (error: any) {
      console.log(error)
      throw new Error(error.message)
    }
  }),
})
