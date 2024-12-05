import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../i18n";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiDuolingo } from "react-icons/si";
import { ExperiencesHome } from "../fragments/experiences/Experiences.home";
import { ProjectsHome } from "../fragments/projects";
import { BlogsHome } from "../fragments/blogs";

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
          "grid grid-cols-2 justify-center justify-items-center items-start content-start gap-[1.5rem]",
          "w-full max-w-6xl"
        )}
      >
        <div
          className={clsx(
            "grid grid-cols-1 items-stretch content-between justify-start justify-items-start",
            "w-full h-screen",
            "py-[60px]",
            "sticky"
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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
              className={clsx("text-[0.875rem] text-grey90 font-normal")}
            >
              {dictionaries.hero.description}
            </motion.p>

            {/* <motion.img
              src="/images/milyasbpa.png"
              alt="Profile Picture"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 2.4 }}
              className={clsx(
                "w-[10rem] h-[10rem]",
                "rounded-[1rem]",
                "bg-cover"
              )}
            /> */}
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
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={clsx(
                  "w-[3rem] h-[3rem]",
                  "flex items-center justify-center",
                  "bg-dark10",
                  "rounded-[0.5rem]",
                  "text-white"
                )}
              >
                {account.id === "github" ? (
                  <FaGithub size={24} />
                ) : account.id === "linkedin" ? (
                  <FaLinkedin size={24} />
                ) : account.id === "duolingo" ? (
                  <SiDuolingo size={24} />
                ) : account.id === "twitter" ? (
                  <FaTwitter size={24} />
                ) : null}
              </motion.a>
            ))}
          </div>
        </div>

        <div
          className={clsx(
            "grid grid-cols-1 items-start content-start justify-start justify-items-start",
            "w-full h-screen",
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
