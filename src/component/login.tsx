import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import Box from "@mui/material/Box"

const Login: React.FC = () => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"   
      marginLeft="calc(50vw - 370px)"  
      width="300px"     
      mt={5}
    >
      <TextField
        inputRef={userNameRef}
        label="Kullanıcı Adı"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        inputRef={passwordRef}
        label="Password"
        // type="password"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          axios.post(`http://localhost:35068/api/Login/UserControle`, {
            item1: userNameRef.current?.value,
            item2: passwordRef.current?.value
          })
          .then(result => {
            console.log('result :>> ', result);
            if (result.status === 200) {
              navigate(`/categories`);
            }
          })
          .catch(err => {
            console.error('Error:', err);
          });
        }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
