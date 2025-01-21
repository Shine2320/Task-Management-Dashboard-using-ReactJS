import React from "react";
import { Form } from "react-bootstrap";

interface DropdownFilterProps {
  label: string;
  options: string[];
  selectedValue: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({
  label,
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <Form.Select
      className="w-25 me-2"
      value={selectedValue}
      onChange={onChange}
      style={{ width: "100%" }}
    >
      <option value="">{label}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Form.Select>
  );
};

export default DropdownFilter;
