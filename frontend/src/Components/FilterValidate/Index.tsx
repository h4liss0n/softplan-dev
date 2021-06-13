import React from "react";
import './FilterValidate.css';

interface IProps {
  isValido: boolean;
}

const FilterValidade: React.FC<IProps> = (props) => {

  const NoValidade: React.FC = (props) => {
    return (
      <div className="filter-validade">
        <p>
          <strong> No records found, please review your filter!</strong>
        </p>
      </div>
    )
  }
  return (
    <>
      {props.isValido ? props.children : <NoValidade />}
    </>
  )
};

export { FilterValidade };

