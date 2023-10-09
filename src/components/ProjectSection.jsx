"use client";
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: "MK8DX-Pareto-Efficiency",
    description: "Calculates the Pareto Efficiency using Mario Kart data.",
    image: "/images/projects/mk8dx-graph.png",
    tag: ["All", "Software Development"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "My App Store",
    description: "A foundational app store that does real time changes to data.",
    image: "/images/projects/terminal-app-store.jpg",
    tag: ["All", "Software Development"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Encoding/Decoding Project",
    description: "Small encoding/decoding project that makes text files faster for processing",
    image: "/images/projects/encoding-decoding.jpg",
    tag: ["All", "Software Development"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Dijkstra's Algorithm Program",
    description: "Getting familiar with the Dijkstra's Algorithm for Fun",
    image: "/images/projects/dijkstra.png",
    tag: ["All", "Software Development"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "LeetCode Challenges",
    description: "Here is my profile for LeetCode",
    image: "/images/projects/leetcode.png",
    tag: ["All", "Software Development"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Hack the Box",
    description: "I Have completed many htb training challenges",
    image: "/images/projects/htb.png",
    tag: ["All", "Cybersecurity"],
    gitUrl: "/",
    previewUrl: "/",
  },
]

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filterdProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 ">
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Software Development"
          isSelected={tag === "Software Development"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Cybersecurity"
          isSelected={tag === "Cybersecurity"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filterdProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={ isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
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
  )
}

export default ProjectSection