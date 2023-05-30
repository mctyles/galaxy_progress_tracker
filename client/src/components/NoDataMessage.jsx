export default function NoDataMessage({ dataType }) {
  return (
    <>
      <p className="p-10 border rounded text-center mb-3 text-lg sm:text-xl md:text-2xl">
        No {dataType} to display.
      </p>
    </>
  );
}
