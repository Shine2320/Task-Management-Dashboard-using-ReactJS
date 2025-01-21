import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { CreateTaskModalProps } from "../models/Task";
import { useTaskContext } from "../context/TaskContext";

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({ show, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<"Pending" | "Completed">("Pending");
  const [priority, setPriority] = useState<"Low" | "Medium" | "High">("Low");
  const [isFormValid, setIsFormValid] = useState(true);
  const { addTask, tasks } = useTaskContext();

  const handleSubmit = () => {
    if (title.trim() === "") {
      setIsFormValid(false);
      return;
    }

    const newTask = { title, description, status, priority };
    addTask({ ...newTask, id: tasks.length + 1 });
    setTitle("");
    setDescription("");
    setStatus("Pending");
    setPriority("Low");
    onClose();
  };

  return (
    <Modal
      show={show}
      onHide={() => {
        setTitle("");
        setDescription("");
        setStatus("Pending");
        setPriority("Low");
        onClose();
      }}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Create New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="taskTitle">
            <Form.Label>Task Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              isInvalid={!isFormValid && title.trim() === ""}
            />
            {!isFormValid && title.trim() === "" && (
              <Form.Control.Feedback type="invalid">
                Title is required
              </Form.Control.Feedback>
            )}
          </Form.Group>

          <Form.Group controlId="taskDescription" className="mt-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="taskStatus" className="mt-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value as "Pending" | "Completed")
              }
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="taskPriority" className="mt-3">
            <Form.Label>Priority</Form.Label>
            <Form.Select
              value={priority}
              onChange={(e) =>
                setPriority(e.target.value as "Low" | "Medium" | "High")
              }
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Create Task
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateTaskModal;
