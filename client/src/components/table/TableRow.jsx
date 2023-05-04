import { useNavigate } from "react-router-dom";

export default function TableRow({ data }) {
  const navigate = useNavigate();
  const id = data[0];

  return (
    <tr
      className="bg-slate-900 hover:bg-slate-700"
      onClick={() => navigate(`${id}`)}
    >
      {data.map((element, idx) => {
        return (
          <td className="p-3 text-center" key={idx}>
            {element}
          </td>
        );
      })}
    </tr>
  );
}
