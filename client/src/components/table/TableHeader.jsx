export default function TableHeader({ tableHeaders }) {
  return (
    <thead>
      <tr>
        {tableHeaders.map((header) => {
          return (
            <>
              <th className={`p-3 border rounded w-1/${tableHeaders.length}`}>
                {header}
              </th>
            </>
          );
        })}
      </tr>
    </thead>
  );
}
