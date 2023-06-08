export default function ReadingLevelCard({ readingLevel }) {
  return (
    <section className="reading-level-card p-1 md:p-3 rounded border shadow-white shadow-md flex flex-col items-center bg-gradient-to-b from-blue-950 to-sky-900">
      <h3 className="text-sm text-center md:text-lg w-full border-b pb-1">
        Reading Level
      </h3>
      <p className="p-6 text-xl md:text-3xl">{readingLevel ?? "N/A"}</p>
    </section>
  );
}
