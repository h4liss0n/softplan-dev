import { yupResolver } from '@hookform/resolvers/yup';
import { cpf } from 'cpf-cnpj-validator';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { Loading } from '../../../Components/Loading/Loading';
import { PErro } from '../../../Components/PErro/PErro';
import { Api } from '../../../Service/Api';
import RouterHistory from '../../../Service/History';
import { toDateString, toNumber } from '../../../Utils/Converter';
import { normalizeCPF, normalizePressPreventSubmit } from '../../../Utils/Normalize';
import { testCPF, validDate } from '../../../Utils/ResolverYup';
import { IParamPeople, IPeople } from '../people.interface';
import { CadPeopleContext } from './PeopleForm.Context';
import './PeopleForm.css';
let fakePeople = require('fake-people');

interface IProps { }

type FormValues = {
  id_peo: number;
  name_peo: string;
  last_name_peo: string;
  login_email_peo: string;
  password_peo: string;
  email_peo: string;
  sex_peo: string;
  naturalness_peo: string;
  nationality_peo: string;
  birth_date_peo: string;
  cpf_peo: string;

  endereco_cep_peo: string;
  endereco_rua_peo: string;
  endereco_bairro_peo: string;
  endereco_numero_peo: string;
  endereco_cidade_peo: string;
  endereco_uf_peo: string;
  endereco_obs_peo: string;
};


const schema = yup.object().shape({
  id_peo: yup.number().integer(),
  name_peo: yup.string().min(3, 'minimum of 3 characters!').required('name is required!'),
  email_peo: yup.string().email('Invalid email address'),
  birth_date_peo: yup.string().transform(validDate).required('inform the date of birth'),
  last_name_peo: yup.string(),
  cpf_peo: yup.string().required().test(testCPF),
  login_email_peo: yup.string().email('Invalid email address').required('field is required!'),
  password_peo: yup.string().min(3, 'minimum of 3 characters!').required('field is required!')
});



