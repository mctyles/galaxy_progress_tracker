export default function TableHeader({ tableHeaders }) {
  return (
    <thead>
      <tr>
        {tableHeaders.map((header) => {
          return (
            <>
              <th>{header}</th>
            </>
          );
        })}
      </tr>
    </thead>
  );
}
