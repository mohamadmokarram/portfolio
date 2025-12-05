export default function Logo({ title, onClickMenu }) {
  return (
    <div className="w-full flex justify-between items-center md:block md:w-1/5">
      <a
        href="#home"
        className="inline-block text-white text-2xl py-4 pl-4 font-poppins font-bold capitalize">
        {title}
      </a>
      {/* hamburger menuIcon */}
      {/* <span
        onClick={onClickMenu}
        className="material-symbols-outlined hamburger-menu">
        menu
      </span> */}
      <button className="hamburger-menu" onClick={onClickMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="white"
          viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
          />
        </svg>
      </button>
    </div>
  );
}
