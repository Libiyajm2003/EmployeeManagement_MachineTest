'use client';
import React from 'react';
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="employee table">
                <TableHead sx={{ backgroundColor: '#d1e3ff' }}>
  <TableRow>
    <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
    <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
    <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
    <TableCell sx={{ fontWeight: 'bold' }}>Department</TableCell>
    <TableCell sx={{ fontWeight: 'bold' }}>Salary</TableCell>
    <TableCell sx={{ fontWeight: 'bold' }}>Created On</TableCell>
    <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
  </TableRow>
</TableHead>
                <TableBody>
                    {employees.map((employee) => (
                        <TableRow
                            key={employee.employeeId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{employee.employeeId}</TableCell> {/* Display EmployeeId */}
                            <TableCell component="th" scope="row">
                                {employee.name}
                            </TableCell>
                            <TableCell>{employee.email}</TableCell>
                            <TableCell>{employee.department}</TableCell>
                            <TableCell align="right">{employee.salary}</TableCell>
                            <TableCell>
                                {new Date(employee.createdOn).toLocaleString()} {/* Format CreatedOn */}
                            </TableCell>
                            <TableCell align="right">
                                <IconButton color="primary" onClick={() => onEdit(employee)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton color="error" onClick={() => onDelete(employee.employeeId)}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default EmployeeTable;
