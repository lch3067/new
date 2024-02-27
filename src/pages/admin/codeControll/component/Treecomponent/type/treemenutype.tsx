type TreeNodeProps = {
  node: {
    id: string;
    label: string;
    content: string;
    description?: string;
    children?: TreeNodeProps["node"][];
  };
  onItemClick: (node: TreeNodeProps["node"]) => void;
};

export default TreeNodeProps;
