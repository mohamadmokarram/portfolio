export default function Logo({ title, onClickMenu }) {
  return (
    <div className="w-full flex justify-between items-center md:block md:w-1/5">
      <a
        href="#home"
        className="inline-block text-white text-2xl py-4 pl-4 font-poppins font-bold capitalize">
        {title}
      </a>
      {/* hamburger menuIcon */}
      <span
        onClick={onClickMenu}
        className="material-symbols-outlined hamburger-menu">
        menu
      </span>
    </div>
  );
}
