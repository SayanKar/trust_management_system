// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Model {

    struct Vehicle {
        int rating;
        // int rsu;
    }

    int public constant MULTIPLIER = 100;

    address private admin;
    int public vehicle_count;
    mapping(int => Vehicle) public vehicles;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Permission denied");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function register_vehicle() external returns (int) {
        vehicles[++vehicle_count] = Vehicle(500);
        return vehicle_count;
    }

    function consensus(
        int[] calldata _vehicle_ids,
        int[] calldata _input
    ) internal view returns(int output) {
        int total_rating = 0;
        int weighted_response = 0;

        for(uint i=0; i < _vehicle_ids.length; ++i) {
            Vehicle storage vehicle = vehicles[_vehicle_ids[i]];
            if (vehicle.rating <= 200) continue;
            
            weighted_response += vehicle.rating * _input[i];
            total_rating += vehicle.rating;
        }
        require(total_rating > 0, "No trusted vehicle present");

        int rem = weighted_response % total_rating;
        output = weighted_response / total_rating;
        if (2*rem > total_rating) output += 1;
    }

    function find_reliability(
        int[] calldata _vehicle_ids
    ) public view returns(int reliabilityScore) {
        int count = 0;
        int sum = 0;

        for(uint i=0; i<_vehicle_ids.length; ++i) {
            Vehicle storage vehicle = vehicles[_vehicle_ids[i]];
            if (vehicle.rating <= 200) continue;
            sum += vehicle.rating;
            count += 1;
        }
        if (count == 0) return 0;
        reliabilityScore = (MULTIPLIER * sum) / (1000 * count);
    }

    function rating_change(
        int evaluated,
        int provided,
        int range
    ) internal pure returns(int delta) {
        require(range > 1, "There should be atleast two options to choose from");
        int slope = 120/(range-1);
        int dif = evaluated - provided;
        if (dif < 0) dif = -dif;
        delta = 20 - slope*dif;
    }

    function compute_state(
        int _rsuID, 
        int[] calldata _vehicle_ids,
        int[] calldata _traffic,
        int[] calldata _accident
    ) external returns(int traffic, int accident, int reliabilityScore) {

        // Ensuring clean data is sent
        require(_vehicle_ids.length > 0, "No data found");
        require(_vehicle_ids.length == _traffic.length, "Missing data in the parameters");
        require(_vehicle_ids.length == _accident.length, "Missing data in the parameters");

        for(uint i=0; i<_vehicle_ids.length; ++i) {
            Vehicle storage vehicle = vehicles[_vehicle_ids[i]];
            require(vehicle.rating != 0, "Vehicle not found");
        }

        // Calculating State
        traffic = consensus(_vehicle_ids, _traffic);
        accident = consensus(_vehicle_ids, _accident);
        reliabilityScore = find_reliability(_vehicle_ids);

        // Updating ratings of vehicle
        for(uint i=0; i<_vehicle_ids.length; ++i) {
            Vehicle storage vehicle = vehicles[_vehicle_ids[i]];

            // Vehicles with rating <= 100 are blocked till they pay the penalty
            if (vehicle.rating <= 100) continue;

            int traffic_dr = rating_change(traffic, _traffic[i], 5);
            int accident_dr = rating_change(accident, _accident[i], 2);
            int delta_rating = (traffic_dr + accident_dr) * reliabilityScore / (int256(_vehicle_ids.length) * MULTIPLIER);
            assert(-100 <= delta_rating && delta_rating <= 20);

            int updated_rating = vehicle.rating + delta_rating;

            if (updated_rating <= 0) {
                vehicle.rating = 1;
            } else if (updated_rating >= 1000) {
                vehicle.rating = 1000;
            } else {
                vehicle.rating = updated_rating;
            }
        }
    }

    function overwrite_rating(int vehicle_id, int rating) external onlyAdmin {
        Vehicle storage vehicle = vehicles[vehicle_id];
        require(vehicle.rating != 0, "Vehicle not found");
        require(rating <= 1000, "Cannot assign rating more than 1000");
        vehicle.rating = rating;
    }

    function give_penalty(int vehicle_id) external payable {
        Vehicle storage vehicle = vehicles[vehicle_id];
        require(vehicle.rating != 0, "Vehicle not found");
        require(vehicle.rating <= 100, "Penalty not required");
        require(msg.value != 0, "No fees sent");
        vehicle.rating = 150;
    }
}
