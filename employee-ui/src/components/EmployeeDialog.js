'use client';
import React, { useState, useEffect } from 'react';
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    Button, TextField, Box
} from '@mui/material';

const EmployeeDialog = ({ open, handleClose, handleSubmit, employee }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: '',
        salary: ''
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (employee) {
            setFormData({
                name: employee.name || '',
                email: employee.email || '',
                department: employee.department || '',
                salary: employee.salary || ''
            });
        } else {
            setFormData({
                name: '',
                email: '',
                department: '',
                salary: ''
            });
        }
        setErrors({});
    }, [employee, open]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        setErrors(prev => ({
            ...prev,
            [name]: ''
        }));
    };

    const onSubmit = () => {
        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        }

        if (!formData.department.trim()) {
            newErrors.department = 'Department is required';
        }

        if (!formData.salary || Number(formData.salary) <= 0) {
            newErrors.salary = 'Salary must be greater than 0';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        handleSubmit(formData);
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle>
                {employee ? 'Edit Employee' : 'Add Employee'}
            </DialogTitle>

            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>

                    <TextField
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                        required
                        error={!!errors.name}
                        helperText={errors.name}
                    />

                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        required
                        error={!!errors.email}
                        helperText={errors.email}
                    />

                    <TextField
                        label="Department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        fullWidth
                        required
                        error={!!errors.department}
                        helperText={errors.department}
                    />

                    <TextField
                        label="Salary"
                        name="salary"
                        type="number"
                        value={formData.salary}
                        onChange={handleChange}
                        fullWidth
                        required
                        error={!!errors.salary}
                        helperText={errors.salary}
                    />

                </Box>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={onSubmit} variant="contained">
                    {employee ? 'Update' : 'Create'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EmployeeDialog;
