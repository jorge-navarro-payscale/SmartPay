import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import CountUp from 'react-countup';
import { useEffect, useState } from "react";
import myData from './data.json';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        SmartPay
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

const cities = [
  {
    jobTitle: 'Software Engineer',
    city: 'Boston',
    salary: '50000'
  },
  {
    jobTitle: 'Software Engineer',
    city: 'Philadelphia',
    salary: '80000'
  },
  {
    jobTitle: 'Software Developer',
    city: 'Detroit',
    salary: '150000'
  }
];

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function PricingContent() {
  const [salary, setSalary] = useState(0);
  const [idealSalary, setIdealSalary] = useState(0);
  const [idealJobTitle, setIdealJobTitle] = useState('unknown');
  const [idealCity, setIdealCity] = useState('unknown');

  const handleSalaryChange = (event) => {
    setSalary(event.target.value);
  }

  const handleIdealJobTitle = (event) => {
    setIdealJobTitle(event.target.value);
  }

  const handleIdealSalary = (event) => {
    setIdealSalary(event.target.value);
  }

  const matchCities = (idealSalary, idealJobTitle) => {
    const filtered = cities.filter(obj => obj.jobTitle == idealJobTitle && parseInt(obj.salary) >= idealSalary);
    if (filtered.length > 0) {
      return filtered[0].city;
    } else {
      return 'unknown';
    }
  }

  const handleButton = () => {
    setIdealCity(matchCities(idealSalary, idealJobTitle));
  }

  useEffect(() => {
    console.log(myData)
  });

  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            SmartPay
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
        Enter Some Basic Information.
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          sx={{mb: 4}}
        >
          <TextField fullWidth id="standard-basic" label="Desired Salary" variant="standard" onChange={handleIdealSalary}/>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          sx={{mb: 4}}
        >
          <TextField fullWidth id="standard-basic" label="Current Salary" variant="standard" onChange={handleSalaryChange}/>
        </Box>
        <Box sx={{ minWidth: 120, mb: 4 }}>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-label">Desired Location</InputLabel>
            <Select
              defaultValue=""
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={'Boston'}>Boston</MenuItem>
              <MenuItem value={'San Francisco'}>San Francisco</MenuItem>
              <MenuItem value={'Philadelphia'}>Philadelphia</MenuItem>
          </Select>
        </FormControl>
        </Box>
        <Box sx={{ minWidth: 120, mb: 4 }}>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-label">Desired Job</InputLabel>
            <Select
              defaultValue=""
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              onChange={handleIdealJobTitle}
            >
              <MenuItem value={'Software Engineer'}>Software Engineer</MenuItem>
              <MenuItem value={'Software Developer'}>Software Developer</MenuItem>
              <MenuItem value={'Dev Ops'}>Dev Ops</MenuItem>
          </Select>
        </FormControl>
        </Box>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Ideal City: {idealCity}
        </Typography>
        <Box textAlign="center">
          <Button onClick={handleButton} fullWidth variant="contained">Calculate</Button>
        </Box>
      </Container>
      {/* End hero unit */}
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
