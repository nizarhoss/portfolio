"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { motion } from "framer-motion";
import { useState } from "react";

const RecentProjects = () => {
  return (
    <div className="py-20" id="resume">
      <h1 className="heading">
        Check Out <span className="text-purple">My Resume</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <ProjectCard key={item.id} project={item} />
        ))}
      </div>
    </div>
  );
};

// Separate component for the project card
const ProjectCard = ({ project }: { project: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(project.link, "_blank");
  };

  return (
    <motion.div
      className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: "pointer" }}
    >
      <PinContainer title={project.title} href={project.link}>
        <div className="relative flex items-center justify-center sm:w-128 w-[80vw] overflow-hidden h-[20vh] lg:h-[55vh] mb-10">
          <motion.div
            className="relative w-full h-full overflow-hidden lg:rounded-3xl"
            style={{ backgroundColor: "#13162D" }}
            animate={{
              y: isHovered ? -5 : 0,
              boxShadow: isHovered
                ? "0px 10px 20px rgba(0, 0, 0, 0.2)"
                : "0px 0px 0px rgba(0, 0, 0, 0)",
            }}
          >
            <img src="/bg.png" alt="bgimg" />
          </motion.div>
          <motion.img
            src={project.img}
            alt="cover"
            className="z-10 absolute bottom-0"
            animate={{
              y: isHovered ? -10 : 0,
              filter: isHovered ? "brightness(1.1)" : "brightness(1)",
            }}
          />
        </div>
        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
          {project.title}
        </h1>
        <p
          className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
          style={{
            color: "#BEC1DD",
            margin: "1vh 0",
          }}
        >
          {project.des}
        </p>
        <div className="flex items-center justify-between mt-7 mb-3">
          <div className="flex items-center">
            {/*             {project.iconLists.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * index + 2}px)`,
                }}
              >
                <img src={icon} alt={`icon${index}`} className="p-2" />
              </div>
            ))} */}
          </div>
          <motion.div
            className="flex justify-center items-center"
            animate={{ x: isHovered ? 5 : 0 }}
          >
            <p className="flex lg:text-xl md:text-xs text-sm text-purple">
              Open Resume
            </p>
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <FaLocationArrow className="ms-3" color="#CBACF9" />
            </motion.div>
          </motion.div>
        </div>
      </PinContainer>
    </motion.div>
  );
};

export default RecentProjects;
