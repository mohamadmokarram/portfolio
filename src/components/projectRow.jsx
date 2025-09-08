export default function ProjectRow({
  reverse = false,
  firstImgSrc,
  link1,
  fistTitle,
  secondImgSrc,
  link2,
  secondTitle,
}) {
  return (
    <div
      className={`flex p-3 flex-col ${
        reverse ? " md:flex-row-reverse" : " md:flex-row"
      }`}>
      <div className="animate-fadeup w-full md:w-2/5 p-3">
        <a href={link1} target="_blank" className="block h-full rounded overflow-hidden"> 
          <figure className="w-full h-full">
            <img
              src={firstImgSrc}
              alt={fistTitle}
              className="w-full h-[300px] block object-cover"
            />
          </figure>
        </a>
      </div>
      <div className="animate-fadeup w-full md:w-3/5 p-3">
        <a href={link2} target="_blank" className="block h-full rounded overflow-hidden">
          <figure className="w-full h-full">
            <img
              src={secondImgSrc}
              alt={secondTitle}
              className="w-full h-[300px] block object-cover"
            />
          </figure>
        </a>
      </div>
    </div>
  );
}
