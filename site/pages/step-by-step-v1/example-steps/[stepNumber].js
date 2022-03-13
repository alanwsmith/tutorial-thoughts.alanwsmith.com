import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Snippet1 from './snippets/1'
import Snippet2 from './snippets/2'
import Snippet3 from './snippets/3'
import Snippet4 from './snippets/4'
import Snippet5 from './snippets/5'
import Snippet6 from './snippets/6'
import Snippet7 from './snippets/7'
import Snippet8 from './snippets/8'
import Snippet9 from './snippets/9'
import Snippet10 from './snippets/10'

export default function Page() {
  const router = useRouter()
  let { stepNumber } = router.query

  const [currentStep, setCurrentStep] = useState(2)
  const steps = [
    {},
    {
      snippet: <Snippet1 />,
      preface: (
        <ul>
          <li>
            This is our starting point. In production, we&apos;d have built to
            this state in the same way that this example shows moving forward.
            Instead, I&apos;m starting here to make the examples clearer.
          </li>
          <li>
            The most important point with this approach is that the code is left
            in a working condition at the end of each step unless explicitly
            noted that it won&apos;t be.
          </li>
        </ul>
      ),
    },
    {
      snippet: <Snippet2 />,
      preface: (
        <ul>
          <li>Add `useSearchParams` to the top `import` statement.</li>
          <li>
            You won&apos;t see any changes with this addition. It&apos;s purpose
            is to setup for the next steps.
          </li>
        </ul>
      ),
    },
    {
      snippet: <Snippet3 />,
      preface: (
        <ul>
          <li>
            Now that `useSearchParams` is imported, the next step is to setup
            the variables to use it and set it.
          </li>
          <li>
            This won&apos;t cause any visible changes on the page either.{' '}
          </li>
        </ul>
      ),
    },
    {
      snippet: <Snippet4 />,
      preface: (
        <ul>
          <li>Here, we&apos;ll add an initial {`<input />`} tag.</li>
          <li>
            A new text box will show up on the page that you can type in, but it
            won&apos;t do anything else yet.
          </li>
          <li>
            We&apos;ll leave an empty line between the opening and closing of
            the tag where we&apos;ll write the code to add functionality in the
            next steps
          </li>
        </ul>
      ),
    },
    {
      snippet: <Snippet5 />,
      preface: (
        <ul>
          <li>
            Now we&apos;ll starting adding some fuctonationly to the input tag.
          </li>
          <li>
            This line uses `searchParams` to grab data from the URL via
            `searchParams.get(&quot;filter&quot;)`
          </li>
          <li>
            The &quot;filter&quot; argument tells the code to look at the URL
            and grab a parameter named &quot;filter&quot; if it exists
          </li>
          <li>(... More explicaiton goes here about how value works ...)</li>
          <li>
            One you have the code in place you can see it populating the text
            box by adding `?filter=something` to the end of the URL like this
            `http://localhost:3000/invoices/1998?filter=howdy`
          </li>
          <li>
            You&apos;ll notice that you can&apos;t type in the box directly.
            We&apos;ll address that in the next step
          </li>
        </ul>
      ),
    },
    {
      snippet: <Snippet6 />,
      preface: (
        <ul>
          <li>
            This is another minor step. We&apos;re adding an onChange event
            listener to the input tag.{' '}
          </li>
          <li>
            We&apos;re not putting code in it yet. This is just a step to get us
            prepped for that. As before we&apos; are leaving an empty line in
            place where the next step of code will go.
          </li>
          <li>We still can&apos;t type in the input box, btw.</li>
        </ul>
      ),
    },
    {
      snippet: <Snippet7 />,
      preface: (
        <ul>
          <li>
            Now we&apos;all add a line to set a variable named filter inside our
            onChange listener.
          </li>
          <li>
            This code takes the event (TKTKTK more info on events) of which the
            'target' is the element itself. In our case, that&apos;s the 'input'
            tag.
          </li>
          <li>
            The `.value` captures whatever the value of the input text box is at
            the time of the event. In other words, whatever is in the input box
            gets pulled into the 'filter' variable
          </li>
          <li>
            Still can not type in the text box. That gets fixed in the next step
          </li>
        </ul>
      ),
    },
    {
      snippet: <Snippet8 />,
      preface: (
        <ul>
          <li>
            There&apos;s a few lines to this chage that include both and `if`
            and the correspoding `else`
          </li>
          <li>This is where we can start typeing into the text box again</li>
          <li>
            We look to see if there is a value in the `filter` variable. If
            there is, we call `setSearchParams` with the value.
          </li>
          <li>
            When `setSearchParams` makes the update it changes the URL address
          </li>
          <li>
            The change in the address cascades down into the text box via the
            `searchParams.get("filter")` call we setup in step 5
          </li>
          <li>
            If there is no value, things get emptied out by calling
            `setSearchParams()` with an empty object (i.e. {`\`{}\``})
          </li>
          <li>
            So, we can type stuff and update the URL with the search parameter
            (which will let us bookmark searches), but nothing is happing with
            the list. We start to handle that next
          </li>
        </ul>
      ),
    },
    {
      snippet: <Snippet9 />,
      preface: (
        <ul>
          <li>This step makes things disappear for a bit.</li>
          <li>
            We&apos;re adding a '.filter()' to our loop throught he 'invoices'
            array where we look at each 'invoice' to see if it passes a test we
            apply or not.
          </li>
          <li>
            If an individual invoice passes the test criteria it passes on to
            the map function. Otherwise, it gets removed temporarily from the
            list
          </li>
          <li>
            We start by adding the '.filter()' in without and contents. Because
            there is no test, there is nothing to pass and all the items are
            filtered out. That&apos; why nothing shows up
          </li>
          <li>
            If you get an error, the first thing to look at is the closing curly
            bracket and parethesis. It is very easy to mess those up.
          </li>
        </ul>
      ),
    },
    {
      snippet: <Snippet10 />,
      preface: (
        <ul>
          <li>
            Here we start to get things ready to filter proplerly by setting up
            a 'filter' variable with the value from the URL that we pull in via
            the 'searchParams.get()' call.
          </li>
          <li>
            By using 'filter' as the parameter passed to 'searchParams.get()' we
            pull that value from the query string portion of the URL (TKTKTKTK
            put in details about the query string in the earlier step)
          </li>
        </ul>
      ),
    },
  ]

  const stepLine = (
    <h3 className="border-y border-gray-400 pt-2">
      <span className="pr-2">Steps:</span>
      {steps.map(
        (step, step_index) =>
          step_index > 0 && (
            <span key={`step_${step_index}`} className="px-2">
              {step_index === parseInt(stepNumber, 10) ? (
                step_index
              ) : (
                <Link href={`/step-by-step-v1/example-steps/${step_index}`}>
                  <a>{step_index}</a>
                </Link>
              )}
            </span>
          )
      )}
    </h3>
  )

  if (stepNumber === undefined) {
    return <div></div>
  } else {
    return (
      <>
        <h1>Step-by-Step V1 Example</h1>
        <p>
          (Details about this example are on{' '}
          <Link href="/step-by-step-v1">
            <a>the overview page</a>
          </Link>
          )
        </p>

        {stepLine}
        <h2 className="pt-6">Step {stepNumber}</h2>
        {steps[stepNumber].preface}
        <p className="bg-gray-800 pb-0 mb-0 pl-3 rounded-md border border-gray-600 text-gray-400">
          File: routes/invoices.jsx
        </p>
        {steps[stepNumber].snippet}
        {stepLine}
      </>
    )
  }
}
