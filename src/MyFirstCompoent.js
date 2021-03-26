import {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {storeAction} from './Actions';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function MyFirstComponent(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const myStoreData = useSelector(state => state);
  console.log(myStoreData, "=====================");


  const [age, setAge] = useState('');
  const [textBoxValue, setTextBoxValue] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleTextBoxChange = (event) => {
      setTextBoxValue(event.target.value)
  }

  const handleMyButton = () => {
    dispatch(storeAction)
  }

  return (
    <div>
      <h1>ThIS IS mY fUNCTIONAL compoent {age} {textBoxValue} {myStoreData && myStoreData.myData}</h1>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="User Name" variant="outlined" onChange={handleTextBoxChange} />
      <Button onClick={handleMyButton}>Click This Button to dispacth action</Button>
    </form>

    </div>
  );
}

export default MyFirstComponent;
