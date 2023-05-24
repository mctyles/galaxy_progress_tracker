import { colorCategory } from "./utils";

export default function CategoryLabel({ category }) {
  return (
    <div
      className={`border border-black min-w-[10%] text-center py-2 px-3 rounded ${colorCategory[category]}`}
    >
      {category}
    </div>
  );
}
