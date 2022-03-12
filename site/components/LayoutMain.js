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
      <nav className="mt-6 mx-auto max-w-4xl">
        <div className="border-b border-gray-700">
          <Link href="/">
            <a className="text-gray-500">Home</a>
          </Link>
        </div>
      </nav>
      <main className="pb-16 mx-auto pt-4 max-w-4xl text-lg pr-28">
        {props.children}
      </main>
    </>
  )
}
