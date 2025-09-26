import { useEffect, useState } from "react";
import Container from "./Container.jsx";
import SectionTitle from "./SectionTitle.jsx";
import testimonialImg from "../assets/testimonial.jpg";
import parallaxImg from "../assets/parallax.webp";
import playerImg from "../assets/player.webp";
import softImg from "../assets/soft98.jpg";
import todolistImg from "../assets/todolist.png";
import weatherImg from "../assets/weather.webp";

const url = "https://687569a7814c0dfa65387b41.mockapi.io/projects";

const imgadds = [
  undefined,
  testimonialImg,
  parallaxImg,
  weatherImg,
  playerImg,
  todolistImg,
  softImg,
];
export default function Projects() {
  const [projects, setProjedts] = useState([]);

  useEffect(() => {
    async function getData(url) {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch data...");

      const resData = await res.json();
      setProjedts(resData);
    }

    try {
      getData(url);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <>
      <Container>
        <section className="w-full" id="projects">
          <SectionTitle
            title="projects"
            shadowTxt="projects"
            classNames="text-center"
            shadowClasses="left-[35%]"
          />
          <p className="w-full px-4 md:px-0 md:w-2/3 text-textdark mx-auto text-center">
            Featured Projects | Eager to tackle larger-scale collaborative
            initiatives and deliver impactful solutions.
          </p>

          <div className="flex flex-col md:flex-row flex-wrap mt-8">
            {projects &&
              projects.map(project => (
                <div
                  key={project.id}
                  className={`animate-fadeup w-full p-3 ${
                    project.width === "small" ? "md:w-2/5" : "md:w-3/5"
                  }`}>
                  <a href={project.link} target="_blank" className="group">
                    <figure className="w-full h-full">
                      <img
                        className="w-full h-[300px] block object-cover duration-300 sepia-50 group-hover:sepia-0"
                        src={imgadds[project.id]}
                        alt="front end project"
                      />
                    </figure>
                  </a>
                </div>
              ))}
          </div>
        </section>
      </Container>
    </>
  );
}
