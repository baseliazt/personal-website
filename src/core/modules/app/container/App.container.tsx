import * as React from "react";
import clsx from "clsx";

export const AppContainer = () => {
  return (
    <main
      className={clsx(
        "grid grid-cols-1 justify-center justify-items-center items-start content-start",
        "w-full"
      )}
    >
      <div></div>
    </main>
  );
};
