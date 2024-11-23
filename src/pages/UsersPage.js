import React, { useState, useEffect } from "react";
import { getUsers, createUser, updateUser, deleteUser } from "../services/api";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Modal,
  TextField,
  Box,
  Select,
  MenuItem,
  InputLabel,
  Typography
} from "@mui/material";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    status: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleSubmit = async () => {
    if (form.id) {
      await updateUser(form.id, form);
      setForm("");
      setOpen(false);
    } else {

      if (form.email && form.name && form.role && form.status) {
        await createUser(form);
        setForm("");
        setOpen(false);
      }
      else {
        alert("all field required");
      }

    }
    fetchUsers();


  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div>
      <Button style={{ display:"flex", float:"right"}} variant="contained" onClick={() => setOpen(true)}>
        Add User
      </Button>
      <Table responsive>
        <TableHead >
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}
            style={{backgroundColor:"hover:blue"}}
            >
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>
                <Button
                  variant="outlined" 
                  size="small"
                  margin="normal"
                  style={{marginRight:"5px"}}
                  onClick={() => {
                    setForm(user);
                    setOpen(true);
                  }}
                >
                  Edit
                </Button>
                <Button 
                variant="outlined" size="small"  margin="normal"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Modal open={open} onClose={() => setOpen(false)}>

        <Box
          sx={{
            padding: 4,
            backgroundColor: "white",
            display:"block",
            position:"absolute",
            top: "50%", 
            left: "50%", 
            transform: "translate(-50%, -50%)", 
            width: "50%",
          }}
        >
          <Typography variant="h6">Add user Details</Typography> <hr />
          <TextField
            label="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            fullWidth
            margin="normal"
            required
          />
          <br /> <br />
          <InputLabel id="demo-simple-select-label ">Select Role *</InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={form.role}
            label="Select Role *"
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            fullWidth
            margin="normal"
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </Select>
          <br /> <br />

          <InputLabel id="demo-simple-select-label ">Select Status *</InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            fullWidth
            margin="normal"
          >
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
          <br /> <br />

          <Button onClick={handleSubmit} variant="outlined" margin="normal" size="medium">
            Submit
          </Button>

        </Box>
      </Modal>
    </div>
  );
};

export default UsersPage;
