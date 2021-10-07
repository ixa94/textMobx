
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {Link} from 'react-router-dom';


export default function Nav() {
  return (
    <div role="presentation" >
      <Breadcrumbs maxItems={2} aria-label="breadcrumb">
        <Link to="/">
          UserList
        </Link>
        <Link to="/addUser">
          AddUser
        </Link>
      </Breadcrumbs>
    </div>
  );
}
