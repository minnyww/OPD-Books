export const abi = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "_citizenId",
                "type": "string"
            },
            {
                "name": "_email",
                "type": "bytes32"
            }
        ],
        "name": "ForgetPassword",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_emails",
                "type": "string"
            },
            {
                "name": "_email",
                "type": "bytes32"
            }
        ],
        "name": "checkDuplicateEmail",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_citizenId",
                "type": "string"
            }
        ],
        "name": "getAddressPatient",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_citizenId",
                "type": "string"
            }
        ],
        "name": "getDetailPatient",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_citizenId",
                "type": "string"
            }
        ],
        "name": "getEmergencyContactPart1",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_citizenId",
                "type": "string"
            }
        ],
        "name": "checkDuplicateCitizenId",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_citizenId",
                "type": "string"
            }
        ],
        "name": "getInfoPatientPart1",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "patientAccounts",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_citizenId",
                "type": "string"
            }
        ],
        "name": "getPatientParent",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_citizenId",
                "type": "string"
            }
        ],
        "name": "getInfoPatientPart2",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_citizenId",
                "type": "string"
            }
        ],
        "name": "getInfoPatientPart4",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_citizenId",
                "type": "string"
            },
            {
                "name": "_password",
                "type": "bytes32"
            }
        ],
        "name": "Login",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_citizenId",
                "type": "string"
            }
        ],
        "name": "getInfoPatientPart3",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_citizenId",
                "type": "string"
            }
        ],
        "name": "getEmergencyContactPart2",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_citizenId",
                "type": "string"
            }
        ],
        "name": "getPatientAllergy",
        "outputs": [
            {
                "name": "",
                "type": "bytes32"
            },
            {
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_citizenId",
                "type": "string"
            },
            {
                "name": "_fatherFirstname",
                "type": "bytes32"
            },
            {
                "name": "_fatherLastname",
                "type": "bytes32"
            },
            {
                "name": "_motherFirstname",
                "type": "bytes32"
            },
            {
                "name": "_motherLastname",
                "type": "bytes32"
            }
        ],
        "name": "setPatientParent",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_citizenId",
                "type": "string"
            },
            {
                "name": "_status",
                "type": "bytes32"
            },
            {
                "name": "_occupartion",
                "type": "bytes32"
            },
            {
                "name": "_homephonenumber",
                "type": "bytes32"
            },
            {
                "name": "_mobilenumber",
                "type": "bytes32"
            },
            {
                "name": "_email",
                "type": "bytes32"
            }
        ],
        "name": "setInfoPatientPart4",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_citizenId",
                "type": "string"
            },
            {
                "name": "_congenitaldisease",
                "type": "bytes32"
            },
            {
                "name": "_bloodgroup",
                "type": "bytes32"
            },
            {
                "name": "_religion",
                "type": "bytes32"
            },
            {
                "name": "_nationality",
                "type": "bytes32"
            },
            {
                "name": "_country",
                "type": "bytes32"
            }
        ],
        "name": "setInfoPatientPart3",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_citizenId",
                "type": "string"
            },
            {
                "name": "_dob",
                "type": "bytes32"
            },
            {
                "name": "_titlename",
                "type": "bytes32"
            },
            {
                "name": "_firstname",
                "type": "bytes32"
            },
            {
                "name": "_lastname",
                "type": "bytes32"
            },
            {
                "name": "_gender",
                "type": "bytes32"
            }
        ],
        "name": "setInfoPatientPart2",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_citizenId",
                "type": "string"
            },
            {
                "name": "_registerDate",
                "type": "bytes32"
            },
            {
                "name": "_hospitalnumber",
                "type": "bytes32"
            },
            {
                "name": "_password",
                "type": "bytes32"
            }
        ],
        "name": "setInfoPatientPart1",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_citizenId",
                "type": "string"
            },
            {
                "name": "_emerTypeofHouse",
                "type": "bytes32"
            },
            {
                "name": "_emerAddress",
                "type": "string"
            },
            {
                "name": "_emerProvince",
                "type": "bytes32"
            },
            {
                "name": "_emerDistrict",
                "type": "bytes32"
            },
            {
                "name": "_emerSubDistrict",
                "type": "bytes32"
            },
            {
                "name": "_emerZipcode",
                "type": "bytes32"
            }
        ],
        "name": "setEmergencyContactPart2",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_citizenId",
                "type": "string"
            },
            {
                "name": "_emerTitle",
                "type": "bytes32"
            },
            {
                "name": "_emerFirstname",
                "type": "bytes32"
            },
            {
                "name": "_emerLastname",
                "type": "bytes32"
            },
            {
                "name": "_emerRelationship",
                "type": "bytes32"
            },
            {
                "name": "_emerHomePhonenumber",
                "type": "bytes32"
            },
            {
                "name": "_emerMobileNumber",
                "type": "bytes32"
            }
        ],
        "name": "setEmergencyContactPart1",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_email",
                "type": "bytes32"
            },
            {
                "name": "_emails",
                "type": "string"
            }
        ],
        "name": "setEmail",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_citizenId",
                "type": "string"
            },
            {
                "name": "_typeofHouse",
                "type": "bytes32"
            },
            {
                "name": "_patienaddress",
                "type": "string"
            },
            {
                "name": "_province",
                "type": "bytes32"
            },
            {
                "name": "_district",
                "type": "bytes32"
            },
            {
                "name": "_subDistrict",
                "type": "bytes32"
            },
            {
                "name": "_zipcode",
                "type": "bytes32"
            }
        ],
        "name": "setAddressPatient",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_citizenId",
                "type": "string"
            },
            {
                "name": "_allergy",
                "type": "bytes32"
            },
            {
                "name": "_privilege",
                "type": "bytes32"
            }
        ],
        "name": "setPatientAllergy",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
]