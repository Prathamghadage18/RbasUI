# Role-Based Access Control (RBAC) UI

## Overview

This is a React-based User Interface (UI) for managing users, roles, and permissions in a system using Role-Based Access Control (RBAC). The application allows administrators to manage users, define and assign roles, and control permissions with ease. The backend is simulated using [json-server](https://github.com/typicode/json-server) to mock API calls.

---

## Features

- **User Management**: 
  - View, create, edit, and delete users.
  - Assign roles to users.
  - Set user status (Active/Inactive).

- **Role Management**: 
  - Create, edit, and delete roles.
  - Define permissions for roles (e.g., Read, Write, Delete).

- **Permissions Management**: 
  - View and modify permissions for roles.
  - Assign permissions such as Read, Write, and Delete to roles.

- **Mock API**: 
  - Uses `json-server` to mock backend API responses.

---

## Installation

### Prerequisites

- npx create-react-app rbac-ui
cd rbac-ui
npm install @mui/material @emotion/react @emotion/styled axios react-router-dom json-server

