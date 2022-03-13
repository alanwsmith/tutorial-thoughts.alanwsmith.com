import CodeBlock from '../../components/CodeBlock'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Step-by-Step V1 Overview</h1>
      <h2>TL;DR</h2>
      <p>
        <Link href="/step-by-step-v1/example-steps/1">
          <a>Skip to the Example</a>
        </Link>
      </p>
      <h2 className="mt-2">Preface</h2>
      <p>
        This is my first run at playing with tutorail design. It&apos;s a very
        early draft. I hadn&apos;t come up with the{' '}
        <Link href="/guidelines">
          <a>guidelines</a>
        </Link>{' '}
        yet. In fact, going through this process is what helped me start getting
        them down.
      </p>

      <h2 className="mt-2">Concept And Notes</h2>
      <p>(In no particular order)</p>
      <ul className="text-lg">
        <li>
          The core idea here is to make small changes and leave the code in a
          valid, running state at the end of each step.
        </li>
        <li>
          This approach leads to occastions of adding single lines of code that
          produce no visible functionality change. That is intentional. It
          allows for more fine grained explination of individual elements and
          makes it easier to catch typos via the increased frequency or running
          the code.
        </li>
        <li>
          This was my first run at this. Looking at it, I don&apos;t like the
          lenght of the pages. I&apos;ve got an idea to play around with for
          another example where the snippets are contracted and then can be
          expanded to see the rest of the file context. The descriptive text
          would be moved under the snippets similar to a caption of a photo.
        </li>

        <li>
          Another mode that I haven&apos;t put in the example yet is an
          intentional error for in-between steps that can&apos;t be competed in
          a straight-forward way without them.
        </li>
        <li>
          The micro-steps include individual steps for creating code that wraps
          other content seperately from putting the internal code in place. (See
          steps 6, 7, and 8 which build up the `onChange` listener.)
        </li>
        <li>
          I&apos;ve got syntax highlighting turned off as a test for the
          examples. The idea is to highlight the lines that change and have that
          be the only color in the sample to draw the eye more strongly.
        </li>
        <li>
          One intentional aspect of this appraoch is that each step is at
          it&apos;s own url so they can be bookmarked and linked to as
          references.
        </li>
        <li>
          The text I&apos;m using for the descriptions isn&apos;t meant to
          replace actual well written documentation. It&apos;s directionally
          accurate, but largely a stub for real content.
        </li>
        <li>
          The size of the text in the descriptions for each step changes height.
          That causes the code block to move up and down the page. There are
          some designs that would limit this that would be ideal (e.g. side by
          side on screens that are large enough) that I haven&apos;t added for
          this basic example.
        </li>
        <li>
          I haven&apos;t edited this yet. Please forgive mis-spellings,
          mis-grammars, and odd turns of phrase.
        </li>
        <li>
          Another thing to add is `Next` / `Prevous` navigation so you
          don&apos;t have to click a specific number
        </li>
        <li>
          The focus of this example is on the code block and the general
          approach. The design of the navigition can be improved.
        </li>
        <li>
          I&apos;m sure this isn&apos;t a new approach. Just another take on it.
          If you have similar examples, please send them my way.
        </li>
        <li>
          I would also remove the style calls from the code. If styling is
          needed, providing a single CSS file and telling folks to just drop it
          in seems a better option than having inline styles that add visual
          noise in the code.
        </li>
        <li>
          Thinking more about the length of files, it feels like a good goal
          would be to make files short enough that they don&apos;t need line
          numbers. That would reduce visual noise and avoid conflicts when folks
          doing the tutorial added extra white space lines are have a different
          formatter in play.
        </li>
        <li>
          The example is based on the React Router tutorial. Most of that
          original tutorial is done in small steps, but this section threw a lot
          of code out in one shot. I mis-typed some stuff and ended up having to
          bug hunt for a while. It was tough to triangulate where the issue was
          because of the number of lines that changes (19 in this case). That
          kind of thing burns mental energy and can be a huge blow to
          confidence. Hence this small-steps approach.
        </li>
        <li>
          You should be able to use this as a drop in replement for the{' '}
          <a href="https://reactrouter.com/docs/en/v6/getting-started/tutorial#search-params">
            Search Params
          </a>{' '}
          step in the original tutorial. (It&apos;s possible I busted stuff when
          doing the formatting. If some see something that doesn&apos;t work,
          let me know.)
        </li>
      </ul>
      <p>
        <Link href="/step-by-step-v1/example-steps/1">
          <a>Onward to the example</a>
        </Link>
      </p>
    </>
  )
}
