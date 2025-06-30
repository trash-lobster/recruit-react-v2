import React from "react";
import { createRoot } from "react-dom/client";
import { installApp } from "./install";

const root = createRoot(document.getElementById("root") as HTMLElement);

const { App } = installApp();

root.render(<App />);
