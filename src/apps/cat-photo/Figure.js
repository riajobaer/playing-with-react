export default function Figure({src, alt, children}) {
  return (
    <>
    <img src={src} alt={alt} />
    {children}
    </>
  );
}