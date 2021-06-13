import React from "react";

interface IProps {
  type?: string
}

const PErro: React.FC<IProps> = (props) => {

  const Message: React.FC = () => {
    return (

      (props.type === "selectOne") ? (<> Selecione um registro </>) : (<> </>)



    )
  }

  return <p className="p-erro">
    {props.children}
    <Message/>

  </p>;
};

export { PErro };

