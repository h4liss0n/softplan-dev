import { faEdit, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FilterValidade } from '../../../Components/FilterValidate/Index';
import { Loading } from '../../../Components/Loading/Loading';
import { Api } from '../../../Service/Api';
import RouterHistory from '../../../Service/History';
import { FormatTimeStamp } from '../../../Utils/Converter';
import { IListPeople } from '../people.interface';
import './PeopleList.css';


interface IProps { }
interface IPropsItem {
  people: IListPeople;
}

const PeopleList: React.FC<IProps> = (props) => {
  const [isLoading, setisLoading] = useState(false);
  const [people, setPeople] = useState<IListPeople[]>([]);
  const [search, setSearch] = useState('');
  const [onSearch, setOnSearch] = useState(false);

  useEffect(() => {
    try {
      setisLoading(true);

      Api.get('api/v1/people').then((res) => {
        setPeople(res.data);
      });
    } catch (error) {
      setisLoading(false);
    }
    setisLoading(false);
  }, []);

  const buscarComFiltro = async () => {
    setisLoading(true);
    try {
      const res = await Api.get('/api/v1/people', {
        params: { name: search }
      });
      setisLoading(false);
      if (res.status === 200) {
        setPeople(res.data);
      }
    } catch (error) {
      setisLoading(false);
    }
  };

  useEffect(() => {
    const internval = setTimeout(() => {
      if (onSearch) buscarComFiltro();
    }, 2000);

    return () => {
      clearInterval(internval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const Item: React.FC<IPropsItem> = (props) => {
    return (
      <div className="lista-item">
        <div className="lista-item-data">
          <label>id:</label>
          <p> {props.people.id_peo}</p>
          <label>name: </label>
          <p> {props.people.name_peo}</p>

          <label>email: </label>
          <p> {props.people.email_peo}</p>

          <label>login: </label>
          <p> {props.people.login_email_peo}</p>

          <label>cpf: </label>
          <p> {props.people.cpf_peo}</p>

          <label>create: </label>
          <p> {FormatTimeStamp(props.people.create_date_peo)}</p>

          <label>update: </label>
          <p> {FormatTimeStamp(props.people.update_date_peo)}</p>


        </div>
        <div className="lista-item-action">
          <button
            className="btn add"
            onClick={() => {
              RouterHistory.push(`/people/form/${props.people.id_peo}`);
            }}>
            <FontAwesomeIcon icon={faEdit} size="1x" />
          </button>

          <button
            className="btn danger"
            onClick={async () => {
              try {
                setisLoading(true);
                const res = await Api.delete(`/api/v1/people/${props.people.id_peo}`);
                if (res.status !== 204) {
                  toast.error(res.data.erro);
                }
                setisLoading(false);
                buscarComFiltro()

              } catch (error) {
                setisLoading(false);
              }

            }}>
            <FontAwesomeIcon icon={faTrash} size="1x" />
          </button>

        </div>
      </div>
    );
  };

  return (
    <div className="whapper-frm">
      <Loading isloading={isLoading} />
      <div className="whapper">
        <h1>List of people</h1>
        <div>
          <button className="btn-list add" onClick={() => RouterHistory.push('/people/form')}>
            New People
          </button>
        </div>

        <div>
          <section className="whapper-search">
            <input
              type="text"
              value={search}
              onChange={(event) => {
                setOnSearch(true);
                setSearch(event.target.value);
              }}
            />
            <FontAwesomeIcon icon={faSearch} size="2x" />
          </section>
        </div>

        <FilterValidade isValido={people.length !== 0}>
          <section>
            {people.map((peo) => {
              return <Item key={peo.id_peo} people={peo} />;
            })}
          </section>
        </FilterValidade>


      </div>
    </div>
  );
};

export { PeopleList };

