'use client';
import React, { useEffect, useState } from 'react';
import {
    Container, Typography, Button, Box, Alert, Snackbar
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EmployeeTable from '../components/EmployeeTable';
import EmployeeDialog from '../components/EmployeeDialog';
import {
    getEmployees, createEmployee, updateEmployee, deleteEmployee
} from '../services/employeeApi';

export default function Home() {
    const [employees, setEmployees] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [currentEmployee, setCurrentEmployee] = useState(null);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

    const fetchEmployees = async () => {
        try {
            const data = await getEmployees();
            setEmployees(data);
        } catch (error) {
            showSnackbar('Error fetching employees', 'error');
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    const handleOpenDialog = (employee = null) => {
        setCurrentEmployee(employee);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setCurrentEmployee(null);
    };

    const handleSubmit = async (formData) => {
        try {
            if (currentEmployee) {
                await updateEmployee(currentEmployee.employeeId, {
                    ...currentEmployee, ...formData
                });
                showSnackbar('Employee updated successfully');
            } else {
                await createEmployee(formData);
                showSnackbar('Employee created successfully');
            }
            handleCloseDialog();
            fetchEmployees();
        } catch (error) {
            showSnackbar('Error saving employee', 'error');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this employee?')) {
            try {
                await deleteEmployee(id);
                showSnackbar('Employee deleted successfully');
                fetchEmployees();
            } catch (error) {
                showSnackbar('Error deleting employee', 'error');
            }
        }
    };

    const showSnackbar = (message, severity = 'success') => {
        setSnackbar({ open: true, message, severity });
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h4" component="h1">
                    Employee Management
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => handleOpenDialog()}
                >
                    Add Employee
                </Button>
            </Box>

            <EmployeeTable
                employees={employees}
                onEdit={handleOpenDialog}
                onDelete={handleDelete}
            />

            <EmployeeDialog
                open={openDialog}
                handleClose={handleCloseDialog}
                handleSubmit={handleSubmit}
                employee={currentEmployee}
            />

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
            >
                <Alert severity={snackbar.severity} sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Container>
    );
}
