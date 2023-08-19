import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./Emdr.css"

const Emdr = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`encadr-EMDR ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className={`overlap-group ${state.property1}`}>
        {state.property1 === "variant-2" && <div className="rectangle" />}

        <div className="text-wrapper">EMDR</div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

Emdr.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};

export default Emdr