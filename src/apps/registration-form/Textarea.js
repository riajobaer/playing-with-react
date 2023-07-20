export default function Textarea({ label, id, name, rows, cols, placeholder }) {
  return (
    <label htmlFor={id}>
      {label}
      <textarea
        id={id}
        name={name}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
      ></textarea>
    </label>
  );
}
