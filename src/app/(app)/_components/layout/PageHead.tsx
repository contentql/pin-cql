import Head from 'next/head'

const PageHead = ({ headTitle }: { headTitle?: string }) => {
  return (
    <>
      <Head>
        <>
          {headTitle
            ? headTitle
            : 'ContentQL - Software, App, SaaS & Startup Nextjs Landing Pages Pack'}
        </>
      </Head>
    </>
  )
}

export default PageHead
