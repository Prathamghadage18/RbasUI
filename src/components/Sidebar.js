import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";

const Sidebar = () => {
  return (
    <List style={{ height:"screen", width:"full",backgroundColor:"#1976d2", height:"100vh" }}>
      <ListItem button component={Link} to="/users">
        <ListItemText primary="Users" style={{color:"white"}} />
      </ListItem>
      <ListItem button component={Link} to="/roles">
        <ListItemText primary="Roles"  style={{color:"white"}}/>
      </ListItem>
      <ListItem button component={Link} to="/permissions">
        <ListItemText primary="Permissions" style={{color:"white"}}/>
      </ListItem>
    </List>
    
  );
};

export default Sidebar;
