import React from 'react';
import { useSelector } from 'react-redux';
import { Router } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Login } from '../page/Login/Login';
import { PeopleForm } from '../page/People/PeopleForm/PeopleForm';
import { PeopleList } from '../page/People/PeopleList/PeopleList';
import history from '../Service/History';
import { ApplicationState } from '../Store';



interface IProps {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

const PrivateRoute = ({ component: Component, ...rest }: IProps) => {
  const store = useSelector((store: ApplicationState) => store);

  return <Route {...rest} render={(props) => (store.auth.isAuthenticated ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />)} />;
};

const Rotas: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/home" component={PeopleList} />        
        <PrivateRoute exact path="/people/form/:id" component={PeopleForm} />        
        <PrivateRoute exact path="/people/form" component={PeopleForm} />        
        <Redirect from="*" to="/login" />
      </Switch>
    </Router>
  );
};

export default Rotas;
