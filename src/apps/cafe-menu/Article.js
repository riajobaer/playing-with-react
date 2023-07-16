export default function Article({ name, price, className }) {
  return (
    <article className="item">
      <p className={className}>{name}</p>
      <p className="price">{price}</p>
    </article>
  );
}
