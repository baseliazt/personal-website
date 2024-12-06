import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18n";
import { ExperienceCardHome } from "../../components/experience_card/ExperienceCard.home";

export const ExperiencesHome = () => {
  const dictionaries = getDictionaries();
  return (
    <div
      id={dictionaries.experience.id}
      className={clsx(
        "grid grid-cols-1 items-start content-start justify-start justify-items-start gap-[1rem]",
        "w-full h-screen",
        "py-[60px]"
      )}
    >
      {dictionaries.experience.items.map((experience, experienceIndex) => (
        <ExperienceCardHome
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
