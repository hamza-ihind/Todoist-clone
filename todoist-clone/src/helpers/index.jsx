import React from "react";
import { useTasks } from "../hooks/index";

export const collatedTasksExist = (selectedProject) =>
  collatedTasksExist.find((task) => task.key === selectedProject);
