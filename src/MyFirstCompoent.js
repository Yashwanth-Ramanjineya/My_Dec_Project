import {useState, useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {storeAction, employeesSuccessAction, userDataAction} from './Actions';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
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
    dispatch(storeAction);
    axios.post('https://api.mocki.io/v1/b043df5a').then(res => {
      console.log(res.data);
      dispatch(employeesSuccessAction(res.data));
    })
  }

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(res => {
      console.log(res.data);
      dispatch(userDataAction(res.data));
    })

  }, [])

  useEffect(()=>{
    console.log(myStoreData)

  }, [myStoreData])

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
          {myStoreData && myStoreData.myEmployeesData && myStoreData.myEmployeesData.map((row) => (
          <MenuItem value="">
            {row.city}
          </MenuItem>
         ))}
        </Select>
      </FormControl>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="User Name" variant="outlined" onChange={handleTextBoxChange} />
      <Button onClick={handleMyButton}>Click This Button to dispacth action</Button>
      
    </form>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>CITY</TableCell>
            <TableCell>NAME</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myStoreData && myStoreData.myEmployeesData && myStoreData.myEmployeesData.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.city}
              </TableCell>
              <TableCell>{row.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
}

export default MyFirstComponent;
