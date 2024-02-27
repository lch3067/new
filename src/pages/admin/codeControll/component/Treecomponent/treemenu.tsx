import {} from "./treemenuStyle";
import { useState, useEffect } from "react";
import { TreeNodeContainer, TreeNode as StyledTreeNode } from "./treemenuStyle";
import TreeNodeProps from "./type/treemenutype";
import treeDataJson from "../../../../../assets/exaple.json";

const TreeNode = ({ node, onItemClick }: TreeNodeProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleNodeClick = (event: React.MouseEvent) => {
    setIsExpanded(!isExpanded);
    onItemClick(node); // 부모 컴포넌트로 id와 event를 전달합니다.
  };

  return (
    <>
      <TreeNodeContainer>
        <StyledTreeNode onClick={handleNodeClick}>{node.label}</StyledTreeNode>
        {/* 자식 노드가 있고, 확장되어 있다면 재귀적으로 TreeNode를 렌더링합니다. */}
        {isExpanded &&
          node.children &&
          node.children.map((childNode) => (
            <TreeNode
              key={childNode.id}
              node={childNode}
              onItemClick={onItemClick}
            />
          ))}
      </TreeNodeContainer>
    </>
  );
};

interface TreemenuProps {
  onItemClick: TreeNodeProps["onItemClick"];
}

// Treemenu 컴포넌트
const Treemenu = ({ onItemClick }: TreemenuProps) => {
  const [treeData, setTreeData] = useState<TreeNodeProps["node"] | null>(null);

  useEffect(() => {
    // useEffect를 사용하여 컴포넌트 마운트 후 데이터를 설정
    // treeDataJson이 올바른 형식인지 확인 필요
    setTreeData(treeDataJson);
  }, []);

  if (!treeData) {
    return <div>Loading...</div>;
  }

  return <TreeNode node={treeData} onItemClick={(node) => onItemClick(node)} />;
};

export default Treemenu;
