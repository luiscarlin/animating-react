import { useState } from "react";
import styled from "styled-components";

const DragDropResizeZoom = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  return (
    <Page>
      <Element style={{ position: "relative", top: pos.x, left: pos.y }}>
        hello
      </Element>
    </Page>
  );
};

const Page = styled.div`
  height: 100vh;
  width: 100%;
`;

const Element = styled.div`
  height: 100px;
  width: 100px;
  background: red;
`;

export default DragDropResizeZoom;
