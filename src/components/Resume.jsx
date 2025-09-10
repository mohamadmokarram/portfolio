import { useEffect, useState } from "react";
import Container from "./Container.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fadeUpAnimation from "../../animaiton.js";

const resumeToken = "687569a7814c0dfa65387b41";

export default function Resume() {
  const [resumeData, setResumeData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`https://${resumeToken}.mockapi.io/resume`);
        const resData = await res.json();

        if (!res.ok) {
          throw new Error("failed to get data");
        }
        setResumeData(resData);
      } catch (error) {
        setError(error.message);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    if (resumeData.length > 0) {
      ScrollTrigger.getAll().forEach(scrollTriggerInstance => {
        const triggerElement = scrollTriggerInstance.trigger;
        if (triggerElement && triggerElement.closest("#resume")) {
          scrollTriggerInstance.kill();
        }
      });
    }
    fadeUpAnimation();
  }, [resumeData]);

  return (
    <>
      <Container>
        <section id="resume" className="w-full">
          <SectionTitle
            title="resume"
            shadowTxt="resume"
            classNames="text-center"
            shadowClasses="left-[35%]"
          />
          <p className="w-full px-4 md:px-0 md:w-2/3 text-textdark mx-auto text-center">
            A journey of growth and expertises.
          </p>
          {error && (
            <p className="text-textdark text-center">
              Something went wrong to get resume data.
            </p>
          )}
          <ul className="flex flex-col md:flex-row md:flex-wrap mt-8">
            {resumeData &&
              resumeData.map(item => (
                <li key={item.position} className="w-full md:w-1/2 p-3">
                  <article
                    className={`animate-fadeup min-h-[350px] bg-resume flex flex-col justify-center gap-4 p-6 rounded`}>
                    <h2 className="text-base text-2xl font-bold">
                      {item.date}
                    </h2>
                    <p className="text-white capitalize text-2xl">
                      {item.position}
                    </p>
                    <p className="text-textdark uppercase tracking-wide text-[13px] font-semibold">
                      {item.company}
                    </p>
                    <p className="text-textdark">{item.description}</p>
                  </article>
                </li>
              ))}
          </ul>
        </section>
      </Container>
    </>
  );
}
