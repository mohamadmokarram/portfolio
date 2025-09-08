export default function Container({ children, classes, ...props }) {
  return (
    <div className={`container ${classes ?? ""}`} {...props}>
      {children}
    </div>
  );
}
