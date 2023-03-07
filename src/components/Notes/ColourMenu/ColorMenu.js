import React from "react";
import styles from "./style.module.css";

const options = [
  " ",
  "Red",
  "Orange",
  "Yellow",
  "green",
  "teal",
  "blue",
  "Darkblue",
  "pink",
  "brown",
  "grey",
];

export default function LongMenu({ open, takeColour, colourHandleClick }) {
  return (
    <div>
      {open && (
        <div className={styles.modal} onClick={colourHandleClick}>
          {options.map((option) => (
            <div
              key={option}
              className={styles.color}
              style={{
                backgroundColor: option,
              }}
              onClick={() => {
                takeColour(option);
              }}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}
