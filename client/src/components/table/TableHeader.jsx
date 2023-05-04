export default function TableHeader({ tableHeaders }) {
  return (
    <thead>
      <tr>
        {tableHeaders.map((header, idx) => {
          return (
            <th
              className={`p-3 border-b-2 w-1/${tableHeaders.length}`}
              key={idx}
            >
              {header}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
