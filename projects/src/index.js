import React from 'react';
import ReactDOM from 'react-dom';

// import Home from './Patient/Containers/Home';
// import ManagePatientRecord from './Patient/Containers/ManagePatientRecord';
// import Login from './Patient/Containers/Login';
// import ProfilePatient from './Patient/Containers/PatientProfile';
// import Registration from './Patient/Containers/Registration';
// import EmployeeSegment from './Employee/Containers/EmployeeSegment';
// import PatientTreatment from "./Employee/Containers/PatientTreatment";
// import EmpLogin from "./Employee/Containers/EmpLogin";
// import MedicalRecordTreatment from "./Employee/Containers/MedicalRecordTreatment";



import Home from "./Home";
import Login from "./Patients/Containers/Login";
import ManagePatientRecord from "./Patients/Containers/ManagePatientRecord";
import ProfilePatient from "./Patients/Containers/PatientProfile";
// import ProfilePatient from "./containers/patientProfile";

// import EmpLogin from "./Employees/Containers/EmpLogin";
import EmpTest from "./Employees/Containers/EmpTest";
import Registration from "./Employees/Containers/Registration";
// import PatientTreatment from "./Employees/Containers/PatientTreatment";
// import MedicalRecordTreatment from "./Employees/Containers/MedicalRecordTreatment";
// import NavbarQueses from "./Employees/Components/NavbarQueses"
import apiDocument from "./Employees/Components/apiDoc"
// import Testt from "./Employees/Components/Test"
// import DemoExample from "./containers/demoExample"


import 'semantic-ui-css/semantic.min.css';
import 'react-datepicker/dist/react-datepicker.css';




import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      {/* patient */}
      <Route path="/signin" component={Login} />
      <Route path="/signup" component={ManagePatientRecord} />
      <Route path="/profile" component={ProfilePatient} />

      {/* emp */}
      <Route path="/empTest" component={EmpTest} />
      {/* <Route path="/api" component={DemoExample} /> */}
      
      {/* <Route path="/signinForEmployee" component={EmpLogin} /> */}
      <Route path="/Registration" component={Registration} /> 
      {/* <Route path="/MedicalRecordTreatment" component={MedicalRecordTreatment} />  */}
      {/* <Route path="/employeeSegment" component={EmployeeSegment} /> */}
      {/* <Route path="/patientTreatment" component={PatientTreatment} /> */}

      {/* <Route path="/stamp" component={Stamp} />
      <Route path="/testMedicalRecord" component={MedicalRecordTreatment} />
      <Route path="/test" component={NavbarQueses} /> */}
      <Route path="/apiDoc" component={apiDocument} />
      {/* <Route path="/test2" component={Testt} /> */}
    </div>
  </Router>,
  document.getElementById("root")
);
