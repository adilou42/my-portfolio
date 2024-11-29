"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "YouTube Clone",
    description: "Project made with NextJS, Tailwind and TypeScript",
    image: "/images/projects/YTClone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adilou42/YouTubeClone",
    previewUrl: "https://you-tube-clone-olive-eta.vercel.app/",
  },
  {
    id: 2,
    title: "Kasa",
    description: "Responsive website to rent appartements. Made with React, Typescript",
    image: "/images/projects/Kasa.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/adilou42/Kasa_Project",
    previewUrl: "https://kasa-project-three.vercel.app/",
  },
  {
    id: 3,
    title: "Weather App",
    description: "An app that uses a uses a weather api. Made with Javascript",
    image: "/images/projects/weather_app.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/adilou42/weather_app",
    previewUrl: "https://weather-app-m98s.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects"  className="scroll-mt-[8rem]">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
