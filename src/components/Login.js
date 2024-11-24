import React, { useState } from 'react'
import { Box, Button, Modal, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [open, setOpen] = useState(true);
  const [username,setUsername] = useState("");
  const [password,setPassword] =useState("");
  const navigate = useNavigate();
  let a;
  const login = () => {
    if(username === "admin" && password === "admin"){
      
      a=localStorage.setItem("admin", true);
      alert('Admin logged in');
      navigate('/users');
    }
    else if(username.trim() === "" && password.trim() === "")
    {
      alert("username name and password required");
    }
    else{
      a=localStorage.setItem("user",true);
      alert('User logged in');
      navigate('/users');
    }
    console.log(a)
  };

  return (

    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          padding: 4,
          backgroundColor: "white",
          display: "block",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50%",
        }}
      >
        <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
        <Button variant="outlined" margin="normal" size="medium" onClick={login}>LOGIN</Button>
      </Box>
    </Modal>
  )
}

export default Login
