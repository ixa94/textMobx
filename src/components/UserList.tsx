import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { observer } from 'mobx-react';
import store from '../store';
import { Link, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

function UserList() {
  const history = useHistory();

  function redicrect(id) {
    history.push(`/card:${id}`);
    store.userById(id);
  }
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>ФИО</TableCell>
              <TableCell align="right">Должность</TableCell>
              <TableCell align="right">Занятость</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {store?.users.map((user) => (
              <TableRow >
                <TableCell onClick={() => redicrect(user.id)} key={user.id}>{user.name}</TableCell>
                <TableCell align="right">{user.occupation}</TableCell>
                <TableCell align="right">{user.position}</TableCell>
                <Grid>
                  <Button
                    variant="text"
                    onClick={() => {
                      store.removeUser(user.id);
                    }}
                  >
                    Del
                  </Button>
                </Grid>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default observer(UserList);
