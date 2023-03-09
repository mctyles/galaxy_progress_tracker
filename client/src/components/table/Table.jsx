import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { formatTableHeaders, formatTableValues } from "./utils";

export default function Table({ data }) {
  const tableHeaders = formatTableHeaders(data);

  return (
    <table>
      <TableHeader tableHeaders={tableHeaders} />
      <TableBody data={data} />
    </table>
  );
}
