import React, { useState, useEffect } from "react";
import { getRoles, createRole, updateRole, deleteRole } from "../services/api";
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
  Chip,
} from "@mui/material";

const RolesPage = () => {
  const [roles, setRoles] = useState([]);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", permissions: [] });

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    const data = await getRoles();
    setRoles(data);
  };

  const handleSubmit = async () => {
    if (form.id) {
      await updateRole(form.id, form);
    } else {
      await createRole(form);
    }
    fetchRoles();
    setOpen(false);
  };

  const handleDelete = async (id) => {
    await deleteRole(id);
    fetchRoles();
  };

  const handlePermissionChange = (permission) => {
    setForm((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(permission)
        ? prev.permissions.filter((perm) => perm !== permission)
        : [...prev.permissions, permission],
    }));
  };

  return (
    <div>
      <Button style={{ display:"flex", float:"right"}} variant="contained" onClick={() => setOpen(true)}>
        Add Role
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Role Name</TableCell>
            <TableCell>Permissions</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map((role) => (
            <TableRow key={role.id}>
              <TableCell>{role.name}</TableCell>
              <TableCell>
                {role.permissions.map((perm) => (
                  <Chip key={perm} label={perm} style={{ margin: 2 }} />
                ))}
              </TableCell>
              <TableCell>
                <Button
                variant="outlined" 
                size="small"
                margin="normal"
                style={{marginRight:"5px"}}
                  onClick={() => {
                    setForm(role);
                    setOpen(true);
                  }}
                >
                  Edit
                </Button>
                <Button 
                variant="outlined" 
                size="small"
                margin="normal"
                style={{marginRight:"5px"}}
                onClick={() => handleDelete(role.id)}>Delete</Button>
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
            margin: "auto",
            top: "20%",
            width: "50%",
          }}
        >
          <TextField
            label="Role Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <div>
            <label>Permissions:</label>
            {["Read", "Write", "Delete"].map((perm) => (
              <Chip
                key={perm}
                label={perm}
                onClick={() => handlePermissionChange(perm)}
                style={{
                  margin: 2,
                  backgroundColor: form.permissions.includes(perm)
                    ? "#1976d2"
                    : undefined,
                  color: form.permissions.includes(perm) ? "white" : undefined,
                }}
              />
            ))}
          </div>
          <Button onClick={handleSubmit}>Submit</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default RolesPage;
