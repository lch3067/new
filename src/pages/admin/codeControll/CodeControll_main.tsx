import { useState } from "react";
import Treemenu from "./component/Treecomponent/treemenu";
import Inputmenu from "./component/Inputcomponent/inputmenu";
import { Container, LeftSection, RightSection } from "./MenuStyle";
import TreeNodeProps from "./component/Treecomponent/type/treemenutype";

function Menu3() {
  const [selectedItem, setSelectedItem] = useState<
    TreeNodeProps["node"] | null
  >(null);

  const handleItemClick = (node: TreeNodeProps["node"]) => {
    setSelectedItem(node);
  };

  return (
    <Container>
      <LeftSection>
        "트리 화면"
        <Treemenu onItemClick={handleItemClick} />
      </LeftSection>

      <RightSection>
        "세부 정보 화면"
        <Inputmenu content={selectedItem} />
      </RightSection>
    </Container>
  );
}

export default Menu3;
