import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Missing - 404</h1>
      <div>The page you&apos;re looking for could not be found</div>
      <div>
        Try{' '}
        <Link href="/">
          <a>starting over</a>
        </Link>
      </div>
    </>
  )
}
