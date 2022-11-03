export function StoreName({ value }) {
  return <th>{value}</th>;
}

export function StoreMonth() {
  return (
    <th>
      <div class="month">JAN</div>
      <div class="month">FEB</div>
      <div class="month">MAR</div>
      <div class="month">APR</div>
      <div class="month">MAY</div>
      <div class="month">JUN</div>
      <div class="month">JUL</div>
      <div class="month">AUG</div>
      <div class="month">SEP</div>
      <div class="month">OCT</div>
      <div class="month">NOV</div>
      <div class="month">DEC</div>
    </th>
  );
}

export function StoreInput({ value, onChange, index }) {
  return (
    <div>
      <input value={value} onChange={(e) => onChange(e, index)} />
    </div>
  );
}

export function StoreSum({ value }) {
  return <th>{value}</th>;
}
