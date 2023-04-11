import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import { formatTableHeaders, formatTableValues } from "./utils";

export default function Table({ data }) {
  const tableHeaders = formatTableHeaders(data);

  return (
    <table className="table-fixed rounded">
      <TableHeader tableHeaders={tableHeaders} />
      <TableBody data={data} />
    </table>
  );
}
