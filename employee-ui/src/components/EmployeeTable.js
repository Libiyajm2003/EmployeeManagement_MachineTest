'use client';
import React from 'react';
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Button, IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const EmployeeTable = ({ employees, onEdit, onDelete }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="employee table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Department</TableCell>
                        <TableCell align="right">Salary</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map((employee) => (
                        <TableRow
                            key={employee.employeeId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {employee.name}
                            </TableCell>
                            <TableCell>{employee.email}</TableCell>
                            <TableCell>{employee.department}</TableCell>
                            <TableCell align="right">{employee.salary}</TableCell>
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
