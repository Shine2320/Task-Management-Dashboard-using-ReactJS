import React from "react";
import { Form, InputGroup } from "react-bootstrap";

interface SearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({ value, onChange }) => {
  return (
    <InputGroup className="w-50">
      <Form.Control
        type="text"
        placeholder="Task Title"
        value={value}
        onChange={onChange}
      />
    </InputGroup>
  );
};

export default Search;
