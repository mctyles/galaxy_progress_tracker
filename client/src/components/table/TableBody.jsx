import TableRow from "./TableRow";
import { formatTableValues } from "./utils";

export default function TableBody({ data }) {
  return (
    <tbody>
      {data.map((element, idx) => {
        const tableDataValues = formatTableValues(element);
        return <TableRow data={tableDataValues} key={idx} />;
      })}
    </tbody>
  );
}
