export default function Page() {
  return (
    <pre className="prism-code language-undefined code_block text-gray-200">
      <div className="token-line code_line">
        <span className="code_line_number code_line_number_first">1</span>
        <span className="code_line_content">{`import {`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">2</span>
        <span className="code_line_content">{`  NavLink,`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">3</span>
        <span className="code_line_content">{`  Outlet,`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">4</span>
        <span className="code_line_content">{`  useSearchParams,`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">5</span>
        <span className="code_line_content">{`} from "react-router-dom";`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">6</span>
        <span className="code_line_content">{`import { getInvoices } from "../data";`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">7</span>
        <span className="code_line_content">{`
`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">8</span>
        <span className="code_line_content">{`export default function Invoices() {`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">9</span>
        <span className="code_line_content">{`  let invoices = getInvoices();`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">10</span>
        <span className="code_line_content">{`  let [searchParams, setSearchParams] = useSearchParams();`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">11</span>
        <span className="code_line_content">{`
`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">12</span>
        <span className="code_line_content">{`  return (`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">13</span>
        <span className="code_line_content">{`    <div style={{ display: "flex" }}>`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">14</span>
        <span className="code_line_content">{`      <nav`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">15</span>
        <span className="code_line_content">{`        style={{`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">16</span>
        <span className="code_line_content">{`          borderRight: "solid 1px",`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">17</span>
        <span className="code_line_content">{`          padding: "1rem",`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">18</span>
        <span className="code_line_content">{`        }}`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">19</span>
        <span className="code_line_content">{`      >`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">20</span>
        <span className="code_line_content">{`      <input `}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">21</span>
        <span className="code_line_content">{`        value={searchParams.get("filter") || ""}`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">22</span>
        <span className="code_line_content">{`        onChange={(event) => {`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">23</span>
        <span className="code_line_content">{`          let filter = event.target.value;`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">24</span>
        <span className="code_line_content">{`          if (filter) {`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">25</span>
        <span className="code_line_content">{`              setSearchParams({ filter });`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">26</span>
        <span className="code_line_content">{`          } else {`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">27</span>
        <span className="code_line_content">{`              setSearchParams({});`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">28</span>
        <span className="code_line_content">{`          }`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">29</span>
        <span className="code_line_content">{`        }}`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">30</span>
        <span className="code_line_content">{`      />`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">31</span>
        <span className="code_line_content">{`        {invoices`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">32</span>
        <span className="code_line_content">{`          .filter((invoice) => {`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">33</span>
        <span className="code_line_content">{`            let filter = searchParams.get("filter");`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">34</span>
        <span className="code_line_content">{`            if (!filter) return true;`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">35</span>
        <span className="code_line_content">{`            let name = invoice.name.toLowerCase();`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">36</span>
        <span className="code_line_content">{`            return name.startsWith(filter.toLowerCase());`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">37</span>
        <span className="code_line_content">{`          })`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">38</span>
        <span className="code_line_content">{`          .map((invoice) => (`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">39</span>
        <span className="code_line_content">{`            <NavLink`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">40</span>
        <span className="code_line_content">{`              style={({ isActive }) => ({`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">41</span>
        <span className="code_line_content">{`                display: "block",`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">42</span>
        <span className="code_line_content">{`                margin: "1rem 0",`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">43</span>
        <span className="code_line_content">{`                color: isActive ? "red" : "",`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">44</span>
        <span className="code_line_content">{`              })}`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">45</span>
        <span className="code_line_content">{`              to={\`/invoices/\${invoice.number}\`}`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">46</span>
        <span className="code_line_content">{`              key={invoice.number}`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">47</span>
        <span className="code_line_content">{`            >`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">48</span>
        <span className="code_line_content">{`              {invoice.name}`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">49</span>
        <span className="code_line_content">{`            </NavLink>`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">50</span>
        <span className="code_line_content">{`          ))}`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">51</span>
        <span className="code_line_content">{`      </nav>`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">52</span>
        <span className="code_line_content">{`      <Outlet />`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">53</span>
        <span className="code_line_content">{`    </div>`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number">54</span>
        <span className="code_line_content">{`  );`}</span>
      </div>
      <div className="token-line code_line">
        <span className="code_line_number code_line_number_last">55</span>
        <span className="code_line_content">{`}`}</span>
      </div>
    </pre>
  )
}
