import * as React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Button, 
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
  Box
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
  { id: 'firstName', label: 'First Name', minWidth: 170 },
  { id: 'lastName', label: 'Last Name', minWidth: 170 },
  { id: 'age', label: 'Age', minWidth: 50, align: 'right' },
  { id: 'email', label: 'Email', minWidth: 200 },
  { id: 'actions', label: 'Actions', minWidth: 100, align: 'center' }
];

export default function UserTable() {
  const [users, setUsers] = React.useState([]);
  const [filteredUsers, setFilteredUsers] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [newUser, setNewUser] = React.useState({ firstName: '', lastName: '', age: '', email: '' });
  const [editIndex, setEditIndex] = React.useState(null);

  React.useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data.users);
        setFilteredUsers(data.users);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  React.useEffect(() => {
    setFilteredUsers(
      users.filter(user =>
        Object.values(user).some(value =>
          value.toString().toLowerCase().includes(search.toLowerCase())
        )
      )
    );
  }, [search, users]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClickOpen = () => {
    setNewUser({ firstName: '', lastName: '', age: '', email: '' });
    setEditIndex(null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddOrUpdate = () => {
    const updatedUser = { ...newUser, age: Number(newUser.age) };
    if (editIndex !== null) {
      const updatedUsers = [...users];
      updatedUsers[editIndex] = updatedUser;
      setUsers(updatedUsers);
    } else {
      setUsers([updatedUser,...users]);
    }
    setOpen(false);
  };

  const handleEdit = (index) => {
    setNewUser(filteredUsers[index]);
    setEditIndex(users.indexOf(filteredUsers[index]));
    setOpen(true);
  };

  const handleDelete = (index) => {
    setUsers(users.filter((_, i) => i !== users.indexOf(filteredUsers[index])));
  };

  return (
    <Box sx={{ width: '100%', padding: 2, overflow: 'auto' }}>
      <TextField
        label="Search"
        margin="dense"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button variant="contained" onClick={handleClickOpen} sx={{ mb: 2, mt: -8,ml: 135 }}>Add User</Button>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, index) => (
              <TableRow hover key={index}>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align}>
                    {column.id === 'actions' ? (
                      <>
                        <IconButton onClick={() => handleEdit(index)}><EditIcon /></IconButton>
                        <IconButton onClick={() => handleDelete(index)}><DeleteIcon /></IconButton>
                      </>
                    ) : (
                      user[column.id]
                    )}
                  </TableCell>  
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={filteredUsers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editIndex !== null ? 'Edit User' : 'Add User'}</DialogTitle>
        <DialogContent>
          <TextField label="First Name" fullWidth margin="dense" value={newUser.firstName} onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })} />
          <TextField label="Last Name" fullWidth margin="dense" value={newUser.lastName} onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })} />
          <TextField label="Age" fullWidth margin="dense" type="number" value={newUser.age} onChange={(e) => setNewUser({ ...newUser, age: e.target.value })} />
          <TextField label="Email" fullWidth margin="dense" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddOrUpdate}>{editIndex !== null ? 'Update' : 'Add'}</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
