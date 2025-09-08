export default function HeaderTxt() {
  return (
    <div className="w-full absolute flex flex-col justify-center z-10 bottom-36 md:static md:w-2/5">
      <div className="flex flex-col items-center md:items-start md:mt-[7rem] gap-3 p-3 pl-4 md:pl-16 !-mt-20">
        <h6 className="text-base self-start font-semibold text-xl">hello!</h6>
        <h2 className="text-white text-5xl font-semibold">
          I'm{" "}
          <span className="capitalize text-base tracking-widest">mohamad</span>
        </h2>
        <h2 className="capitalize self-start text-base text-5xl font-semibold tracking-widest">
          mokaram
        </h2>
        <p className="text-white text-xl md:text-3xl">A Front End Developer</p>
        <button className="mt-3">
          <a
            href="#projects"
            className="text-white text-sm font-semibold p-3 px-4 rounded-full border border-gray-400 uppercase duration-200 hover:text-base hover:border-base">
            My Works
          </a>
        </button>
      </div>
    </div>
  );
}
