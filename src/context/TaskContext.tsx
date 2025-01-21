import { createContext, useContext } from "react";

import { TaskContextProps, TaskProviderProps } from "../models/Task";
import useTasks from "../Hooks/useTasks";

const TaskContext = createContext<TaskContextProps>({
  tasks: [],
  loading: false,
  error: null,
  addTask: () => {},
  deleteTask: () => {},
  updateTaskStatus: () => {},
});

export const useTaskContext = () => {
  return useContext(TaskContext);
};

export const TaskProvider = ({ children }: TaskProviderProps) => {
  const { loading, error, tasks, addTask, deleteTask, updateTaskStatus } =
    useTasks();

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        addTask,
        deleteTask,
        updateTaskStatus,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
