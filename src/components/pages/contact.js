import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeSquare
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faEnvelopeSquare
  );
};

export default function() {
  return <div className="meta-container">
    <hr></hr>
  
  <div className="container">
    <div className="left-side">
      <img src="https://images.unsplash.com/photo-1512125098323-cce1035bf4bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"></img>
    </div>

    <div className="right-side">
      <h3>CONTACT</h3>
      <h1>Bryce Cox</h1>
      <ul>
        <li><div className="icon"><FontAwesomeIcon icon="faEnvelopeSquare" /></div> Bryce.Cox77@gmail.com</li>
        <li>Phone: (801)645-0237</li>
        <li>Website:</li>
      </ul>
    </div>
  </div>
  </div>;
}
