export default function ReadingLevelCard({ readingLevel }) {
  return (
    <section className="reading-level-card p-1 md:p-3 rounded border flex flex-col items-center bg-gradient-to-b from-blue-950 to-sky-950 max-w-fit">
      <h3 className="text-xs text-center md:text-lg w-full border-b pb-1">
        Reading Level
      </h3>
      <p className="p-1 text-sm md:text-3xl md:p-6">{readingLevel ?? "N/A"}</p>
    </section>
  );
}
