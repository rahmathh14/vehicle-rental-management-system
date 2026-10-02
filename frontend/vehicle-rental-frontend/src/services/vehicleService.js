import axios from "axios";

const API_URL = "http://localhost:8080/api/vehicles";

export const getVehicles = () => {
    return axios.get(API_URL);
};

export const addVehicle = (vehicle) => {
    return axios.post(API_URL, vehicle);
};

export const updateVehicle = (id, vehicle) => {
    return axios.put(`${API_URL}/${id}`, vehicle);
};

export const deleteVehicle = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};