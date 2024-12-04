import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../i18n";
import { motion } from "framer-motion";

export const HomeContainer = () => {
  const dictionaries = getDictionaries();
  return (
    <main
      className={clsx(
        "grid grid-cols-1 justify-center justify-items-center items-start content-start",
        "w-full"
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-2 justify-center justify-items-center items-start content-start",
          "w-full max-w-6xl",
          "py-[60px]"
        )}
      >
        <div
          className={clsx(
            "grid grid-cols-1 place-content-start place-items-start",
            "w-full"
          )}
        >
          <motion.p className={clsx("text-[1.25rem] lg:text-[2.5rem] text-grey90 font-semibold")}>
            {dictionaries.hero.title}
          </motion.p>
        </div>
      </div>
    </main>
  );
};
