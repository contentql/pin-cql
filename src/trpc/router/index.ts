import { publicProcedure, router } from '@/trpc'
import { getBlogs } from '@/trpc/router/blog-router'
import { GlobalRouter } from '@/trpc/router/global-router'
import { getLayouts } from '@/trpc/router/page-router'
import { todoRouter } from '@/trpc/router/todo'

export const appRouter = router({
  todo: todoRouter,
  page: getLayouts,
  blog: getBlogs,
  global: GlobalRouter,
  test: publicProcedure.query(async () => {
    return {
      success: 'working',
    }
  }),
})

export type AppRouter = typeof appRouter
