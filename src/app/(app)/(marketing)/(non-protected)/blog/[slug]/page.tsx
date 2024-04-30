import { Blog } from '@payload-types'

import AllPages from '@/components/AllPages'
import { serverClient } from '@/trpc/serverClient'

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params

  const blog = await serverClient.blog.getBlogBySlug({ slug })

  return <AllPages slug={slug} data={blog as Blog} />
}

export default Page