import React from "react";

interface HeaderProps {
  title: string;
  fontSize: string;
  height: string;
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#46467A",
        height: props.height,
        textAlign: "center",
        fontSize: props.fontSize,
        lineHeight: props.height,
        color: "white",
      }}
    >
      {props.title}
    </div>
  );
};
