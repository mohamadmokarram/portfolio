export default function ListItem({ title, value, bold = true }) {
  return (
    <li className="animate-fadeup flex flex-row gap-1">
      <p
        className={`text-base ${
          bold ? "font-semibold" : null
        } capitalize text-[16px] mb-4`}>
        {title}
      </p>
      <p className="text-white">{value}</p>
    </li>
  );
}
