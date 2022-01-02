import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { TodosContainer } from 'containers/todos';
import { CreateTodo } from 'containers/CreateTodo';
import { EditTodo } from 'containers/EditTodo';

interface IRoutesProps {}

export const Routes: React.FC<IRoutesProps> = () => (
  <Switch>
    <Route path="/" exact={true} component={TodosContainer} />
    <Route path="/create" exact={true} component={CreateTodo} />
    <Route path="/edit" exact={true} component={EditTodo} />
  </Switch>
);
