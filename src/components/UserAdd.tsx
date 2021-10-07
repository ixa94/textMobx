import * as React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Select,{SelectChangeEvent} from '@mui/material/Select';
import store, { UserOccupationList, UserPositionList } from "../store";
import { observer } from "mobx-react";
import { FormControl, MenuItem } from "@mui/material";

function UserAdd() {

  // const [position, setPosition] = React.useState('');
  // const [occupation, setOccupation] = React.useState('');

  const hanleChangeFild=(e:React.ChangeEvent<HTMLTextAreaElement|HTMLInputElement>|SelectChangeEvent,key:string)=>{
    store.newUser[key] = e.target.value
  }
  // const changePosition = (event: SelectChangeEvent) => {
  //   setPosition(event.target.value as string);
  // };
  // const changeOccupation= (event: SelectChangeEvent) => {
  //   setOccupation(event.target.value as string);
  // };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="ФИО" variant="outlined"  value={store.newUser.name} onChange={(e) => hanleChangeFild(e,"name")}/>
      <FormControl>
      <InputLabel id="demo-simple-select-label">Должность</InputLabel>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={store.newUser.position}
          label="Position"
          onChange={(e)=>hanleChangeFild(e,"position")}
        >
          {UserPositionList.map(list=>
            <MenuItem value={list}>{list}</MenuItem>
          )}
          </Select>
          </FormControl>
          <FormControl>
          <InputLabel id="demo-simple-select-label">Занятость</InputLabel>
           <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={store.newUser.occupation}
          label="Occupation"
          onChange={(e)=>hanleChangeFild(e,"occupation")}
        >
           {UserOccupationList.map(list=>
            <MenuItem value={list}>{list}</MenuItem>
          )}
        </Select>
          </FormControl>

      <Button variant="contained" onClick={() => store.addUser()}>Добавить</Button>
    </Box>
  );
}

export default observer(UserAdd);
