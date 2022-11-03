import { StoreInput, StoreMonth, StoreName } from ".";
import { memo, useState } from "react";
const Row = memo(({ storeName, setTotalSum, months }) => {
  const [monthData, setMonthData] = useState(months);

  function onChange(e, idx) {
    const value = valid(e.target.value);

    setMonthData((state) => {
      const stateClone = [...state];
      stateClone[idx].value = value;
      setTotalSum((sum) => {
        const currentSum = stateClone.reduce((acc, i) => {
          acc += i.value;
          return acc;
        }, 0);

        return sum + currentSum;
      });
      return stateClone;
    });
  }
  return (
    <tr>
      <th>
        <StoreName value={storeName} />
      </th>

      <th>
        <StoreMonth />
      </th>

      <th>
        {monthData.map((item, index) => {
          return (
            <StoreInput
              key={item.id}
              index={index}
              value={item.value}
              onChange={onChange}
            />
          );
        })}
      </th>

      <th>
        {monthData.reduce((acc, i) => {
          acc += i.value;
          return acc;
        }, 0)}
      </th>
    </tr>
  );
});
function valid(value) {
  return +value.replace(/[^0-9.]/g, "").replace(/(\..*?)\..*/g, "$1");
}
export default Row;
