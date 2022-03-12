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

      <h2 className="mt-8">Concept</h2>
      <p>
        The idea here is to make small changes where the code will run after
        each stage. This is to avoid adding more than a few lines which
        dramatically increases the chance of types and making finding them
        exponentially harder.
      </p>
      <p>
        The other mode is to make a chance that intentinally throws an error in
        an in-between state of updating the code when the final change required
        a several modifications. That will help reenforce the fact that errors
        are part of the process and try to lessen the fear of causing them.
      </p>
      <p>
        Notes: I&apos; I've got syntax highlighting turned off as a test for the
        examples. The idea is to highlight the lines that change and have that
        be the only color in the sample to draw the eye more strongly. For views
        like below, turning highlighting back on probably makes sense
      </p>
      <p>
        Notes: I&apos;d also setup so each step could be bookmarked. So the back
        button works in the browser navigation.
      </p>
      <p>
        You should be able to use this as a drop in replement for the{' '}
        <a href="https://reactrouter.com/docs/en/v6/getting-started/tutorial#search-params">
          Search Params
        </a>{' '}
        step in the original tutorial. (It&apos;s possible I busted stuff when
        doing the formatting. If some see something that doesn&apos;t work, let
        me know.)
      </p>
      <p>
        This example is from the React Router tutorail towards the end. The
        change goes from this (36 lines)
      </p>

      <CodeBlock
        code={`
import {
  NavLink,
  Outlet,
} from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices
          .map((invoice) => (
            <NavLink
              style={({ isActive }) => ({
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              })}
              to={\`/invoices/\${invoice.number}\`}
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
`}
      />

      <p>To this (55 lines ~ a 19 line increase in one go)</p>

      <CodeBlock
        code={`
import {
  NavLink,
  Outlet,
  useSearchParams,
} from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => (
            <NavLink
              style={({ isActive }) => ({
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              })}
              to={\`/invoices/\${invoice.number}\`}
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
      `}
      />
    </>
  )
}
