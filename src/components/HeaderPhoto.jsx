import myImg from "../assets/mokaram.webp";
export default function HeaderPhoto({ isMobile }) {
  return (
    <div className="w-full pointer-events-none relative md:w-3/5 overflow-hidden flex justify-center items-center">
      <div
        className={`w-full h-full absolute ${isMobile ? "black-layer" : ""}`}>
        <img
          className="w-full h-full md:object-contain md:mx-auto"
          src={myImg}
          alt="front end developer"
        />
      </div>
    </div>
  );
}
