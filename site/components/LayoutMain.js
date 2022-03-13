import Link from 'next/link'
import HeadTag from './HeadTag'

export default function LayoutMain(props) {
  return (
    <>
      <HeadTag
        description={props.pageDetails.description}
        image={props.pageDetails.image}
        title={props.pageDetails.title}
        type={props.pageDetails.type}
        url={props.pageDetails.url}
      />
      <nav className="mt-6 mx-auto max-w-prose">
        <div className="border-b border-gray-700">
          <Link href="/">
            <a className="text-gray-500">tutorial-thoughts</a>
          </Link>{' '}
          ~{' '}
          <a href="https://www.alanwsmith.com" className="text-gray-500">
            alanwsmith.com
          </a>{' '}
          ~{' '}
          <a href="https://podcast.alanwsmith.com" className="text-gray-500">
            podcast
          </a>{' '}
          ~{' '}
          <a href="https://links.alanwsmith.com" className="text-gray-500">
            links
          </a>
        </div>
      </nav>
      <main className="pb-16 mx-auto pt-4 max-w-prose pr-28">
        {props.children}
      </main>
    </>
  )
}
