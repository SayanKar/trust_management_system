// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Model {

    struct Vehicle {
        uint256 rating;
        uint256 rsu;
    }

    enum Traffic {
        NO_TRAFFIC,
        LIGHT,
        MEDIUM,
        HIGH,
        HEAVY
    }

    address private admin;
    uint256 public vehicle_count;
    mapping(uint256 => Vehicle) vehicles;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Permission denied");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function register_vehicle() external returns (uint256) {
        vehicles[++vehicle_count] = Vehicle(500,0);
        return vehicle_count;
    }

    function compute_state(
        uint256 _rsuID, 
        uint256[] calldata _vehicles,
        Traffic[] calldata _traffic,
        bool[] calldata _accident
    ) external returns(Traffic traffic, bool accident) {

    }

    function custom_state(
        uint256 _rsuID,
        uint256[] calldata _vehicles,
        uint256[] calldata _response
    ) external returns(uint256 response) {

    }

    function overwrite_rating(uint256 vehicle_id, uint256 rating) external onlyAdmin {
        Vehicle storage vehicle = vehicles[vehicle_id];
        require(vehicle.rating != 0, "Vehicle not found");
        require(rating <= 1000, "Cannot assign rating more than 1000");
        vehicle.rating = rating;
    }

    function give_penalty(uint256 vehicle_id) external payable {
        Vehicle storage vehicle = vehicles[vehicle_id];
        require(vehicle.rating != 0, "Vehicle not found");
        require(vehicle.rating < 150, "Penalty not required");
        vehicle.rating = 200;
    }
}
