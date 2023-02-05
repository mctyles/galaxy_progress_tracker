export default function FormButton({ type, content, clickHandler }) {
  return (
    <button type={type} onClick={clickHandler}>
      {content}
    </button>
  );
}
