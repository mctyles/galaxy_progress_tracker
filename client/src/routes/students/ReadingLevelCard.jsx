export default function ReadingLevelCard({ readingLevel }) {
  return (
    <section className="reading-level-card p-3 rounded border flex flex-col items-center bg-slate-700">
      <h3>Reading Level</h3>
      <p className="p-6 text-3xl">{readingLevel}</p>
    </section>
  );
}
