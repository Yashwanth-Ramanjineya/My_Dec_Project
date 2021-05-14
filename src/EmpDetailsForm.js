import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import EmployeeTable from "./EmployeeTable";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
  const [empDataForm, setEmpDataForm] = useState({
    firstName: "",
    lastName: "",
    empId: "",
  });
  const [tableDetails, setTableDetails] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setEmpDataForm({ ...empDataForm, [name]: value });
  };

  const handleSubmit = (e) => {
    const tableData = [...tableDetails];
    tableData.push(empDataForm);
    setTableDetails(tableData);
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
            Dashboard
          </Typography>
          <Button color="inherit" onClick={handleLogOut}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
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
            fullWidth
            autoComplete="given-name"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="empId"
            name="empId"
            label="Employee ID"
            fullWidth
            autoComplete="shipping address-line1"
            onChange={(e) => handleChange(e)}
          />
        </Grid>
      
      <Grid item xs={12} sm={6}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
      </Grid>

      <EmployeeTable tableData={tableDetails} columns={columns} />
    </React.Fragment>
  );
}
