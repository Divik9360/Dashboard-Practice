import React from 'react'
import Sidenav from '../Sidenav'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import ProductList from './ProductList';
import UserTable from './ProductList';

const Products = () => {
  return (
    <>
    <div>
        <Box height={70}/>
      <Box sx={{display: 'flex'}}>
        <Sidenav/>
        <Box component='main'>

        </Box>
        <UserTable/>
      </Box>
    </div>
    </>
  )
}

export default Products

// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

// const columns = [
//   { id: 'name', label: 'Name', minWidth: 170 },
//   { id: 'code', label: 'ISO Code', minWidth: 100 },
//   { id: 'population', label: 'Population', minWidth: 170, align: 'right' },
//   { id: 'size', label: 'Size (km²)', minWidth: 170, align: 'right' },
//   { id: 'density', label: 'Density', minWidth: 170, align: 'right' },
//   { id: 'actions', label: 'Actions', minWidth: 100, align: 'center' }
// ];

// const initialRows = [
//   { name: 'India', code: 'IN', population: 1324171354, size: 3287263 },
//   { name: 'China', code: 'CN', population: 1403500365, size: 9596961 },
//   { name: 'United States', code: 'US', population: 327167434, size: 9833520 }
// ];

// export default function ProductList() {
//   const [rows, setRows] = React.useState(initialRows);
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   const [open, setOpen] = React.useState(false);
//   const [newRow, setNewRow] = React.useState({ name: '', code: '', population: '', size: '' });
//   const [editIndex, setEditIndex] = React.useState(null);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   const handleClickOpen = () => {
//     setNewRow({ name: '', code: '', population: '', size: '' });
//     setEditIndex(null);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleAddOrUpdate = () => {
//     const updatedRow = { ...newRow, population: Number(newRow.population), size: Number(newRow.size) };
//     if (editIndex !== null) {
//       const updatedRows = [...rows];
//       updatedRows[editIndex] = updatedRow;
//       setRows(updatedRows);
//     } else {
//       setRows([...rows, updatedRow]);
//     }
//     setOpen(false);
//   };

//   const handleEdit = (index) => {
//     setNewRow(rows[index]);
//     setEditIndex(index);
//     setOpen(true);
//   };

//   const handleDelete = (index) => {
//     setRows(rows.filter((_, i) => i !== index));
//   };

//   return (
   
//    <Paper sx={{ width: '100%', padding: 2, overflow: 'auto' }}>
//       <Button variant="contained" onClick={handleClickOpen} sx={{ mb: 2 }}>Add Item</Button>
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader>
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell key={column.id} align={column.align}>{column.label}</TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
//               <TableRow hover key={index}>
//                 {columns.map((column) => (
//                   <TableCell key={column.id} align={column.align}>
//                     {column.id === 'actions' ? (
//                       <>
//                         <IconButton onClick={() => handleEdit(index)}><EditIcon /></IconButton>
//                         <IconButton onClick={() => handleDelete(index)}><DeleteIcon /></IconButton>
//                       </>
//                     ) : column.id === 'density' ? (
//                       (row.population / row.size).toFixed(2)
//                     ) : (
//                       row[column.id]
//                     )}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>{editIndex !== null ? 'Edit Item' : 'Add Item'}</DialogTitle>
//         <DialogContent>
//           <TextField label="Name" fullWidth margin="dense" value={newRow.name} onChange={(e) => setNewRow({ ...newRow, name: e.target.value })} />
//           <TextField label="Code" fullWidth margin="dense" value={newRow.code} onChange={(e) => setNewRow({ ...newRow, code: e.target.value })} />
//           <TextField label="Population" fullWidth margin="dense" type="number" value={newRow.population} onChange={(e) => setNewRow({ ...newRow, population: e.target.value })} />
//           <TextField label="Size" fullWidth margin="dense" type="number" value={newRow.size} onChange={(e) => setNewRow({ ...newRow, size: e.target.value })} />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleAddOrUpdate}>{editIndex !== null ? 'Update' : 'Add'}</Button>
//         </DialogActions>
//       </Dialog>
//     </Paper>
//   );
// }
