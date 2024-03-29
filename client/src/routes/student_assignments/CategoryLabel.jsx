import { colorCategory } from "./utils";

export default function CategoryLabel({ category }) {
  return (
    <div
      className={`border border-black max-h-10 min-w-[10%] text-center py-2 px-3 rounded-lg shadow-xl ${colorCategory[category]}`}
    >
      {category}
    </div>
  );
}
