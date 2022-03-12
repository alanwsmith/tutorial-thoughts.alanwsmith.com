import Link from 'next/link'
import CodeBlock from '../components/CodeBlock'
import { useEffect } from 'react'

export default function HomePage({ setPageDetails }) {
  const exampleCode = `
const some_var = 'a value'
const some_object = { key: 'value' }
`

  // Set the defaults for pageDetails in _app.js and
  // then override them here for each page. Note that
  // `type` should be 'website' for the home page

  useEffect(
    () =>
      setPageDetails({
        description:
          'Thinking about different ways to layout and design programming tutorials',
        image: 'https://tutorial-thoughts.alanwsmith.com/og-images/main.png',
        title: 'Tutorial Thoughts - Alan W. Smith',
        type: 'website',
        url: 'https://tutorial-thoughts.alanwsmith.com/',
      }),
    [setPageDetails]
  )

  return (
    <>
      <h1>Tutorail Thoughts</h1>
      <p>Playing with ideas for tutorial layouts and execution</p>
      <ul>
        <li>
          <Link href="/step-by-step-v1">
            <a>Step by Step V1</a>
          </Link>
        </li>
      </ul>
    </>
  )
}
