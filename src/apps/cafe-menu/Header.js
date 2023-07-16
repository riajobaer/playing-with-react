export default function Header({ variant, text }) {
  if (variant === "h1") {
    return <h1 className="h1">{text}</h1>;
  } else if (variant === "h2") {
    return <h2 className="h2">{text}</h2>;
  } else if (variant === "h3") {
    return <h3 className="h3">{text}</h3>;
  } else if (variant === "h4") {
    return <h4 className="h4">{text}</h4>;
  } else if (variant === "h5") {
    return <h5 className="h5">{text}</h5>;
  } else if (variant === "h6") {
    return <h6 className="h6">{text}</h6>;
  }
}
