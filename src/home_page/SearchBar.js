import React from "react";
import { Form, Button, FormControl } from "react-bootstrap";
function SearchBar(props) {
  return (
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  );
}

export default SearchBar;
