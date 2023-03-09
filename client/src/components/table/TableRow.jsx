import { formatTableValues } from "./utils";

export default function TableRow({ data }) {
  return (
    <tr>
      {data.map((element) => {
        return (
          <>
            <td>{element}</td>
          </>
        );
      })}
    </tr>
  );
}
