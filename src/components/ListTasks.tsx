import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { TableComponentProps } from "../models/Task";
import Search from "./Search";
import DropdownFilter from "./DropdownFilter";
import { useTaskContext } from "../context/TaskContext";
import CreateTaskModal from "./CreateTask";

const TableComponent: React.FC<TableComponentProps> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("");
  const [filterPriority, setFilterPriority] = useState<string>("");
  const { updateTaskStatus, deleteTask } = useTaskContext();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterStatus = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(event.target.value);
  };

  const handleFilterPriority = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterPriority(event.target.value);
  };

  const filteredData = data.filter((task) => {
    const matchesSearchTerm = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus ? task.status === filterStatus : true;
    const matchesPriority = filterPriority
      ? task.priority === filterPriority
      : true;
    return matchesSearchTerm && matchesStatus && matchesPriority;
  });

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <Search value={searchTerm} onChange={handleSearch} />

        <div
          className="d-flex"
          style={{ justifyContent: "flex-end", width: "100%" }}
        >
          <DropdownFilter
            label="Filter by Status"
            options={["Pending", "Completed"]}
            selectedValue={filterStatus}
            onChange={handleFilterStatus}
          />
          <DropdownFilter
            label="Filter by Priority"
            options={["Low", "Medium", "High"]}
            selectedValue={filterPriority}
            onChange={handleFilterPriority}
          />
          <Button variant="primary" onClick={() => setShowCreateModal(true)}>
            Create New Task
          </Button>
        </div>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Task ID</th>
            <th>Task Title</th>
            <th>Status</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center">
                No Task found
              </td>
            </tr>
          ) : (
            filteredData.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.status}</td>
                <td>{task.priority}</td>{" "}
                <td>
                  {task.status == "Pending" && (
                    <Button
                      variant="warning"
                      onClick={() => updateTaskStatus(task.id, "Completed")}
                      className="me-2"
                    >
                      Mark as Completed
                    </Button>
                  )}
                  <Button variant="danger" onClick={() => deleteTask(task.id)}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
      <CreateTaskModal
        show={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
    </div>
  );
};

export default TableComponent;
