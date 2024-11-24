import React, { useEffect } from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

import { Link } from "react-router-dom";
const Header = () => {

  
  
  let ifAdminLogin = false;
  useEffect(()=>{
    ifAdminLogin = localStorage.getItem('admin' || 'user');
  });
  console.log("header : "+ifAdminLogin);

  const logout = () => {
    localStorage.removeItem("admin",false);
    localStorage.clear();
    alert("logout successfully");
  }

  return (
    <AppBar position="static">
      <Toolbar
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <Typography variant="h6">RBAC Dashboard</Typography>
        </div>

        <div>
          {
            ifAdminLogin == false ?
            <Link to="/login"><Button variant="outlined" margin="normal" size="medium" style={{ color: "white", border: "1px solid white" }}>Login</Button>
              </Link>  
            :
              <Button
                onClick={() => (logout)}
                variant="outlined" margin="normal" size="medium" style={{ color: "white", border: "1px solid white" }} >Logout</Button>
              

          }
        </div>

      </Toolbar>
    </AppBar>
  )


}

export default Header;
