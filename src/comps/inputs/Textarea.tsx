import React from "react";

interface TextAreaProps {
  height: string;
  fontSize: string;
  lineHeight: string;
}

export const TextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <div>
      <textarea
        style={{
          resize: "none",
          width: "100%",
          height: props.height,
          lineHeight: props.lineHeight,
          fontSize: props.fontSize,
          padding: 0,
          boxSizing: "border-box",
        }}
      ></textarea>
    </div>
  );
};
