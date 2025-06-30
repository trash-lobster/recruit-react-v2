import React, { useState } from "react";
import * as styles from "./app.module.scss";
import { installNavPanel } from "./features/nav-panel/install";

export const App = () => {
  const [ isNavMenuActive, setIsNavMenuActive ] = useState(false);
  const { NavPanel } = installNavPanel(isNavMenuActive, setIsNavMenuActive);
  
  return (
    <>
      <NavPanel/>
      <body>
        Hi there
      </body>
    </>
  );
};
