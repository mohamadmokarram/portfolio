import Container from "./Container.jsx";
import SectionTitle from "./SectionTitle.jsx";
import ListItem from "./ListItem.jsx";
import myImg from "../assets/mokaram.png";

export default function About() {
  return (
    <>
      <Container>
        <section className="h-screen w-full mx-auto flex md:mt-4" id="about">
          {/* photo section */}
          <div className="hidden md:block md:w-2/5">
            <figure className="p-8 w-[92%] h-[92%]">
              <img src={myImg} className="w-full h-full object-cover" alt="" />
            </figure>
          </div>
          {/* about txt */}
          <div className="w-full md:w-3/5 p-8">
            <SectionTitle
              title="about me"
              shadowTxt="about"
              shadowClasses="-left-4"
            />
            <p className="text-textdark mb-18">
              Front-End Developer with expertise in React, Next.js, and Tailwind
              CSS, dedicated to building responsive, user-centric web
              experiences. Recently transitioned from logistics and operations
              roles, leveraging strong project management skills to deliver
              efficient solutions and thrive in collaborative environments.
            </p>
            <div className="w-full md:w-2/3 flex gap-4 p-2">
              <ul className="grow-1">
                <ListItem value="name:" txtColor="text-white" />
                <ListItem value="Date of birth:" txtColor="text-white" />
                <ListItem value="email:" txtColor="text-white" />
                <ListItem value="phone:" txtColor="text-white" />
              </ul>
              <ul className="pl-5 grow-2">
                <ListItem
                  bold={false}
                  value="mohamad mokarram"
                  txtColor="text-textdark"
                />
                <ListItem
                  bold={false}
                  value=" June 21, 1992"
                  txtColor="text-textdark"
                />
                <ListItem
                  bold={false}
                  value="mokarram.mohamad@gmail.com"
                  txtColor="text-textdark"
                />
                <ListItem
                  bold={false}
                  value="+98 996 006 7196"
                  txtColor="text-textdark"
                />
              </ul>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
