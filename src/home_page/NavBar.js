import React from "react";
import { Nav } from "react-bootstrap";

function NavBar(props) {
  return (
    <Nav className="flex-column">
      <Nav.Link onClick={props.handleClick} type="all">
        All Items
      </Nav.Link>
      <Nav.Link onClick={props.handleClick} type="sticker">
        Stickers
      </Nav.Link>
      <Nav.Link onClick={props.handleClick} type="note-pad">
        Note Pad
      </Nav.Link>
      <Nav.Link onClick={props.handleClick} type="tape">
        Tapes
      </Nav.Link>
      <Nav.Link onClick={props.handleClick} type="accessory">
        Accessories
      </Nav.Link>
    </Nav>
  );
}

export default NavBar;
