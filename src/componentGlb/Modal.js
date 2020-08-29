import React from "react";

export default function Modal(props) {
  if (!props.isOpen) {
    return null;
  }
  return (
    <>
      <div>
        <div>
          <p>Mas información</p>
          <button></button>
        </div>
      </div>
    </>
  );
}
