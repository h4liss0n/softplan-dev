import React, { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Api } from '../../../Service/Api';
import { IParamPeople, IPeople } from '../people.interface';



interface IcadPeopleContext {
  people: IPeople;
  setPeople: (Value: IPeople) => void;
}

const CadPeopleContext = createContext({} as IcadPeopleContext);

const CadPeopleContextProvider: React.FC = (props) => {
  const params = useParams<IParamPeople>();

  const [people, setPeople] = useState<IPeople>({
    id_peo: 0,
    name_peo: '',
    last_name_peo: '',
    birth_date_peo: '',
    cpf_peo: '',
    email_peo: '',
    login_email_peo: '',
    nationality_peo: '',
    naturalness_peo: '',
    password_peo: '',
    sex_peo: 'M'

  });

  useEffect(() => {
    if (!params.id) return;

    Api.get('/api/v1/people', {
      params: {
        id: params.id,
      },
    }).then((res) => {
      setPeople(res.data as IPeople);
    });
  }, [params.id]);

  const value = {
    people,
    setPeople,
  };

  return <CadPeopleContext.Provider value={value}>{props.children}</CadPeopleContext.Provider>;
};

export { CadPeopleContextProvider, CadPeopleContext };

