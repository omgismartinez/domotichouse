import Head from 'next/head'
import Navbar from './navbar'

export default function Layout({ children, title }) {
    return (
        <div className='container lg:px-32 md:px-12 px-4'>
            <Head>
                <title>{title}</title>
                <meta name={title} content={title} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

      <Navbar />

      <main className='main'>{children}</main>
    </div>
  );
}
