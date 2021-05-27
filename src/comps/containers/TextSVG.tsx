import React from "react";

interface TextSVGProps {
  fontSize: string;
  lineHeight: string;
  text: string;
  svgWidth: number;
}

export const TextSVG: React.FC<TextSVGProps> = (props) => {
  /**get size of div */
  return (
    <div>
      <div
        style={{
          width: props.svgWidth + "px",
          overflowWrap: "break-word",
          wordBreak: "break-word",
          display: "inline-block",
          fontSize: props.fontSize,
          lineHeight: props.lineHeight,
        }}
      >
        {props.text}
      </div>
      <svg width={props.svgWidth} xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="50%" fontSize={props.fontSize} width={props.svgWidth}>
          {props.text}
        </text>
      </svg>
    </div>
  );
};
