export default function SectionTitle({
  title,
  shadowTxt,
  shadowClasses,
  classNames = "",
}) {
  return (
    <>
      <div className={`animate-fadeup w-full relative p-4 my-12 ${classNames}`}>
        <h2 className="text-white capitalize text-5xl font-bold relative">
          {title}
          <span
            className={`text-[#242424] absolute -z-10 capitalize text-[85px] font-bold tracking-wide top-1 ${shadowClasses}`}>
            {shadowTxt}
          </span>
        </h2>
      </div>
    </>
  );
}
