import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import EmployeeTable from "./EmployeeTable";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const columns = [{
  id: 0,
  name: "First Name"
},
{
  id: 1,
  name: "Last Name"
},
{
  id: 3,
  name: "Employee ID"
}]



export default function EmpDetailsForm(props) {
  const classes = useStyles();
  const initialFormData = {
    firstName: "",
    lastName: "",
    empId: "",
  }

  const initialErr = {
	  firstNameErr: false,
	  lastNameErr: false,
    empIdErr: false
  }
  
  const [empDataForm, setEmpDataForm] = useState(initialFormData);
  const [tableDetails, setTableDetails] = useState([]);

  const [err, setErr] = useState(initialErr);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setEmpDataForm({ ...empDataForm, [name]: value });
  };

  const validations = () => {
    if (!empDataForm.firstName && !empDataForm.lastName && !empDataForm.empId) {
      setErr({
        ...err,
        firstNameErr: true,
	      lastNameErr: true,
        empIdErr: true
      });
      return true;
    }
    if (!empDataForm.firstName) {
      setErr({
        ...err,
        firstNameErr: true
      });
      return true;
    }
    if (!empDataForm.lastName) {
      setErr({
        ...err,
	      lastNameErr: true
      });
      return true;
    }
    if (!empDataForm.empId) {
      setErr({
        ...err,
        empIdErr: true
      });
      return true;
    }


    return false;
  };

  const handleSubmit = (e) => {
    const tableData = [...tableDetails];
    if (!validations()) {
      tableData.push(empDataForm);
      setTableDetails(tableData);
      setEmpDataForm(initialFormData);
      setErr(initialErr)
    }
  }

  const handleLogOut = (e) => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    props.history.push('/');
  }

  console.log(tableDetails)

  return (
    <React.Fragment>
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Welcome {localStorage.getItem("username")}
          </Typography>
          <Button color="inherit" onClick={handleLogOut}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
    <div className='emp-container'>
      <Typography variant="h6" gutterBottom>
        Employee Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            variant="outlined"
            value={empDataForm.firstName}
            fullWidth
            onChange={(e) => handleChange(e)}
            error={err.firstNameErr && !empDataForm.firstName}
            helperText={
              err.firstNameErr && !empDataForm.firstName
                ? "First Name is required"
                : " "
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            variant="outlined"
            value={empDataForm.lastName}
            fullWidth
            onChange={(e) => handleChange(e)}
            error={err.lastNameErr && !empDataForm.lastName}
            helperText={
              err.lastNameErr && !empDataForm.lastName
                ? "Last Name is required"
                : " "
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="empId"
            name="empId"
            label="Employee ID"
            variant="outlined"
            value={empDataForm.empId}
            fullWidth
            onChange={(e) => handleChange(e)}
            error={err.empIdErr && !empDataForm.empId}
            helperText={
              err.empIdErr && !empDataForm.empId
                ? "Employee ID is required"
                : " "
            }
          />
        </Grid>
      
      <Grid item xs={12} sm={6}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
      </Grid>

      <EmployeeTable tableData={tableDetails} columns={columns} />
      </div>
    </React.Fragment>
  );
}
