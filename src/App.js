import React from 'react'
import logo from './logo.svg';
import "./App.css";

import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import 'fontsource-roboto';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const CheckboxExample = () => {
  const [checked, setChecked] = React.useState(true)

  return (
    <FormControlLabel 
      control={
        <Checkbox 
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
        />}
        label="Testing Checkbox"
    />
  )
}

function App() {
  return (
    <Container maxWidth="xl">
      <div className="App">
        <header className="App-header">
        <AppBar color='secondary'>
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6'>
              MUI Themeing
            </Typography>
            <Button color='success'>
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Typography variant="h2" component="div">
          Welcom to MUI
        </Typography>
        <Typography variant="subtitle1">
          Learn how to use Material UI components
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={3} sm={6}>
            <Paper style={{ height:75, width:'100%' }} />
          </Grid>
          <Grid item xs={3} sm={6}>
            <Paper style={{ height:75, width:'100%' }} />
          </Grid>
          <Grid item xs={3} sm={6}>
            <Paper style={{ height:75, width:'100%' }} />
          </Grid>
        </Grid>

        <CheckboxExample />
        <ButtonGroup variant="contained" color="primary">
          <Button
            startIcon={<SaveIcon />}
            size="large" 
          >
            Save
          </Button>
          <Button
            startIcon={<DeleteIcon />}
          >
            Discard
          </Button>
        </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Container>
  );
}

export default App;
