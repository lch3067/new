import { useState, useEffect } from "react";
import Treemenu from "./component/Treecomponent/treemenu";
import Inputmenu from "./component/Inputcomponent/inputmenu";
import { Container, LeftSection, RightSection } from "./CodeControll_mainStyle";
import {TreeNodeProps,TreemenuProps} from "./component/Treecomponent/type/treemenutype";

import { ExampleapiController } from "../../../api/apiController"


function CodeControll_main() {

  const [responseValue, setResponseValue] = useState<TreemenuProps["jsonData"] | undefined>(undefined);

  const [selectedItem, setSelectedItem] = useState<
    TreeNodeProps["node"] | null
  >(null);

  const handleItemClick = (node: TreeNodeProps["node"]) => {
    setSelectedItem(node);
  };

  useEffect(() => {
    const response = ExampleapiController();
    setResponseValue(response);
  }, [responseValue]);

 
  return (
    <Container>

      <LeftSection>
        "트리 화면"
        <Treemenu jsonData={responseValue} onItemClick={handleItemClick} />
      </LeftSection>

      <RightSection>
        "세부 정보 화면"
        <Inputmenu content={selectedItem} />
      </RightSection>

    </Container>
  );
}

export default CodeControll_main;
