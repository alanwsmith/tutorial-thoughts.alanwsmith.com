import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Snippet1 from './snippets/1'
import Snippet2 from './snippets/2'

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
            This code is from later in the tutorial. I&apos;m using it for the
            starting point to make the example clearer. The rest of the examples
            in this space will be instructions that correspond to the code. The
            important point is that after each change, the code works.
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