const ClienteCadastroPrincial: React.FC<IProps> = (props) => {
  
  const params = useParams<IParamPeople>();
  const { people, setPeople } = useContext(CadPeopleContext);

  const [isLoading, setisLoading] = useState(false);
  const {
    register,
    handleSubmit,  
    setValue,    
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      id_peo: 0,
    },
    resolver: yupResolver(schema),
  });

  
  

  useEffect(() => {

  }, [people]);

  useEffect(() => {
    if (!params.id) return;

    Api.get('/api/v1/people', {
      params: {
        id: params.id,
      },
    }).then((res) => {
      const peo = res.data as IPeople;

      setValue('id_peo', peo.id_peo);
      setValue('name_peo', peo.name_peo);
      setValue('last_name_peo', peo.last_name_peo);
      setValue('sex_peo', peo.sex_peo);
      setValue('birth_date_peo', peo.birth_date_peo);
      setValue('email_peo', peo.email_peo);
      setValue('nationality_peo', peo.nationality_peo);
      setValue('naturalness_peo', peo.naturalness_peo);
      setValue('cpf_peo', peo.cpf_peo);
      setValue('login_email_peo', peo.login_email_peo);
      setValue('password_peo', peo.password_peo);

    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  const handlePostCliente = handleSubmit(async (data) => {
    try {
      setisLoading(true);

      const value: IPeople = {
        id_peo: data.id_peo,
        name_peo: data.name_peo,
        last_name_peo: data.last_name_peo,
        login_email_peo: data.login_email_peo,
        password_peo: data.password_peo,
        email_peo: data.email_peo,
        sex_peo: data.sex_peo,
        naturalness_peo: data.naturalness_peo,
        nationality_peo: data.nationality_peo,
        birth_date_peo: data.birth_date_peo,
        cpf_peo: data.cpf_peo,
      };

      setPeople(value);

      if (toNumber(value.id_peo) === 0) {
        const res = await Api.post('/api/v1/people', value);
        
        if (res.status === 201) {
          toast.success('person successfully registered!');
          RouterHistory.goBack();
        } else {
          toast.error(res.data.erro);
        }

      } else {
        const res = await Api.put('/api/v1/people', value);
        if (res.status === 200) {
          toast.success('person updates successfully!');
          RouterHistory.goBack();

        } else {
          toast.error(res.data.erro);
        }
      }

      setisLoading(false);
    } catch {
      setisLoading(false);
    }
  });

  const createFalseDate = () => {

    const fake = fakePeople.generate(0);

    
    setValue('name_peo', fake.firstName);
    setValue('last_name_peo', fake.lastName);    
    setValue('birth_date_peo', toDateString(fake.birthday));
    setValue('email_peo', fake.contacts.email);    
    setValue('cpf_peo', fake.documents.cpf);
    setValue('login_email_peo', fake.contacts.email);
    setValue('password_peo', '123');
  }

  return (
    <div className="container">
      <section className="whapper-frm">
        <section className="whapper">
          <button className="btn-list add" onClick={createFalseDate}  >create false data for the person</button>
        </section>
      </section>

      <Loading isloading={isLoading} />
      <form className="whapper-frm" id="frm" onSubmit={handlePostCliente} autoComplete="off" onKeyPress={normalizePressPreventSubmit} noValidate>
        <section className="whapper-group">

          <section className="span-1">
            <label>ID</label>
            <input readOnly type="number" {...register('id_peo', {})} />
          </section>

          <section className="span-1">
            <label>First name</label>
            <input
              type="text"
              {...register('name_peo')}
            />
            {errors?.name_peo && <PErro>{errors.name_peo.message}</PErro>}
          </section>

          <section className="span-2">
            <label>Last name</label>
            <input
              type="text"
              {...register('last_name_peo')}
            />
            {errors?.last_name_peo && <PErro>{errors.last_name_peo.message}</PErro>}
          </section>


          <section>
            <label>Sex</label>
            <select
              {...register('sex_peo')}>
              <option value="N">Male</option>
              <option value="S">Famale</option>
            </select>
            {errors?.sex_peo && <PErro>{errors.sex_peo.message}</PErro>}
          </section>


          <section>
            <label>Brith day</label>
            <input
              type="date"
              {...register('birth_date_peo')}
            />
            {errors?.birth_date_peo && <PErro>{errors.birth_date_peo.message}</PErro>}
          </section>



          <section className="span-2">
            <label>Email</label>
            <input
              type="email"
              {...register('email_peo')}
            />
            {errors?.email_peo && <PErro>{errors.email_peo.message}</PErro>}
          </section>

          <section className="span-1">
            <label>Nationality</label>
            <input
              type="text"
              {...register('nationality_peo')}
            />
            {errors?.nationality_peo && <PErro>{errors.nationality_peo.message}</PErro>}
          </section>



          <section className="span-1">
            <label>Naturalness</label>
            <input
              type="text"
              {...register('naturalness_peo')}
            />
            {errors?.naturalness_peo && <PErro>{errors.naturalness_peo.message}</PErro>}
          </section>


          <section className="span-2">
            <label>CPF</label>
            <input
              type="text"
              {...register('cpf_peo', {
                required: 'Informe o CPF!',
                validate: {
                  cpf: (v) => cpf.isValid(v) || 'CPF está inválido!',
                },
              })}
              onChange={(event) => {
                setValue('cpf_peo', normalizeCPF(event.target.value));
              }}
            />
            {errors?.cpf_peo && <PErro>{errors.cpf_peo.message}</PErro>}
          </section>


          <section className="span-2">
            <label>Login email</label>
            <input
              type="email"
              {...register('login_email_peo')}
            />
            {errors?.login_email_peo && <PErro>{errors.login_email_peo.message}</PErro>}
          </section>

          <section className="span-2">
            <label>Password</label>
            <input
              type="password"
              {...register('password_peo')}
            />
            {errors?.password_peo && <PErro>{errors.password_peo.message}</PErro>}
          </section>
        </section>
      </form>
    </div>
  );
};

export { ClienteCadastroPrincial };

