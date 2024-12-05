import * as React from "react";
import clsx from "clsx";

export interface ExperienceCardHomeProps {
  id?: string;
  position?: string;
  period?: string;
  company?: string;
  company_link?: string;
  description?: string;
  skills?: { id: string; name: string }[];
}

export const ExperienceCardHome = ({
  id = "",
  position = "",
  period = "",
  company = "",
  company_link = "",
  description = "",
  skills = [],
}: ExperienceCardHomeProps) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-[100px_1fr] place-content-start place-items-start gap-[1rem]",
        "w-full"
      )}
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
          {position}
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
        </div>
      </div>
    </div>
  );
};
