import React, { useEffect, useState } from "react";
import { MessageArea } from "../comps/containers/MessageArea";
import { Header } from "../comps/groups/Header";
import { TextArea } from "../comps/inputs/Textarea";
import { isPlatform } from "@ionic/react";

export const ChatScreen: React.FC = (props) => {
  const [statusBarHeight, setStatusBarHeight] = useState<string>("0px");
  const [bottomMargin, setBottomMargin] = useState<string>("0.1rem");
  const [topHeight, setTopHeight] = useState<string>("2rem");
  const [bottomHeight, setBottomHeight] = useState<string>("2rem");
  // middleHeight has flex height
  const [middleHeight, setMiddleHeight] = useState<string>(
    `calc(100% - ${topHeight} - ${bottomHeight} - ${statusBarHeight} - ${bottomMargin})`
  );
  /**check platform type for adjusting status bar height */
  useEffect(() => {
    if (isPlatform("ios")) {
      setStatusBarHeight("1.2rem");
    }
  }, []);
  /**adjust middle height as per status bar height */
  useEffect(() => {
    setMiddleHeight(
      `calc(100% - ${topHeight} - ${bottomHeight} - ${statusBarHeight} - ${bottomMargin})`
    );
  }, [statusBarHeight]);
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ height: statusBarHeight, padding: 0, margin: 0 }}></div>
      <Header fontSize="1em" height={topHeight} title="Algorithms Class" />
      <MessageArea height={middleHeight} fontSize={"1.5em"} />
      <TextArea
        height={bottomHeight}
        lineHeight={bottomHeight}
        fontSize={"1.5rem"}
      />
      <div style={{ height: bottomMargin, padding: 0, margin: 0 }}></div>
    </div>
  );
};
