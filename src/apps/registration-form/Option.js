export default function Option({ value, text, disabled, selected }) {
  return (
    <option
      value={value}
      disabled={disabled ? true : false}
      selected={selected ? true : false}
    >
      {text}
    </option>
  );
}
