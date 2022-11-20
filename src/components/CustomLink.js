import { Link, useMatch } from "react-router-dom";
import React from "react";

const CustomLink = ({ children, to, ...props }) => {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      style={{
        color: match ? "black" : "gray",
        textDecoration: "none",
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export { CustomLink };
