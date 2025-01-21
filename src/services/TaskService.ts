import { Task } from "../models/Task";

const API_URL =
  "https://my-json-server.typicode.com/Shine2320/Task-Management-Dashboard-using-ReactJS/task";

const taskService = {
  getTasks: async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }
      return await response.json();
    } catch (error: any) {
      throw new Error("Error fetching tasks: " + error.message);
    }
  },

  createTask: async (task: Task) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        throw new Error("Failed to create task");
      }

      return await response.json();
    } catch (error: any) {
      throw new Error("Error creating task: " + error.message);
    }
  },

  deleteTask: async (taskId: number) => {
    try {
      const response = await fetch(`${API_URL}/${taskId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete task");
      }

      return taskId;
    } catch (error: any) {
      throw new Error("Error deleting task: " + error.message);
    }
  },

  updateTaskStatus: async (taskId: number, status: "Pending" | "Completed") => {
    try {
      const response = await fetch(`${API_URL}/${taskId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error("Failed to update task status");
      }

      return await response.json();
    } catch (error: any) {
      throw new Error("Error updating task status: " + error.message);
    }
  },
};

export { taskService };
