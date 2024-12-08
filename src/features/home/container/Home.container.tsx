import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../i18n";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiDuolingo } from "react-icons/si";
import { ExperiencesHome } from "../fragments/experiences/Experiences.home";
import { ProjectsHome } from "../fragments/projects";
import { BlogsHome } from "../fragments/blogs";
import { MenuHome } from "../fragments/menu";

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
          "grid grid-cols-1 desktop:grid-cols-2 justify-center justify-items-center items-start content-start gap-[1.5rem]",
          "w-full max-w-6xl",
          "px-[1rem]"
        )}
      >
        <div
          className={clsx(
            "grid grid-cols-1 items-stretch content-between justify-start justify-items-start",
            "w-full",
            "min-h-screen",
            "py-[60px]"
          )}
        >
          <div
            className={clsx(
              "grid grid-cols-1 place-content-start place-items-start gap-[2rem]",
              "w-full"
            )}
          >
            <div
              className={clsx(
                "grid grid-cols-1 place-content-start place-items-start",
                "w-full"
              )}
            >
              <div
                className={clsx(
                  "grid grid-cols-1 place-content-start place-items-start",
                  "w-full"
                )}
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={clsx(
                    "text-[1.25rem] lg:text-[2.5rem] text-grey90 font-semibold"
                  )}
                >
                  {dictionaries.hero.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  className={clsx(
                    "text-[1rem] lg:text-[2rem] text-purple78 font-semibold"
                  )}
                >
                  {dictionaries.hero.message}
                </motion.p>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
                className={clsx("text-[0.875rem] text-grey90 font-normal")}
              >
                {dictionaries.hero.description}
              </motion.p>
            </div>

            <MenuHome />
          </div>

          {/* social media */}
          <div
            className={clsx(
              "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.5rem]",
              "w-full"
            )}
          >
            {dictionaries.hero.account.items.map((account, accountIndex) => (
              <motion.a
                key={accountIndex}
                href={account.url}
                target="_blank"
                whileHover={{
                  color: "#A290FC",
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className={clsx(
                  "w-[2.5rem] h-[2.5rem]",
                  "flex items-center justify-center",
                  "rounded-[0.5rem]",
                  "text-white",
                  "hover:border hover:border-dark18"
                )}
              >
                {account.id === "github" ? (
                  <FaGithub size={20} />
                ) : account.id === "linkedin" ? (
                  <FaLinkedin size={20} />
                ) : account.id === "duolingo" ? (
                  <SiDuolingo size={20} />
                ) : account.id === "twitter" ? (
                  <FaTwitter size={20} />
                ) : null}
              </motion.a>
            ))}
          </div>
        </div>

        <div
          className={clsx(
            "grid grid-cols-1 items-start content-start justify-start justify-items-start",
            "w-full desktop:h-screen",
            "overflow-auto"
          )}
        >
          <ExperiencesHome />
          <ProjectsHome />
          <BlogsHome />
        </div>
      </div>
    </main>
  );
};
