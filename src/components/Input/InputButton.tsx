import React, { ChangeEvent, useState } from "react";
import Button from "@mui/material/Button";

type PropsType = {
  name: string;
  callBack: (title: string) => void;
};

export const InputButton: React.FC<PropsType> = ({
  name,
  callBack,
}) => {
  const [title, setTitle] = useState("");
  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value.trim());
  };

  const onClickButtonHandler = () => {
    callBack(title);
  };
  return (
    <div>
      <input value={title} onChange={onChangeInputHandler} />
      <Button
        variant="contained"
        size="small"
        onClick={onClickButtonHandler}
        style={{
          maxWidth: "35px",
          maxHeight: "35px",
          minWidth: "35px",
          minHeight: "35px",
        }}
      >
        {name}
      </Button>
    </div>
  );
};
