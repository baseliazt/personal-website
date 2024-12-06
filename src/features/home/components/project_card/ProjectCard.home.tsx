import * as React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

export interface ProjectCardHomeProps {
  id?: string;
  position?: string;
  period?: string;
  company?: string;
  company_link?: string;
  description?: string;
  skills?: { id: string; name: string }[];
}

export const ProjectCardHome = ({
  id = "",
  position = "",
  period = "",
  company = "",
  company_link = "",
  description = "",
  skills = [],
}: ProjectCardHomeProps) => {
  return (
    <motion.a
      id={id}
      className={clsx(
        "grid grid-cols-[100px_1fr] place-content-start place-items-start gap-[1rem]",
        "w-full",
        "hover:bg-dark13",
        "rounded-[0.5rem]",
        "px-[1rem] py-[1rem]"
      )}
      href={company_link}
    >
      <p className={clsx("text-[0.875rem] font-normal text-grey60")}>
        {period}
      </p>
      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-[1rem]",
          "w-full"
        )}
      >
        <p className={clsx("text-[0.875rem] font-semibold text-white")}>
          {`${position} . ${company}`}
        </p>
        <p className={clsx("text-[0.875rem] font-normal text-grey80")}>
          {description}
        </p>

        <div
          className={clsx(
            "flex flex-wrap items-center justify-start gap-[0.5rem]",
            "w-full"
          )}
        >
          {/* badge */}
          {skills.map((skill, skillIndex) => (
            <div
              key={skillIndex}
              className={clsx(
                "rounded-[0.5rem]",
                "px-[0.5rem] py-[0.25rem]",
                "bg-purple78",
                "text-[0.75rem] font-semibold text-white"
              )}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </motion.a>
  );
};