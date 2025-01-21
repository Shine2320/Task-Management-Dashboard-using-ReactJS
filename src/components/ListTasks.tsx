import { useState } from "react";
import { Table, Form, InputGroup, Button } from "react-bootstrap";

const TableComponent = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilter = (event) => {
    setFilterType(event.target.value);
  };

  // Filter the data based on the search term and selected type
  const filteredData = data.filter((item) => {
    const matchesSearchTerm = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilterType = filterType ? item.type === filterType : true;
    return matchesSearchTerm && matchesFilterType;
  });

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <InputGroup className="w-50">
          <Form.Control
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </InputGroup>

        <Form.Select
          className="w-25"
          value={filterType}
          onChange={handleFilter}
        >
          <option value="">Filter by Type</option>
          <option value="Type1">Type 1</option>
          <option value="Type2">Type 2</option>
          <option value="Type3">Type 3</option>
        </Form.Select>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center">
                No results found
              </td>
            </tr>
          ) : (
            filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.details}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TableComponent;
