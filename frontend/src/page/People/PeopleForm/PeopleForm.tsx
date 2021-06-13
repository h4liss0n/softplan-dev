import React from "react";
import { HeaderNav } from "../../../Components/HeaderNav/HeaderNav";
import { CadPeopleContextProvider } from "./PeopleForm.Context";
import "./PeopleForm.css";
import { ClienteCadastroPrincial } from "./PeopleFormMain";





interface IProps { }

const PeopleForm: React.FC<IProps> = (props) => {
  return (
    <CadPeopleContextProvider>
      <HeaderNav>
        <h1>Form of People</h1>        
      </HeaderNav>
      <ClienteCadastroPrincial />
      <footer className="whapper-frm">
        <div className="whapper">
          <button form="frm" className="btn-salvar" type="submit">
            Apply
        </button>
        </div>
      </footer>
    </CadPeopleContextProvider>



  );
};

export { PeopleForm };

