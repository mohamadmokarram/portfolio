import ContactItem from "./ContactItem";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import {
  Call,
  Telegram,
  Instagram,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";

export default function Contact() {
  return (
    <>
      <Container>
        <section
          id="contact"
          className="w-full md:h-screen flex flex-col justify-center mt-12">
          <SectionTitle
            title="Contact Me"
            shadowTxt="Contact"
            classNames="text-center"
            shadowClasses="left-[35%]"
          />
          <p className="w-full px-4 md:px-0 md:w-2/3 text-textdark mx-auto text-center">
            Feel free to reach out to me through the platforms below. I'm always
            open to discussing new projects, creative ideas, or opportunities to
            be part of your vision.
          </p>
          <div className="animate-fadeup flex flex-col md:flex-row flex-wrap mt-14">
            <ContactItem
              link={true}
              iconName={GitHub}
              title="Github"
              linkHref="https://github.com/mohamadmokarram"
              address="mohamadmokarram"
            />
            <ContactItem
              link={true}
              linkHref="https://telegram.me/mohamadmokarram"
              iconName={Telegram}
              title="Telegram Account"
              address="@mohamadmokarram"
            />
            <ContactItem
              link={true}
              linkHref="https://www.instagram.com/mokaram_frontdeveloper/"
              iconName={Instagram}
              title="Instagram"
              address="mokaram_frontdeveloper"
            />
            <ContactItem
              link={true}
              linkHref="https://www.linkedin.com/in/mohamad-mokaram-05b873200/"
              iconName={LinkedIn}
              title="LinkedIn"
              address="Mohamad Mokaram"
            />
          </div>
        </section>
      </Container>
    </>
  );
}
