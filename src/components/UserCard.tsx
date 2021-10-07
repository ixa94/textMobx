import React, { FC, useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import store, { UserOccupationList, UserPositionList } from '../store';
import { observer } from 'mobx-react';
import { FormControl, MenuItem } from '@mui/material';
import { useHistory } from 'react-router';

const UserCard: FC = () => {

  const history = useHistory();

  function redicrect() {
    history.push(`/`);
  }
  const [changed, setChanged] = useState<boolean>(false);
  function changeButton() {
    setChanged(true);
  }
  function cancelButton() {
    setChanged(false);
  }
 

  const handleChangeField = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      | SelectChangeEvent,
    key: string
  ) => {
    store.selectedUser[key] = e.target.value;
  };
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {changed ? (
          <>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="ФИО"
                variant="outlined"
                value={store?.selectedUser.name}
                onChange={(e) => handleChangeField(e, 'name')}
              />
              <FormControl>
                <InputLabel id="demo-simple-select-label">Должность</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={store.selectedUser.position}
                  label="Position"
                  onChange={(e) => handleChangeField(e, 'position')}
                >
                  {UserPositionList.map((list) => (
                    <MenuItem value={list}>{list}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Занятость</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={store?.selectedUser.occupation}
                  label="Occupation"
                  onChange={(e) => handleChangeField(e, 'occupation')}
                >
                  {UserOccupationList.map((list) => (
                    <MenuItem value={list}>{list}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Button
                variant="contained"
                onClick={() => store?.changeUser(store.selectedUser.id)}
              >
                сохранить
              </Button>
              <Button
                    variant="text"
                    onClick={() => {
                      store.removeUser(store?.selectedUser.id)
                      redicrect()
                    }}
                   
                  >
                    Del
                  </Button>
                  <Button onClick={cancelButton}>Отмена</Button>
            </Box>
          </>
        ) : (
          <>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {store?.selectedUser.name}
            </Typography>
            <Typography variant="h5" component="div">
              {store?.selectedUser.position}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {store?.selectedUser.occupation}
            </Typography>
            <Typography variant="body2">{}</Typography>
            <Typography variant="body2">{}</Typography>
            <Button variant="contained" onClick={changeButton}>
              Изменить
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default observer(UserCard);
