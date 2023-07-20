export default function Select({ label, id, name, children }) {
  return (
    <label htmlFor={id}>
      {" "}
      {label}
      <select id={id} name={name}>
        {children}
      </select>
    </label>
  );
}
