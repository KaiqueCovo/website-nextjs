import Head from 'next/head'
import Image from 'next/image'

const Hello = () => (
  <>
  <Head>
    <title>Hello There :: My Blog</title>
    <meta property="og:title" content="Hello There :: My Blog" />
  </Head>
  <article>
    <Image 
    src="/post/hello-there/image.jpg" 
    width={648} 
    height={427} />
    <h1>Hello There</h1>
  </article>
  </>
)

export default Hello