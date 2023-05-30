import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import { formatTableHeaders, formatTableValues } from "./utils";

export default function Table({ data }) {
  const tableHeaders = formatTableHeaders(data);

  return (
    <table className="table-fixed rounded border-separate border-spacing-y-2 min-w-[90%]">
      <TableHeader tableHeaders={tableHeaders} />
      <TableBody data={data} />
    </table>
  );
}
