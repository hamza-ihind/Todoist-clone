import React from "react";
import { Checkbox } from "./Checkbox";
import { useTasks } from "../hooks";
import { collatedTasks } from "../constants";
import { getTitle, getCollatedTitle, collatedTasksExist } from "../helpers";
import { useTasks } from "../hooks";
import { useSelectedProjectValue } from "../context";

export const Tasks = () => {
  const { SelectedProject } = useSelectedProjectValue;
  const { Projects } = useProjectsValue;
  const { tasks } = useTasks(SelectedProject);

  let projectName = "";
  return (
    <div className="tasks" data-testid="Projectname">
      <h2 data-testid="project-name">{projectName}</h2>
      <ul className="tasks__list">
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
