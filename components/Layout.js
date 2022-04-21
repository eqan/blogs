import Head from 'next/head'
import Header from './Header'
import Search from './Search'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' href= {`${process.env.NEXT_PUBLIC_FAVICON}/images/logo.png`} />
      </Head>
      <Header />
      <Search />
      <main className='container mx-auto my-7'>{children}</main>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Eqan Ahmad | Blogs',
  keywords: 'development, coding, programming',
  description: 'My personal research and projects blogs.',
}
