import SkillItem from "./SkillItem.jsx";
import Container from "./Container.jsx";
import SectionTitle from "./SectionTitle.jsx";

export default function Skills() {
  return (
    <Container>
      <section
        id="skills"
        className="h-screen w-full flex flex-col justify-center">
        <SectionTitle
          title="my skills"
          shadowTxt="skills"
          classNames="text-center"
          shadowClasses="left-[40%] top-5 tracking-wider"
        />
        <p className="w-full px-4 md:px-0 md:w-2/3 text-textdark mx-auto text-center">
          Continuously expanding programming expertise with a passion for
          mastering new technologies and frameworks.
        </p>
        <div className="flex flex-wrap mt-10">
          <SkillItem skillName="HTML5" percent="90%" />
          <SkillItem skillName="CSS" percent="90%" />
          <SkillItem skillName="JavaScript" percent="90%" />
          <SkillItem skillName="Tailwind" percent="95%" />
          <SkillItem skillName="React" percent="90%" />
          <SkillItem skillName="NextJs" percent="60%" />
          <SkillItem skillName="React Router" percent="80%" />
          <SkillItem skillName="Redux Toolkit" percent="80%" />
        </div>
      </section>
    </Container>
  );
}
