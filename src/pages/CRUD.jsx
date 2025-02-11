import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";

const CRUD = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: "", name: "", email: "" });
  const [isEditing, setIsEditing] = useState(false);

  const handleOpen = (user = { id: "", name: "", email: "" }) => {
    setCurrentUser(user);
    setIsEditing(Boolean(user.id));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };  

  const handleSave = () => {
    if (isEditing) {
      setUsers(users.map((u) => (u.id === currentUser.id ? currentUser : u)));
    } else {
      setUsers([...users, { ...currentUser, id: uuidv4() }]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <Container maxWidth="md" style={{ marginTop: 20 }}>
      <TextField
        label="Search Users"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={() => handleOpen()}>
        Add User
      </Button>
      <TableContainer component={Paper} style={{ marginTop: 20 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleOpen(user)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(user.id)}
                      style={{ marginLeft: 10 }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? "Edit User" : "Add User"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={currentUser.name}
            onChange={(e) =>
              setCurrentUser({ ...currentUser, name: e.target.value })
            }
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={currentUser.email}
            onChange={(e) =>
              setCurrentUser({ ...currentUser, email: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default CRUD;
