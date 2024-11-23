import React, { useEffect, useState } from "react";
import { getRoles, updateRole } from "../services/api";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Switch,
} from "@mui/material";

const PermissionsPage = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    const data = await getRoles();
    setRoles(data);
  };

  const togglePermission = async (roleId, permission) => {
    const role = roles.find((r) => r.id === roleId);
    const updatedPermissions = role.permissions.includes(permission)
      ? role.permissions.filter((perm) => perm !== permission)
      : [...role.permissions, permission];

    await updateRole(roleId, { ...role, permissions: updatedPermissions });
    fetchRoles();
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Role Name</TableCell>
          <TableCell>Read</TableCell>
          <TableCell>Write</TableCell>
          <TableCell>Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {roles.map((role) => (
          <TableRow key={role.id}>
            <TableCell>{role.name}</TableCell>
            {["Read", "Write", "Delete"].map((perm) => (
              <TableCell key={perm}>
                <Switch
                  checked={role.permissions.includes(perm)}
                  onChange={() => togglePermission(role.id, perm)}
                />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PermissionsPage;
