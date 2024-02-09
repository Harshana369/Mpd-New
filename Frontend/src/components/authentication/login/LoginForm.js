/* eslint-disable */

import * as Yup from 'yup';
import { useState, useEffect, useContext } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { Link as RouterLink, json, useLocation, useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';

// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Button,
  Typography,
  Grid,
  Alert,
  CircularProgress
} from '@mui/material';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const [loading, setLoading] = useState(false); // Add loading state

  const navigate = useNavigate();

  const isAuthorized = localStorage.getItem('userToken');

  const redirect = '/dashboard/home';
  useEffect(() => {
    if (isAuthorized === 'undefined' || isAuthorized === null) {
    } else {
      navigate(redirect);
    }
  }, []);

  const [showPassword, setShowPassword] = useState(false);

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const checkToken = () => {
    const token = localStorage.getItem('userToken');
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Convert to seconds

      if (decodedToken.exp && decodedToken.exp < currentTime) {
        // Token has expired, delete localStorage item
        localStorage.removeItem('userToken');
        localStorage.removeItem('accessprivilege');
      }
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    // setLoading(true); // Set loading state to false

    // dispatch(login(username, password));
    // navigate('/dashboard/app');

    const config = {
      header: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://35.78.68.113'
      }
    };
    try {
      const response = await axios.post(
        'https://projectonline.mobitel.lk/projonline/login',
        { username, password },
        config
      );

      localStorage.setItem('userToken', JSON.stringify(response.data.accessToken));
      localStorage.setItem('accessprivilege', response.data.visbilityBasedOn);
      localStorage.setItem('name', response.data.name);
      localStorage.setItem('email', response.data.email);

      if (response.data.accessToken) {
        setLoading(false); // Set loading state to false

        navigate(redirect);
        checkToken();
      } else {
        setError(response.data);
        setLoading(false); // Set loading state to false
      }
    } catch (err) {
      console.log(err);
    }
  };

  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .matches(/^\w+$/, 'UserName must contain only letters, numbers or underscores')
      .required('UserName is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema
    // onSubmit: () => {
    //   navigate('/dashboard');
    // }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  // const notify = () => toast('Wow so easy!');

  return (
    <>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={loginHandler}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
            {error && (
              <Grid item xs={12} sm={6} md={12}>
                <Accordion
                  sx={{
                    backgroundColor: '#c20202',
                    borderRadius: 0.2,
                    alignItems: 'center'
                  }}
                >
                  <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
                    <Typography variant="h8" justifyContent="space-between">
                      <span className="error-message">{error}</span>
                    </Typography>
                  </AccordionSummary>
                </Accordion>
              </Grid>
            )}
          </Stack>
          <Stack spacing={3}>
            <TextField
              fullWidth
              autoComplete="off"
              size="large"
              type="text" // change the type to 'text'
              label="UserName"
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              error={error}
            />

            <TextField
              fullWidth
              autoComplete="off"
              size="large"
              // autoComplete="current-password"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              // {...getFieldProps('password')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
              error={error}
            />
          </Stack>

          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
            <FormControlLabel
              control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
              label="Remember me"
            />

            <Link component={RouterLink} variant="subtitle2" to="#">
              Forgot password?
            </Link>
          </Stack>
          {loading === true ? <CircularProgress /> : null}

          <Button
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            onClick={(e) => {
              loginHandler(e);
            }}
            loading={isSubmitting}
          >
            Login
          </Button>
        </Form>
      </FormikProvider>
    </>
  );
}
