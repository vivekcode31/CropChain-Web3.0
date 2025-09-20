// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DrugTraceability {
    struct Drug {
        string name;
        string manufacturer;
        string batchNumber;
        address owner;
    }

    mapping(uint256 => Drug) public drugs;
    uint256 public drugCount;
    uint256[] public registeredDrugIds; // keep track of registered IDs

    // Register a drug
    function registerDrug(
        uint256 _id,
        string memory _name,
        string memory _manufacturer,
        string memory _batchNumber
    ) public {
        require(drugs[_id].owner == address(0), "Drug already registered");
        drugs[_id] = Drug(_name, _manufacturer, _batchNumber, msg.sender);
        registeredDrugIds.push(_id);
        drugCount++;
    }

    // Get drug details by ID
    function getDrugDetails(uint256 _id) public view returns (
        string memory, string memory, string memory, address
    ) {
        require(drugs[_id].owner != address(0), "Drug not found");
        Drug memory drug = drugs[_id];
        return (drug.name, drug.manufacturer, drug.batchNumber, drug.owner);
    }

    // Get all registered drug IDs
    function getAllRegisteredDrugs() public view returns (uint256[] memory) {
        return registeredDrugIds;
    }
    
    // Transfer drug ownership
    function transferOwnership(uint256 _id, address _newOwner) public {
        require(drugs[_id].owner != address(0), "Drug not found");
        require(drugs[_id].owner == msg.sender, "You are not the owner");
        drugs[_id].owner = _newOwner;
    }

    // Transfer ownership and update manufacturer name
    function transferOwnershipWithName(uint256 _id, address _newOwner, string memory _newManufacturer) public {
        require(drugs[_id].owner != address(0), "Drug not found");
        require(drugs[_id].owner == msg.sender, "You are not the owner");
        drugs[_id].owner = _newOwner;
        drugs[_id].manufacturer = _newManufacturer;
    }

    // Update manufacturer name (only current owner can do this)
    function updateManufacturer(uint256 _id, string memory _newManufacturer) public {
        require(drugs[_id].owner != address(0), "Drug not found");
        require(drugs[_id].owner == msg.sender, "You are not the owner");
        drugs[_id].manufacturer = _newManufacturer;
    }
}
