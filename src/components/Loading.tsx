import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner: React.FC = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Spinner animation="border" variant="primary" />
      <span className="ms-2">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
