import React from "react";

interface MessageAreaProps {
  height: string;
  fontSize: string;
}

export const MessageArea: React.FC<MessageAreaProps> = (props) => {
  return (
    <div style={{ height: props.height, fontSize: props.fontSize }}>
      {props.children}
    </div>
  );
};
