import * as React from "react";
import clsx from "clsx";
import { getDictionaries } from "../../i18n";
import { BlogCardHome } from "../../components/blog_card";

export const BlogsHome = () => {
  const dictionaries = getDictionaries();
  return (
    <div
      id={dictionaries.blog.id}
      className={clsx(
        "grid grid-cols-1 items-start content-start justify-start justify-items-start gap-[1rem]",
        "w-full h-screen",
        "py-[60px]"
      )}
    >
      {dictionaries.blog.items.map((project, projectIndex) => (
        <BlogCardHome
          key={projectIndex}
          position={project.name}
          description={project.description}
        />
      ))}
    </div>
  );
};
