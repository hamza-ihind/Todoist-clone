import React, { useState } from "react";

import { useSelectedProjectValue, useProjectsValue } from "../context";

export const Projects = ({ activeValue = true }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelcetedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();

  return (
    projects &&
    projects.map((project) => (
      <li
        key={project.projectId}
        data-doc-id={project.docId}
        data-testid="project-action"
        className={
          active === project.projectId
            ? "active sidebar__project"
            : "sidebar__project"
        }
        onClick={() => {
          setActive(project.projectId);
          setSelcetedProject(project.projectId);
        }}
      >
        I am a Project
      </li>
    ))
  );
};
