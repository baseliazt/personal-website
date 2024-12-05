import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18n";
import { ProjectCardHome } from "../../components/project_card";

export const ProjectsHome = () => {
  const dictionaries = getDictionaries();
  return (
    <div
      className={clsx(
        "grid grid-cols-1 items-start content-start justify-start justify-items-start gap-[1rem]",
        "w-full h-screen",
        "py-[60px]"
      )}
    >
      {dictionaries.experience.items.map((experience, experienceIndex) => (
        <ProjectCardHome
          key={experienceIndex}
          position={experience.position}
          period={experience.period}
          description={experience.description}
          company={experience.company}
          company_link={experience.company_link}
          skills={experience.skills}
        />
      ))}
    </div>
  );
};
