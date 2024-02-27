import { useState, useEffect } from "react";
import {} from "./inputmenuStyle";
import TreeNodeProps from "../../../codeControll/component/Treecomponent/type/treemenutype";

interface InputmenuProps {
  content: TreeNodeProps["node"] | null;
}

function Inputmenu({ content }: InputmenuProps) {
  const [id, setId] = useState("");
  const [label, setLabel] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (content) {
      setId(content.id);
      setLabel(content.label);
      setContentValue(content.content);
      setDescription(content.description || "");
    }
  }, [content]); // content가 변경될 때마다 이 useEffect가 실행됩니다.

  // 상태를 업데이트하는 핸들러 함수들을 정의합니다.
  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setId(e.target.value);
  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLabel(e.target.value);
  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContentValue(e.target.value);
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(e.target.value);

  return (
    <div key={content?.id}>
      <form>
        <label htmlFor="id-input">ID :</label>
        <input id="id-input" type="text" value={id} onChange={handleIdChange} />

        <label htmlFor="label-input">Label :</label>
        <input
          id="label-input"
          type="text"
          value={label}
          onChange={handleLabelChange}
        />

        <label htmlFor="content-input">Content :</label>
        <input
          id="content-input"
          type="text"
          value={contentValue}
          onChange={handleContentChange}
        />

        <label htmlFor="description-input">Description :</label>
        <input
          id="description-input"
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
      </form>
    </div>
  );
}

export default Inputmenu;
