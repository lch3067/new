export type TreeNodeProps = {
  node: {
    id: string;
    label: string;
    content: string;
    description?: string;
    children?: TreeNodeProps["node"][];
  };
  onItemClick: (node: TreeNodeProps["node"]) => void;
};

export interface onjsonData{
  jsonData: TreeNodeProps["node"];
}

export interface onItemClickProps {
  onItemClick: TreeNodeProps["onItemClick"];
}

export interface InputmenuProps {
  content: TreeNodeProps["node"] | null;
}

export interface TreemenuProps {
  jsonData: {
    id: string;
    label: string;
    content: string;
    description?: string | undefined;
    children?: any[] | undefined;
  } | undefined;
  onItemClick: (node: any) => void; // any 대신 구체적인 타입을 사용하세요.
}