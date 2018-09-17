const { web3, contract, defaultAccount } = require('../lib/web3')
const { convertString, convertToAscii, bindData } = require('../services/utils')
const moment = require("moment");

const patientScheme = {
    info: [
        {
            registerDate: 'byte',
            citizenId: 'byte',
            // hospitalNumber: 'byte',
            password: 'byte'
        },
        {
            dob: 'byte',
            nametitle: 'byte',
            firstname: 'byte',
            lastname: 'byte',
            gender: 'byte',
        },
        {
            congenitalDisease: 'byte',
            bloodgroup: 'byte',
            religion: 'byte',
            nationality: 'byte',
            country: 'byte',
        },
        {
            status: 'byte',
            occupartion: 'byte',
            homePhonenumber: 'byte',
            mobileNumber: 'byte',
            email: 'byte',
        }
    ],
    address: [
        {
            typeofHouse: 'byte',
            address: 'string',
            province: 'byte',
            district: 'byte',
            subDistrict: 'byte',
            zipcode: 'byte',
        }
    ],
    emerContact: [
        {
            emerTitle: 'byte',
            emerFirstname: 'byte',
            emerLastname: 'byte',
            emerRelationship: 'byte',
            emerHomePhonenumber: 'byte',
            emerMobileNumber: 'byte',
        },
        {
            emerTypeofHouse: 'byte',
            emerAddress: 'string',
            emerProvince: 'byte',
            emerDistrict: 'byte',
            emerSubDistrict: 'byte',
            emerZipcode: 'byte',
        }
    ],
    parent: [
        {
            fatherFirstname: 'byte',
            fatherLastname: 'byte',
            motherFirstname: 'byte',
            motherLastname: 'byte',
        }
    ],
    allery: [
        {
            allergy: 'byte',
            privilege: 'byte',

        }
    ]
}
const login = async (citizenId, password) => {
    console.log("LOGIN")
    const res = await contract.Login(convertString(citizenId), convertString(password));
    if (res) { return { status: true, message: "SUCCESS" } }
    return { status: false, message: "ERROR : Incorrect citizen Id or password" };
}

const get = citizenId => {
    const byteCitizenId = convertString(citizenId)
    console.time('info')
    const info1 = contract.getInfoPatientPart1(byteCitizenId, defaultAccount)
    const info2 = contract.getInfoPatientPart2(byteCitizenId, defaultAccount)
    const info3 = contract.getInfoPatientPart3(byteCitizenId, defaultAccount)
    const info4 = contract.getInfoPatientPart4(byteCitizenId, defaultAccount)
    const combindedInfoData = bindData(patientScheme, [info1, info2, info3, info4], 'info')
    console.timeEnd('info')

    console.time('address')
    const addressPatient = contract.getAddressPatient(byteCitizenId, defaultAccount)
    const combindedAddressData = bindData(patientScheme, [addressPatient], 'address')
    console.timeEnd('address')

    console.time('allergy')
    const allergyPatient = contract.getPatientAllergy(byteCitizenId, defaultAccount);
    const combindedAllergyData = bindData(patientScheme, [allergyPatient], 'allery')
    console.timeEnd('allergy')

    console.time('emer')
    const emer1 = contract.getEmergencyContactPart1(byteCitizenId, defaultAccount);
    const emer2 = contract.getEmergencyContactPart2(byteCitizenId, defaultAccount);
    const combindedEmerData = bindData(patientScheme, [emer1, emer2], 'emerContact')
    console.timeEnd('emer')

    console.time('parent')
    const patientParent = contract.getPatientParent(citizenId, defaultAccount);
    const combindedParentData = bindData(patientScheme, [patientParent], 'parent')
    console.timeEnd('parent')

    let patient = { ...combindedInfoData, ...combindedAddressData, ...combindedAllergyData, ...combindedEmerData, ...combindedParentData }
    return { status: true, message: "SUCCESS", data: patient }
}

const insert = async (patient) => {
    contract.setInfoPatientPart1(convertString(patient.citizenId), convertString(patient.registerDate), convertString(patient.password), defaultAccount);
    contract.setInfoPatientPart2(convertString(patient.citizenId), convertString(patient.dob), convertString(patient.nametitle), convertString(patient.firstname), convertString(patient.lastname), convertString(patient.gender), defaultAccount);
    contract.setInfoPatientPart3(convertString(patient.citizenId), convertString(patient.congenitalDisease), convertString(patient.bloodgroup), convertString(patient.religion), convertString(patient.nationality), convertString(patient.country), defaultAccount);
    contract.setInfoPatientPart4(convertString(patient.citizenId), convertString(patient.status), convertString(patient.occupartion === "" ? "-" : patient.occupartion), convertString(patient.homePhonenumber === "" ? "-" : patient.homePhonenumber), convertString(patient.mobileNumber), convertString(patient.email), defaultAccount);
    contract.setEmail(convertString(patient.email), defaultAccount);
    contract.setAddressPatient(convertString(patient.citizenId), convertString(patient.typeofHouse), patient.address, convertString(patient.province), convertString(patient.district), convertString(patient.subDistrict), convertString(patient.zipcode), defaultAccount);
    contract.setPatientAllergy(convertString(patient.citizenId), convertString(patient.allergy), convertString(patient.privilege), defaultAccount);

    if (patient.emerTitle != '' || patient.emerFirstname != '' || patient.emerLastname != '') {
        contract.setEmergencyContactPart1(convertString(patient.citizenId), convertString(patient.emerTitle), convertString(patient.emerFirstname), convertString(patient.emerLastname), convertString(patient.emerRelationship), convertString(patient.emerHomePhonenumber === "" || patient.emerHomePhonenumber === undefined ? "-" : patient.emerHomePhonenumber), convertString(patient.emerMobileNumber), defaultAccount);
        contract.setEmergencyContactPart2(convertString(patient.citizenId), convertString(patient.typeofHouse), patient.address, convertString(patient.province), convertString(patient.district), convertString(patient.subDistrict), convertString(patient.zipcode), defaultAccount);
    }

    if ((patient.fatherFirstname !== '' && patient.fatherLastname != '') || (patient.motherFirstname !== '' && patient.motherLastname != '')) {
        contract.setPatientParent(convertString(patient.citizenId), convertString(patient.fatherFirstname === "" ? "-" : patient.fatherFirstname), convertString(patient.fatherLastname === "" ? " " : patient.fatherLastname), convertString(patient.motherFirstname === "" ? "-" : patient.motherFirstname), convertString(patient.motherLastname === "" ? " " : patient.motherFirstname), defaultAccount);
    }

    let check = false
    while (check === false) {
        check = await isPatient(patient.citizenId);
        if (check) {
            return { status: true, message: "SUCCESS" };
        }
    }
}

const isPatient = citizenId => {
    const byteCitizenId = convertString(citizenId)
    return contract.haveCitizenId(byteCitizenId);
}

const isEmail = citizenId => {
    const byteCitizenId = convertString(citizenId)
    return contract.haveEmail(byteCitizenId)
}

module.exports = {
    isPatient,
    login,
    isEmail,
    get,
    insert,
    patientScheme
};