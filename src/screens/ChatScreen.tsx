import React, { useEffect, useRef, useState } from "react";
import { MessageArea } from "../comps/containers/MessageArea";
import { Header } from "../comps/groups/Header";
import { TextArea } from "../comps/inputs/Textarea";
import { isPlatform } from "@ionic/react";
import { TextSVG } from "../comps/containers/TextSVG";

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

  /**drawing text svg */
  /**determine proper size */
  const messageAreaRef = useRef<HTMLDivElement>(null);
  const [SVGWidth, setSVGWidth] = useState<number>(0);
  useEffect(() => {
    setSVGWidth(
      parseFloat(
        window
          .getComputedStyle(messageAreaRef.current as Element)
          .getPropertyValue("width")
      )
    );
  }, [messageAreaRef.current]);
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
      <div
        style={{ height: middleHeight }}
        className="container-md"
        ref={messageAreaRef}
      >
        {messageAreaRef.current ? (
          <MessageArea height={"100%"} fontSize={"1.5em"}>
            <TextSVG
              fontSize="1rem"
              lineHeight="1.4em"
              text="this is an example text. you can underline this text, strikethrough"
              svgWidth={SVGWidth}
            />
          </MessageArea>
        ) : null}
      </div>
      <div className="container-md">
        <TextArea
          height={bottomHeight}
          lineHeight={bottomHeight}
          fontSize={"1rem"}
        />
      </div>
      <div style={{ height: bottomMargin, padding: 0, margin: 0 }}></div>
    </div>
  );
};
