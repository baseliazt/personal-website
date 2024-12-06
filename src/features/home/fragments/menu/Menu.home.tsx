import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18n";
import { motion } from "framer-motion";
import useIntersectionObserverForIds from "@/core/utils/ui/hooks/useIntersectionObserverForIds";

export const MenuHome = () => {
  const dictionaries = getDictionaries();
  const ids = dictionaries.hero.menu.items.map((item) => item.id);
  const activeIds = useIntersectionObserverForIds(ids, { threshold: 0.5 });

  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[0.5rem]",
        "w-full"
      )}
    >
      {dictionaries.hero.menu.items.map((menu, menuIndex) => (
        <div
          key={menuIndex}
          className={clsx(
            "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.5rem]"
          )}
        >
          <div
            className={clsx(
              activeIds.includes(menu.id) ? "w-[100px]" : "w-[50px]",
              "h-[1px]",
              "bg-[white]"
            )}
          />
          <p className={clsx("text-[0.875rem] text-grey90 font-semibold")}>
            {menu.name}
          </p>
        </div>
      ))}
    </div>
  );
};
