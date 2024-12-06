import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18n";
import { ProjectCardHome } from "../../components/project_card";

export const ProjectsHome = () => {
  const dictionaries = getDictionaries();
  return (
    <div
      id={dictionaries.project.id}
      className={clsx(
        "grid grid-cols-1 items-start content-start justify-start justify-items-start gap-[1rem]",
        "w-full h-screen",
        "py-[60px]"
      )}
    >
      {dictionaries.project.items.map((project, projectIndex) => (
        <ProjectCardHome
          key={projectIndex}
          position={project.name}
          description={project.description}
          skills={project.stack}
        />
      ))}
    </div>
  );
};
