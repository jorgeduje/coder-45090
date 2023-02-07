import React from "react";

const ListNavbar = ({ title }) => {
  return (
    <li style={{ listStyle: "none", color: "#7F669D", fontWeight: "bold" }}>
      {title}
    </li>
  );
};

export default ListNavbar;
