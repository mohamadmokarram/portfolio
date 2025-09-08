export default function SkillItem({ skillName, percent }) {
  return (
    <div className="w-full animate-fadeup md:w-1/2 p-3">
      <h2 className="text-white text-2xl font-semibold py-2">{skillName}</h2>
      <div className="h-[10px] bg-[#1a1a1a] rounded relative">
        <div className={`absolute top-0 h-full bg-base rounded-[3px]`} style={{
            width: `${percent}`
        }}>
            <span className="absolute text-white right-0 text-2xl -top-10">{percent}</span>
        </div>
      </div>
    </div>
  );
}
