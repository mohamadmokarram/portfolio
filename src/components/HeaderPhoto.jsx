// import myImg from "../assets/mokaram.webp";

const isProd = import.meta.env.PROD;
export default function HeaderPhoto({ isMobile }) {
  const imgSrc = isProd
    ? "/.netlify/images?url=/assets/mokaram-BeNO58Ig.webp"
    : "/src/assets/mokaram.webp";

  return (
    <div className="w-full pointer-events-none relative md:w-3/5 overflow-hidden flex justify-center items-center">
      <div
        className={`w-full h-full absolute ${isMobile ? "black-layer" : ""}`}>
        <img
          className="w-full h-full md:object-contain md:mx-auto"
          src={imgSrc}
          alt="front end developer"
        />
      </div>
    </div>
  );
}
