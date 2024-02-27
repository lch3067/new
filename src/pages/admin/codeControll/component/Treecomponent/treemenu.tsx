import {} from "./treemenuStyle";
import { useState, useEffect } from "react";
import { TreeNodeContainer, TreeNode as StyledTreeNode } from "./treemenuStyle";
import {TreeNodeProps, TreemenuProps} from "./type/treemenutype";



import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';




const TreeNode = ({ node, onItemClick }: TreeNodeProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosable, setIsClosable] = useState(false);


  
  // 트리구조가 늘려지고 줄어는 이벤트
  const handleNodeClick = (event: React.MouseEvent) => {
    setIsExpanded(!isExpanded);
    setIsClosable(isClosable);
    onItemClickEvent(node)
  };

  const onItemClickEvent = (node: TreeNodeProps["node"]) => {
    onItemClick(node); 
  }



  
  function MinusSquare(props: SvgIconProps) {
    return (
      <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
        {/* tslint:disable-next-line: max-line-length */}
        <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
      </SvgIcon>
    );
  }
  
  function PlusSquare(props: SvgIconProps) {
    return (
      <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
        {/* tslint:disable-next-line: max-line-length */}
        <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
      </SvgIcon>
    );
  }
  
  function CloseSquare(props: SvgIconProps) {
    return (
      <SvgIcon
        className="close"
        fontSize="inherit"
        style={{ width: 14, height: 14 }}
        {...props}
      >
        {/* tslint:disable-next-line: max-line-length */}
        <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
      </SvgIcon>
    );
  }
  




  return (
    <>
      <TreeNodeContainer>
        <StyledTreeNode onClick={handleNodeClick}>{node.label}

          {isClosable ? (
            <CloseSquare />
          ) : isExpanded ? (
            <MinusSquare />
          ) : (
            <PlusSquare />
          )}
          
        </StyledTreeNode>

        {isExpanded &&
          node.children &&
          node.children.map((childNode) => (


            <TreeNode
              key={childNode.id}
              node={childNode}

              
              onItemClick={onItemClickEvent}
            />



          ))}
      </TreeNodeContainer>
    </>
  );
};



// onTiemClick이라는 이벤트 전달만 함
// 서버로 부터 데이터 받아옴
const Treemenu = ( {jsonData, onItemClick}: TreemenuProps) => {
  const [treeData, setTreeData] = useState<TreemenuProps["jsonData"] | null>(null);

  useEffect(() => {

    setTreeData(jsonData);
  }, [jsonData]);

  if (!treeData) {
    return <div>Loading...</div>;
  }

  return <TreeNode node={treeData} onItemClick={(node) => onItemClick(node)} />;
};

export default Treemenu;
