import React from "react";

export default function FullButton(props) {
  return (
    // Adding Bootstrap classNames
    <div className="d-grid gap-2 mb-4">{props.children}</div>
  );
}