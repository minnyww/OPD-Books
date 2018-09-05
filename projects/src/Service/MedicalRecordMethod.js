import { defaultAccount, contract, web3 } from "./../Lib/Web3";
// import { MedicalRecord, NurseForm, DoctorForm } from "./../Model/MedicalRecord";
import { getEmployee } from './ManageEmployeeMethod.js';

export const setMedicalRecordForNurse = (medicalRecord) => {
    debugger
    // console.log(web3.fromAscii(medicalRecord.visitNumber), medicalRecord.clinic, web3.fromAscii(medicalRecord.height), web3.fromAscii(medicalRecord.bodyWeight), web3.fromAscii(medicalRecord.bmi), web3.fromAscii(medicalRecord.temperature), web3.fromAscii(medicalRecord.date), web3.fromAscii(medicalRecord.time));
    // console.log(web3.fromAscii(medicalRecord.visitNumber), web3.fromAscii(medicalRecord.pulseRate), web3.fromAscii(medicalRecord.respiratoryRate), web3.fromAscii(medicalRecord.BP1), web3.fromAscii(medicalRecord.BP2), web3.fromAscii(medicalRecord.BP3), medicalRecord.chiefComplaint, web3.fromAscii(medicalRecord.nurseId));
    contract.setMedicalRecordForNursePart1(
       web3.fromAscii(medicalRecord.visitNumber), 
       medicalRecord.clinic, 
       web3.fromAscii(medicalRecord.height), 
       web3.fromAscii(medicalRecord.bodyWeight), 
       web3.fromAscii(medicalRecord.bmi), 
       web3.fromAscii(medicalRecord.temperature), 
       web3.fromAscii(medicalRecord.date),
       web3.fromAscii(medicalRecord.time),
       defaultAccount
    );  

    contract.setMedicalRecordForNursePart2(
       web3.fromAscii(medicalRecord.visitNumber), 
       web3.fromAscii(medicalRecord.pulseRate), 
       web3.fromAscii(medicalRecord.respiratoryRate), 
       web3.fromAscii(medicalRecord.BP1), 
       web3.fromAscii(medicalRecord.BP2), 
       web3.fromAscii(medicalRecord.BP3), 
       medicalRecord.chiefComplaint,
       web3.fromAscii(medicalRecord.nurseId),
       defaultAccount
    );  
} 

export const setMedicalRecordForDocter = (medicalRecord) => {
    debugger;
   contract.setMedicalRecordForDocter(
       web3.fromAscii(medicalRecord.visitNumber), 
       medicalRecord.presentIllness, 
       medicalRecord.physicalExem,
       medicalRecord.diagnosis,
       medicalRecord.treatment,
       medicalRecord.recommendation,
       medicalRecord.appointment,
       web3.fromAscii(medicalRecord.doctorId), 
       defaultAccount
    );  
} 

export const getMedicalRecordForNurse = (visitNumber) => {
    let medicalRecord = {};
    const nurse1 = contract.getMedicalRecordForNursePart1(web3.fromAscii(visitNumber));
    const nurse2 = contract.getMedicalRecordForNursePart2(web3.fromAscii(visitNumber));

    medicalRecord.clinic = nurse1[0];
    medicalRecord.height = parseFloat(web3.toAscii(nurse1[1]));
    medicalRecord.bodyWeight = parseFloat(web3.toAscii(nurse1[2]));
    medicalRecord.bmi = parseFloat(web3.toAscii(nurse1[3]));
    medicalRecord.temperature = parseFloat(web3.toAscii(nurse1[4]));
    medicalRecord.date = web3.toAscii(nurse1[5]);
    medicalRecord.time = web3.toAscii(nurse1[6]);
    medicalRecord.visitNumber = visitNumber;

    medicalRecord.pulseRate = parseFloat(web3.toAscii(nurse2[0]));
    medicalRecord.respiratoryRate = parseFloat(web3.toAscii(nurse2[1]));
    medicalRecord.BP1 = web3.toAscii(nurse2[2]);
    medicalRecord.BP2 = web3.toAscii(nurse2[3]);
    medicalRecord.BP3 = web3.toAscii(nurse2[4]);
    medicalRecord.chiefComplaint = nurse2[5];
    medicalRecord.nurseId = web3.toAscii(nurse2[6]);
    let nurse = getEmployee(web3.toAscii(nurse2[6]));
    medicalRecord.nurseName = nurse.nameTitle + " " + nurse.firstname + " " + nurse.lastname;

    return medicalRecord;
};

export const getMedicalRecordForDocter = (visitNumber) => {
    let medicalRecord = {};
    const doctor = contract.getMedicalRecordForDocter(web3.fromAscii(visitNumber));
    medicalRecord.presentIllness = doctor[0];
    medicalRecord.physicalExem = doctor[1];
    medicalRecord.diagnosis = doctor[2]
    medicalRecord.treatment = doctor[3];
    medicalRecord.recommendation = doctor[4];
    medicalRecord.appointment = doctor[5];
    medicalRecord.doctorId = web3.toAscii(doctor[6]);
    let doctorEmp = getEmployee(web3.toAscii(doctor[6]));
    medicalRecord.doctorName = doctorEmp.nameTitle + " " + doctorEmp.firstname + " " + doctorEmp.lastname;

    return medicalRecord;
};

export const addHistoryVisitNumber = ( doctorId, citizenId, visitNumber) => {
    contract.addHistoryVisitNumber(web3.fromAscii(doctorId), web3.fromAscii(citizenId), web3.fromAscii(visitNumber), defaultAccount);
}

export const getHistoryVisitNumberPatient = (citizentId) => {
    debugger
    const lengthHistory = +contract.countHistoryVisitNumberForPatient(web3.fromAscii(citizentId)).toString();
    let medicalRecord = [];
    if(lengthHistory !== 0){
         for (let i = 0; i < lengthHistory; i++) {
             let visitNumber = contract.getHistoryVisitNumberPatient(web3.fromAscii(citizentId),i);
             let nurseForm = getMedicalRecordForNurse(web3.toAscii(visitNumber));
             let doctorForm = getMedicalRecordForDocter(web3.toAscii(visitNumber));
             let key = {key : i };
             let obj = {...key,...nurseForm,...doctorForm};
             medicalRecord.push(obj)
         }
    }
    return medicalRecord;
};

