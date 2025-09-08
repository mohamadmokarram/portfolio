export default function Logo({title, onClickMenu}) {
  return (
    <div className="w-full flex justify-between md:block md:w-1/5">
      <h1 className="text-white text-2xl py-4 pl-4 font-poppins font-bold capitalize">
        {title}
      </h1>
      <span onClick={onClickMenu} className="material-symbols-outlined hamburger-menu">
          menu
        </span>
    </div>
  );
}
