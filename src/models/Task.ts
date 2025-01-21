import { ReactNode } from "react";

export interface Task {
  id: number;
  title: string;
  status: "Pending" | "Completed";
  priority: "Low" | "Medium" | "High";
}

export interface TableComponentProps {
  data: Task[];
}
export interface TaskProviderProps {
  children: ReactNode;
}
export interface TaskContextProps {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  addTask: (task: Task) => void;
  deleteTask: (taskId: number) => void;
  updateTaskStatus: (taskId: number, status: "Completed" | "Pending") => void;
}
export interface CreateTaskModalProps {
  show: boolean;
  onClose: () => void;
}
