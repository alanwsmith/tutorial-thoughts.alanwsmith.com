import CodeBlock from '../../components/CodeBlock'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1>Step-by-Step V1 Overview</h1>
      <h2>TL;DR</h2>
      <p>
        <Link href="/step-by-step-v1/example">
          <a>Skip to the Example</a>
        </Link>
      </p>

      <h2 className="mt-8">Concept</h2>
      <p>
        This is just to make the individual things that you can add the coloring
        too
      </p>

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
              to={\`/invoices/invoice.number\`}
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
