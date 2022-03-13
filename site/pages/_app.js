import '../styles/globals.css'
import LayoutMain from '../components/LayoutMain'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [pageDetails, setPageDetails] = useState({
    description: 'Playing with ideas for coding tutorial designs',
    image: 'https://tutorial-thoughts.alanwsmith.com/',
    title: 'Tutorial Thoughts - Alan W. Smith',
    type: 'article',
    url: 'https://tutorial-thoughts.alanwsmith.com/',
  })

  return (
    <LayoutMain pageDetails={pageDetails}>
      <Component setPageDetails={setPageDetails} {...pageProps} />
    </LayoutMain>
  )
}

export default MyApp
