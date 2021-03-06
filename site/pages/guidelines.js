import Link from 'next/link'
import { useEffect } from 'react'

export default function Page({ setPageDetails }) {
  useEffect(
    () =>
      setPageDetails({
        description:
          'Setting up some guidelines to work off of to create coding tutorials for beginners',
        image:
          'https://tutorial-thoughts.alanwsmith.com/og-images/guidelines.png',
        title: 'Tutorial Guidelines - Alan W. Smith',
        type: 'article',
        url: 'https://tutorial-thoughts.alanwsmith.com/guidelines',
      }),
    [setPageDetails]
  )

  return (
    <>
      <h1>Guidelines For Creating A Coding Tutorial [DRAFT]</h1>

      <h2>Preface</h2>
      <ul>
        <li>
          &quot;Tutorials&quot; is a very broad term. It covers different levels
          of detail designed for folks at varying levels of expertise. For
          purposes of these guidelines I&apos;m narrowing the consideration
          towards beginner level web tutorials designed to teach a reader who
          has enough prerequisite knowledge to follow along but no significant
          experience in the tutorial&apos;s topic.
        </li>
        <li>
          Furthering the scope definition, I love the way{' '}
          <a href="https://documentation.divio.com/">documentation.divio.com</a>{' '}
          splits documentation into four categories: tutorials (oriented towards
          learning), how-to guides (to solve a specific problem), explanation
          (adding in depth understanding), technical reference (the source of
          all the nitty-gritty details). While these guidelines can apply to all
          four styles, the focus is on the learning-oriented tutorials.
        </li>
        <li>
          It&apos;s well worth watching the talk detailing the different types
          of documentation from that page:{' '}
          <a href="https://www.youtube.com/watch?v=t4vKPhjcMZg">
            What nobody tells you about documentation
          </a>
        </li>

        <li>
          These are drafts. I&apos;m stating the guidelines declaratively, but
          I&apos;m still playing with them. They&apos;ll change. In some case
          may not hold up at all.
        </li>
        <li>
          There&apos;s no pedagogical research behind this. It&apos;s all based
          of my experience. I have a couple of decades experience programming. So,
          I&apos;m hardly a beginner, but I&apos;ve been learning a bunch of new
          stuff recently. That gives me a pseudo-beginner perspective that I&apos;m hoping can help bridge the gap back to folks earlier in their journeys.
        </li>
        <li>
          Not all guidelines will apply to all tutorials. (For example, the
          parts about style sheets won&apos;t be involved in tutorials on
          setting up serverless functions.) Some guidelines may even apply to
          one part of a tutorial but not another. Consider these tools in a
          toolkit. Not a set of parts that all have to be used like you would
          putting together a piece of furniture.
        </li>
        <li>
          I&apos;m not kidding about this being a draft. There are spelling and
          grammar errors floating around. The order of things is arbitrary too.
          I&apos;ll get to all that once I get the ideas down.
        </li>
        <li>
          Remember, these are guidelines, not rules. Think Happy Path, 80/20
          type stuff. Not an attempt to define the immutable laws of tutorial
          physics.
        </li>
        <li>TODO: Expand the examples with code snippets</li>
        <li>TODO: Shuffle things into a better order</li>
      </ul>

      <h2>The Guidelines</h2>

      <dl>
        <dt>Define the goal</dt>
        <dd>
          Make a clear, one sentence goal and write it down. If it takes more
          than one sentence, consider breaking things down into multiple smaller
          tutorials. They can be split out like chapters in a book, but keep the
          starting and ending points for each well defined and independent.{' '}
          Think{' '}
          <a href="https://en.wikipedia.org/wiki/Separation_of_concerns">
            separation of concerns
          </a>
          .
        </dd>
        <dt>Make sure the goal is learning</dt>
        <dd>
          The goal is not to get something done. The goal is to each a reader
          how to do it. That said, they don&apos;t need to walk away an expert.
          The goal is to move them up a run on the learning diagram (TODO: find a good link for the Dreyfus model of skill acquisition or similar). Said
          another way, they don&apos;t necessarily have to know why they are
          doing a thing, just that doing the thing gets the result they&apos;re
          after.
        </dd>

        <dt>Show every step</dt>
        <dd>
          Don&apos;t throw nineteen lines of code at the reader in one go with little
          more than a &quot;just do this&quot; type instruction. The goal is not
          to get something working. The goal is to teach the reader how to do
          the thing . Detail changes step by step so that folks who are earlier
          in their journey have the most support. Provide context and
          explication for each line. (The{' '}
          <Link href="/step-by-step-v1">
            <a>Step by step example</a>
          </Link>{' '}
          I&apos;m playing with is an example of this. There&apos;s work to be
          done on the interface to get descriptions closer to the code, but the
          concept feels right.)
        </dd>
        <dt>Build wrappers, then fill them</dt>
        <dd>
          Matching brackets, braces, and parenthesis is hard. When demonstrating
          code that contains when (especially things like react onClick handlers
          that have multiple closing elements stacked next to each other), place
          an empty wrapper first with nothing but the opening and closing fence
          posts. Add the content in the following steps.
        </dd>
        <dt>Create the if/else in one shot</dt>
        <dd>
          Not sure about this one yet, but the idea is a follow on to building
          wrappers first. The extension here is that you would build both
          elements of the if/else and then fill them. That might not work all
          the time, but it&apos;s something to investigate.
        </dd>
        <dt>
          Just show me the way to do it that I&apos;m going to actually use
        </dt>
        <dd>
          This one gets me all the time. Tutorials have a bad habit of showing
          one way to do something then saying, &quot;but no one does it that
          way, everyone uses this shortcut&quot;. The idea behind that approach
          is to provide more context, but it works at cross purposes. I dont
          have the context to make the contextual leap between two new things
          without having worked with them first. So, what happens with that
          approach is that I spend mental energy working to learn something that
          I&apos;m not going to use. Just show me what I need to actually be
          working with. If I run into a situation where I need to use the full
          thing I can deal with that when I get there and I&apos;ll have an
          understanding in place that
        </dd>
        <dt>Don&apos;t put in code you&apos;re going to remove</dt>
        <dd>
          his is related to just showing me the way I&apos;m actually going to
          do it. I&apos;ve hit several tutorials where you put in some code only
          to take it out a step or two later. The happy path for a learning
          tutorial is only to add code. Show me the one way to do it. Don&apos;t
          make me send mental energy setting things up one way only to flip to
          something else that I have to burn more mental energy on to replace.
        </dd>
        <dt>Pick a single path</dt>
        <dd>
          Don&apos;t offer multiple ways to do something. For example, at the
          start of the React Router tutorial it says &quot;Feel free to use your
          bundler of choice like Create React App or Vite.&quot; I don&apos;t
          have enough information to make that choice which causes a break in
          what I&apos;m trying to do and a lack in confidence. Just pick the
          Happy Path and go with that. If there&apos;s a large possibility of
          different options being used. Pick one to start with and then offer
          the other ones as options with &quot;if X doesn&apos;t work for you
          our you already have Y installed, you can use it instead like...&quot;
        </dd>
        <dt>Default to over-explaining</dt>
        <dd>
          folks can skim if they already know what&apos;s up, but beginners
          can&apos;t magic the knowledge out of thin air if it isn&apos;t on the
          page.
        </dd>
        <dt>Setup the scaffold one time and get it out of the way</dt>
        <dd>
          For example: don&apos;t put inline CSS styles or classes in tutorials
          that aren&apos;t about CSS. Make a single .css file for the reader to
          copy and paste at the beginning that uses elements instead of classes
          and have them put that in place and then ignore it for the rest of the
          tutorial.
        </dd>
        <dt>Consider not applying any styling</dt>
        <dd>
          For tutorials that aren&apos;t focused on CSS, how much is gained by
          styling compared to the visual and mental overhead it required.
        </dd>
        <dt>Label all the things</dt>
        <dd>
          Every code block should start with an indicator line that either defines
          the file it&apos;s for or states that it&apos;s a command for the
          terminal
        </dd>
        <dt>Don&apos;t try to pull double duty</dt>
        <dd>
          For example: even though a Windows version and Mac version of a
          tutorial might be mostly the same, they should be split to two
          separate things instead of sprinkling in &quot;if you are on windows
          do this but if you are on mac do that&quot; statements. Each one of
          those is noise for users of both operating systems. When were learning
          we look closely at everything and we ended up wasting energy parsing
          through that friction because we don&apos;t know if there&apos;s
          something we need in there or not.
        </dd>
        <dt>Don&apos;t add two of the same thing at once</dt>
        <dd>
          For example, in the React Router tutorial the section on adding routes
          has the reader add two routes at the same time. Adding one at a time
          reduces the size of the change and will have a more direct
          connection to the change. (Change one thing, see one change.) Adding
          the second thing as its own step also provides a better practice type
          reinforcement since the reader will know what to expect and can map
          their new knowledge onto what they are doing.
        </dd>
        <dt>Match syntax highlighting</dt>
        <dd>
          An ideal design would set a sane default for code syntax highlighting
          then allow the reader to switch to whatever theme they are using so
          what they see in the tutorial matches what they see in their editor.
          (This would include the ability to turn off syntax highlighting for
          folks that are working without it.)
        </dd>
        <dt>Separate deletions and additions</dt>
        <dd>
          The goal is to avoid adding code that&apos;s later removed but there
          will be times when that&apos;s appropriate. In those cases, make the
          deletion of code it&apos;s own step instead of trying to show an add
          and delete at the same time
        </dd>

        <dt>Almost always be compiling</dt>
        <dd>
          Whenever possible, the app should compile and run at the end of every
          step. When not possible, let the reader know in advance that they are
          going to see an error message.
        </dd>
        <dt>Explain the error</dt>
        <dd>
          When you have a step that causes an expected error break things down
          into two parts. The first is the change that produces the error
          (letting the reader know it&apos;s about to happen). Then, explain the
          error (and how to read it) in an independent follow up step.
        </dd>
        <dt>Better broken than overwhelming</dt>
        <dd>
          (TODO:combine with Explain the error) - If it requires a bunch of code
          to move from one working state to another with added functionality,
          break it into smaller steps that may include ones where the app
          doesn&apos;t compile/run or just generally errors out. Introducing
          those errors is fine given how much time we spend looking at them.
          It&apos;s also better to put an intentional error in front of someone
          so they are ready for it and you can explain it than to through a
          bunch of code at them with the highly likely result being a typo and
          an error message they have to troubleshoot themselves without context.
        </dd>
        <dt>Show as little as you can get away with</dt>
        <dd>
          There&apos;s a balance to showing as much as needed, but the direction
          should be to focus in as much as possible on just the lines that need
          to change. Other guidelines (like avoiding styles and creating
          wrappers then filling them) can help with this.
        </dd>
        <dt>Idea: Content comment markers</dt>
        <dd>
          For tutorials that require bigger sections of code, what about having
          the reader put in comments to identify sections. Not for everything,
          but just the main parts or enough to help scope down so examples are
          easier to pinpoint.
        </dd>
        <dt>Don&apos;t show incorrect line numbers</dt>
        <dd>
          For example: The Adding a No Match Rule section of the{' '}
          <a href="https://reactrouter.com/docs/en/v6/getting-started/tutorial#adding-a-no-match-route">
            React Router Tutorial
          </a>{' '}
          has a code snippet showing the addition to a &apos;src/main.jsx&apos; file. The
          snippet starts at line number one, but the code is actually further
          down in the file. (You can see an earlier version with the full
          contents of the file in the{' '}
          <a href="https://reactrouter.com/docs/en/v6/getting-started/tutorial#nested-routes">
            Nested Routes
          </a>{' '}
          section.
        </dd>
      </dl>
    </>
  )
}
