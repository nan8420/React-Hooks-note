import React, { memo, useEffect, useState } from "react";

const Box = ({ createBoxStyle }: any) => {
  const [style, setStyle] = useState({});

  console.log("자녀 렌더링");
  useEffect(() => {
    console.log("박스 키우기");
    setStyle(createBoxStyle());
  }, [createBoxStyle]);

  return <div style={style}></div>;
};

export default memo(Box);
