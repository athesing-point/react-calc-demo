import React from "react";
import { createRoot } from "react-dom/client";
import { Calculator } from "./Calculator";

const render = (containerId: string) => {
  const container = document.getElementById(containerId);
  if (container) {
    const root = createRoot(container);
    root.render(<Calculator />);
  }
};

(window as any).renderCalculator = render;
