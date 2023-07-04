import { useNavigate } from "react-router-dom";

export default function TableRow({ data }) {
  const navigate = useNavigate();
  const id = data[0];
  console.log(data);

  return (
    <tr
      className="bg-slate-900 hover:bg-slate-700 hover:scale-105 hover:shadow-2xl"
      onClick={() => navigate(`${id}`)}
    >
      {data.map((element, idx) => {
        return (
          <td
            className={`p-3 text-center text-sm sm:text-md md:text-lg lg:text-xl ${
              idx % 2 && "text-blue-200"
            }`}
            key={idx}
          >
            {element}
          </td>
        );
      })}
    </tr>
  );
}
