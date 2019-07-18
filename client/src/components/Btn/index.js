import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      Delete
    </span>
  );
}

export function ViewBtn(props) {
  return (
    <span className="view-btn" {...props} role="button" tabIndex="0">
      View
    </span>
  );
}


