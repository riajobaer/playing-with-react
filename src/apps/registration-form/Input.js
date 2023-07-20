export default function Input({
  id,
  type,
  name,
  value,
  checked,
  className,
  label,
  required,
}) {
  if (type == "radio" || type == "checkbox") {
    return (
      <label htmlFor={id}>
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          className={className}
          defaultChecked={checked ? true : false}
          required={required ? true : false}
        />
        {label}
      </label>
    );
  } else {
    return (
      <label htmlFor={id}>
        {label}
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          className={className}
          defaultChecked={checked ? true : false}
          required={required ? true : false}
        />
      </label>
    );
  }
}
