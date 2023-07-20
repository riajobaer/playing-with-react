export default function Input({ id, type, name, value, checked, label, htmlFor }) {
  return (
    <>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        defaultChecked={checked ? true : false}
      />
      <label htmlFor={label}> {label}</label>
    </>
  );
}
