export default function SuccessMessage({ message }) {
  return (
    <section className="text-center p-3 rounded bg-green-200 border-green text-green-800 w-full mb-3">
      <p>{message}</p>
    </section>
  );
}
