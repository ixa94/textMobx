import * as React from 'react';
import UserList from './components/UserList';
import UserAdd from './components/UserAdd';
import UserCard from './components/UserCard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import store from './store';

export function App() {
 
  return (
    <Router>
      <Nav/>
          <Switch>
            <Route exact path='/'>            
              <UserList />
            </Route>
            <Route path='/addUser'>            
              <UserAdd />             
            </Route>
            <Route path='/card:id'>
              <UserCard/>
            </Route>
          </Switch>
       
    </Router>
  );
}
