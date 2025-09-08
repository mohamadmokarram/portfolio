export default function ContactItem({
  title,
  iconName,
  address,
  link = false,
  linkHref = "",
}) {
  const IconComponent = iconName;

  if (link) {
    return (
      <div className="flex flex-col justify-center items-center p-3 w-full md:w-1/2 lg:w-1/4">
        <a href={linkHref} className="flex flex-col items-center" target="_blank">
          <div className="icon flex justify-center items-center w-40 h-40 rounded-full p-3 bg-[#1a1a1a] hover:border hover:border-base peer">
            <IconComponent className="text-base !text-5xl"/>
          </div>
          <p className="text-white py-3 peer-hover:text-base duration-200 hover:text-base text-center">{title}</p>
          <p className="text-white peer-hover:text-base duration-200 hover:text-base">{address}</p>
        </a>
      </div>
    );
  }

  return (
    <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col items-center p-3">
      <div className="icon flex justify-center items-center w-40 h-40 rounded-full p-3 bg-[#1a1a1a]">
        <IconComponent className="text-base !text-5xl" />
      </div>
      <p className="text-white py-3">{title}</p>
      <p className="text-white">{address}</p>
    </div>
  );
}
