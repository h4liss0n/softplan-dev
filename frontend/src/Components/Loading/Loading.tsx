import React from "react";
import "./Loading.css";

interface IProps {
  isloading: boolean;
}

const Loading: React.FC<IProps> = (Props: IProps) => {
  if (!Props.isloading) {
    return <></>;
  } else {
    return (
      <div className="loading-container">        
        <div className="loader"></div>
      </div>
    );
  }
};

export { Loading };

