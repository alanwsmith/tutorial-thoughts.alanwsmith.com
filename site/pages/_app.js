import '../styles/globals.css'
import LayoutMain from '../components/LayoutMain'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [pageDetails, setPageDetails] = useState({
    description: 'Another alan w. smith thing',
    image: 'https://nextjs-starter.alanwsmith.com/og-images/main.png',
    title: 'An Unnamed Website Of Alan',
    type: 'article',
    url: 'https://nextjs-starter.alanwsmith.com/',
  })

  return (
    <LayoutMain pageDetails={pageDetails}>
      <Component setPageDetails={setPageDetails} {...pageProps} />
    </LayoutMain>
  )
}

export default MyApp
