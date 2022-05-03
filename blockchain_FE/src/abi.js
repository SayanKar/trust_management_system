export const abi = [
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "_rsuID",
				"type": "int256"
			},
			{
				"internalType": "int256[]",
				"name": "_vehicle_ids",
				"type": "int256[]"
			},
			{
				"internalType": "int256[]",
				"name": "_traffic",
				"type": "int256[]"
			},
			{
				"internalType": "int256[]",
				"name": "_accident",
				"type": "int256[]"
			}
		],
		"name": "compute_state",
		"outputs": [
			{
				"components": [
					{
						"internalType": "int256",
						"name": "rsu",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "traffic",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "accident",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "reliabilityScore",
						"type": "int256"
					}
				],
				"internalType": "struct Model.RSU_response",
				"name": "rsu_resp",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "vehicle_id",
				"type": "int256"
			}
		],
		"name": "give_penalty",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "vehicle_id",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "rating",
				"type": "int256"
			}
		],
		"name": "overwrite_rating",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "register_vehicle",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "int256",
						"name": "rsu",
						"type": "int256"
					},
					{
						"internalType": "int256[]",
						"name": "_vehicle_ids",
						"type": "int256[]"
					},
					{
						"internalType": "int256[]",
						"name": "_traffic",
						"type": "int256[]"
					},
					{
						"internalType": "int256[]",
						"name": "_accident",
						"type": "int256[]"
					}
				],
				"internalType": "struct Model.Input[]",
				"name": "input",
				"type": "tuple[]"
			}
		],
		"name": "simulate",
		"outputs": [
			{
				"components": [
					{
						"internalType": "int256",
						"name": "rsu",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "traffic",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "accident",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "reliabilityScore",
						"type": "int256"
					}
				],
				"internalType": "struct Model.RSU_response[]",
				"name": "rsu_resp",
				"type": "tuple[]"
			},
			{
				"components": [
					{
						"internalType": "int256",
						"name": "vehicle_id",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "past_rating",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "new_rating",
						"type": "int256"
					}
				],
				"internalType": "struct Model.Vehicle_response[]",
				"name": "vehicle_resp",
				"type": "tuple[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "int256[]",
				"name": "_vehicle_ids",
				"type": "int256[]"
			}
		],
		"name": "find_reliability",
		"outputs": [
			{
				"internalType": "int256",
				"name": "reliabilityScore",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "get_all_vehicles",
		"outputs": [
			{
				"components": [
					{
						"internalType": "int256",
						"name": "id",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "rating",
						"type": "int256"
					}
				],
				"internalType": "struct Model.Vehicle[]",
				"name": "all_vehicle",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MULTIPLIER",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "vehicle_count",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"name": "vehicles",
		"outputs": [
			{
				"internalType": "int256",
				"name": "id",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "rating",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
