import { useState, useEffect } from "react";
import { taskService } from "../services/TaskService";
import { Task } from "../models/Task";

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const fetchedTasks = await taskService.getTasks();
        setTasks(fetchedTasks);
      } catch (err) {
        setError("Error fetching tasks");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const addTask = async (task: Task) => {
    try {
      setTasks([...tasks, task]);
      //await taskService.createTask(task);
    } catch (err) {
      setError("Error adding task");
    }
  };

  const deleteTask = async (taskId: number) => {
    try {
      setTasks(tasks.filter((task) => task.id !== taskId));
      //await taskService.deleteTask(taskId);
    } catch (err) {
      setError("Error deleting task");
    }
  };

  const updateTaskStatus = async (
    taskId: number,
    status: "Pending" | "Completed"
  ) => {
    try {
      setTasks(
        tasks.map((task) =>
          task.id === taskId ? { ...task, status: status } : task
        )
      );
      //await taskService.updateTaskStatus(taskId, status);
    } catch (err) {
      setError("Error updating task status");
    }
  };

  return {
    tasks,
    loading,
    error,
    addTask,
    deleteTask,
    updateTaskStatus,
  };
};

export default useTasks;
