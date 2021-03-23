import React from "react";
import { Form, Button, FormControl } from "react-bootstrap";
function SearchBar(props) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
  }
  return (
    <Form inline onSubmit={handleSubmit}>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light" type="submit">
        Search
      </Button>
    </Form>
  );
}

export default SearchBar;
