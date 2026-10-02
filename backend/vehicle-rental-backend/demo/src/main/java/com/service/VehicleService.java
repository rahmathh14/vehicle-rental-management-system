package com.service;

import com.model.Vehicle;
import com.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehicleService {

    @Autowired
    private VehicleRepository repository;

    public List<Vehicle> getAllVehicles() {
        return repository.findAll();
    }

    public Vehicle addVehicle(Vehicle vehicle) {
        return repository.save(vehicle);
    }

    public Optional<Vehicle> getVehicleById(Long id) {
        return repository.findById(id);
    }

    public Vehicle updateVehicle(Long id, Vehicle vehicle) {

    Vehicle existingVehicle = repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Vehicle not found"));

    existingVehicle.setName(vehicle.getName());
    existingVehicle.setType(vehicle.getType());
    existingVehicle.setPrice(vehicle.getPrice());

    return repository.save(existingVehicle);
}

    public void deleteVehicle(Long id) {
        repository.deleteById(id);
    }
}