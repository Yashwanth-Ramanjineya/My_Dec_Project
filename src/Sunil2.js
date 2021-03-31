import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Sunil2() {
  const classes = useStyles();
  const [Income, setIncome] = useState("1lak");
  const [Tax, setTax] = useState("2k");
  const handleButton = () => {
    setIncome("2lak");
  };
  const handleButtons = () => {
    setTax("2.5k");
  };

  const [Education, seteducation] = React.useState("");

  const handleChange = (event) => {
    seteducation(event.target.value);
  };
  return (
    <div>
      <h1>
        Job Details {Income} ,{Tax}
      </h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Lastname" />
        <TextField id="filled-basic" label="Firstname" variant="filled" />
        <TextField id="outlined-basic" label="Middlename" variant="outlined" />
        <TextField id="outlined-basic" label="Address" variant="outlined" />
      </form>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Education</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Education}
          onChange={handleChange}
        >
          <MenuItem value={"B.E."}>B.E.</MenuItem>
          <MenuItem value={"MS"}>MS</MenuItem>
          <MenuItem value={"UnderGraduate"}>UnderGraduate</MenuItem>
        </Select>
      </FormControl>
      <button onClick={handleButton}>button</button>
      <button onClick={handleButtons}>buttons</button>
    </div>
  );
}
export default Sunil2;
