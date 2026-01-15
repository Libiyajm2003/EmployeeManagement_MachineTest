import axios from 'axios';

const API_URL = 'http://localhost:5252/api/employees';

const api = axios.create({
    baseURL: API_URL,
});

export const getEmployees = async () => {
    try {
        const response = await api.get('/');
        return response.data;
    } catch (error) {
        console.error("Error fetching employees", error);
        throw error;
    }
};

export const getEmployeeById = async (id) => {
    try {
        const response = await api.get(`/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching employee", error);
        throw error;
    }
};

export const createEmployee = async (employee) => {
    try {
        const response = await api.post('/', employee);
        return response.data;
    } catch (error) {
        console.error("Error creating employee", error);
        throw error;
    }
};

export const updateEmployee = async (id, employee) => {
    try {
        const response = await api.put(`/${id}`, employee);
        return response.data;
    } catch (error) {
        console.error("Error updating employee", error);
        throw error;
    }
};

export const deleteEmployee = async (id) => {
    try {
        const response = await api.delete(`/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting employee", error);
        throw error;
    }
};
