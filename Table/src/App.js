
import "./App.css";
import JSONDATA from "./mock_stores.json";
import { useState } from "react";

import Row from "./components/Table/Row";

function App() {
  const data = JSONDATA;
  const [totalSum, setTotalSum] = useState(0);


  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Название магазина</th>
            <th>Месяцы</th>
            <th>Сумма</th>
            <th>Конечная сумма</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            return (
              <Row
                setTotalSum={setTotalSum}
                storeName={row.store.name}
                months={row.months}
              />
            );
          })}
        </tbody>
      </table>
      <div className="total">Сумма всех магазинов: <b>{totalSum}</b></div>
    </div>
  );
}

export default App;
