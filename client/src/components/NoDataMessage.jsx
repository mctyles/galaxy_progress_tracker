export default function NoDataMessage({ dataType }) {
  return (
    <>
      <p className="p-10 border rounded text-center mb-3">
        No {dataType} to display.
      </p>
    </>
  );
}
