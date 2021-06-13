import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Api } from "../../Service/Api";
import { ApplicationState } from "../../Store";
import * as Action from '../../Store/Auth/Action';

interface IProps { }

const Autorization: React.FC<IProps> = (Props: IProps) => {
  const store = useSelector((store: ApplicationState) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    Api.defaults.headers.authorization = `bearer ${store.auth.token}`;

    Api.post("/api/v1/autorizarion", {})
      .then((res: any) => { })
      .catch((erro) => {
        console.error(erro)

        dispatch(Action.RequestLogout());


      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};

export { Autorization };

