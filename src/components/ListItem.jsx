export default function ListItem({ value, txtColor, bold = true }) {
  return (
    <li className="animate-fadeup">
      <h2 className={`${txtColor} ${bold ? 'font-semibold' : null} capitalize text-[16px] mb-4`}>
        {value}
      </h2>
    </li>
  );
}
