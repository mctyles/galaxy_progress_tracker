export default function ErrorMessage({ message }) {
  return (
    <section className="text-center p-3 rounded bg-red-200 border-red text-red-800 w-full mb-3">
      <p>{message}</p>
    </section>
  );
}
