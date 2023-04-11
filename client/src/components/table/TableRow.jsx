import { formatTableValues } from "./utils";

export default function TableRow({ data }) {
  return (
    <tr>
      {data.map((element) => {
        return (
          <>
            <td className="p-3 border rounded">{element}</td>
          </>
        );
      })}
    </tr>
  );
}
