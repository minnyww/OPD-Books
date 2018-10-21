import React from "react";
import {
    Segment, Icon, Form, Input, Transition, Dropdown, Select
} from "semantic-ui-react";
import swal from 'sweetalert2';
import {
    titleNameChildData, genderData, cardTypeData, titleNameParentData, bloodgroupData,
    nationalityData, religionData, statusData, countryData
} from '../../../Static/Data/FormData'
import { patientField, mdrField } from "../../../Static/Data/Field"

const provincesData = require('../../../Static/Data/Provinces')



export default class EditProfile extends React.Component {
    state = {
        editprofile: false,
        editAdress: false,
        editEmp: false,
        underAge: false,
        allergy: false,
        open: false
    }
    componentWillMount() {
        this.setState({
            provinces: provincesData.default,
        })
    }
    close = () => this.setState({ open: false })
    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
        this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
    }
    showPopupConfirm = () => {
        swal({
            title: '<strong>HTML <u>example</u></strong>',
            type: 'info',
            html:
                '<Segment>ssd</Segment>' +
                '<a href="//github.com">links</a> ' +
                'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText:
                '<i class="fa fa-thumbs-down"></i>',
            cancelButtonAriaLabel: 'Thumbs down',
        })
    }

    handleEditprofile = () => this.setState({ editprofile: !this.state.editprofile })
    handleEditAdress = () => this.setState({ editAdress: !this.state.editAdress })
    handleEditEmp = () => this.setState({ editEmp: !this.state.editEmp })
    handleUnderAge = () => this.setState({ underAge: !this.state.underAge })
    handleAllergy = () => this.setState({ allergy: !this.state.allergy })


    render() {
        const { editprofile, editAdress, editEmp, underAge, allergy, open } = this.state
        return (
            <div>
                

                {/* <Segment color='teal' style={{ borderRadius: '2rem' }} onClick={this.handleEditprofile}> <h3><Icon name='file alternate outline' />Profile <Icon style={{ float: 'right' }} name={editprofile ? 'caret down' : 'caret right'} /></h3></Segment>
                <Transition.Group animation={'slide down'} duration={350} divided size='mini' >
                    {editAdress &&<Segment style={{ borderRadius: '2rem', marginTop: -15 }} >
                        <Form>
                            <Form.Group widths='equal' >
                                <Form.Input fluid
                                    style={{ border: '0 px' }}
                                    label={patientField.registerDate.label}
                                    placeholder=''
                                    readOnly
                                    value={this.props.patient.registerDate}
                                />
                            </Form.Group>
                            <Form.Group widths='equal' >
                                <Form.Input
                                    loading={false}
                                    fluid
                                    label={patientField.citizenId.label}
                                    readOnly
                                    value={this.props.patient.citizenId}
                                />
                                <Form.Input
                                    loading={false}
                                    fluid
                                    label={patientField.dob.label}
                                    readOnly
                                    value={this.props.patient.dob}
                                />
                                <Form.Input
                                    loading={false}
                                    fluid
                                    label={patientField.age.label}
                                    readOnly
                                    value={this.props.patient.age}
                                />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    label={patientField.email.label}
                                    width={6}
                                    required
                                    type='email'
                                    value={this.props.patient.email}
                                />
                                
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Field
                                    control={Dropdown}
                                    search
                                    selection
                                    allowAdditions
                                    onAddItem={(e, { value }) => {
                                        this.props.requiredAllParentField ?
                                            titleNameChildData.push({ key: value, text: value, value: value }) :
                                            titleNameParentData.push({ key: value, text: value, value: value })
                                    }}
                                    additionLabel='other : '
                                    label={patientField.nametitle.label}
                                    options={
                                        this.props.requiredAllParentField ? titleNameChildData : titleNameParentData
                                    }
                                    onChange={(e, { value }) => this.props.setFieldAndValidate('nameTitle', value)}
                                    required
                                    value={this.props.patient.nametitle}
                                />
                                <Form.Input
                                    label={patientField.firstname.label}
                                    onChange={e => this.props.setFieldAndValidate('firstname', e.target.value)}
                                    required
                                    value={this.props.patient.firstname}
                                />
                                <Form.Input
                                    label={patientField.lastname.label}
                                    onChange={e => this.props.setFieldAndValidate('lastname', e.target.value)}
                                    required
                                    value={this.props.patient.lastname}
                                />
                            </Form.Group>

                            <Form.Group widths='equal'>
                                <Form.Input
                                    label={patientField.congenitalDisease.label}
                                    required
                                    onChange={e => this.props.setFieldAndValidate('congenitalDisease', e.target.value)}
                                    value={this.props.patient.congenitalDisease}
                                />
                                <Form.Input
                                    label={patientField.gender.label}
                                    required
                                    value={this.props.patient.gender}
                                    readOnly
                                />
                                <Form.Input
                                    label={patientField.bloodgroup.label}
                                    required
                                    readOnly
                                    value={this.props.patient.bloodgroup}
                                />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Field
                                    control={Dropdown}
                                    search
                                    selection
                                    allowAdditions
                                    onAddItem={(e, { value }) => religionData.push({ key: value, text: value, value: value })}
                                    additionLabel='other : '
                                    label={patientField.religion.label}
                                    options={religionData}
                                    onChange={(e, { value }) => this.props.setFieldAndValidate('religion', value)}
                                    required
                                    value={this.props.patient.religion}
                                />
                                <Form.Field
                                    control={Dropdown}
                                    search
                                    selection
                                    allowAdditions
                                    onAddItem={(e, { value }) => nationalityData.push({ key: value, text: value, value: value })}
                                    additionLabel='other : '
                                    control={Select}
                                    label={patientField.nationality.label}
                                    options={nationalityData}
                                    onChange={(e, { value }) => this.props.setFieldAndValidate('nationality', value)}
                                    required
                                    value={this.props.patient.nationality}
                                />
                                <Form.Input
                                    label={patientField.country.label}
                                    required
                                    value={this.props.patient.country}
                                />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Field
                                    control={Select}
                                    label={patientField.status.label}
                                    options={statusData}
                                    onChange={(e, { value }) => this.props.setFieldAndValidate('status', value)}
                                    required
                                    value={this.props.patient.status}
                                />
                                <Form.Input
                                    label={patientField.occupartion.label}
                                    onChange={e => this.props.setFieldAndValidate('occupartion', e.target.value)}
                                    value={this.props.patient.occupartion}
                                />
                                <Form.Input
                                    label={patientField.homePhonenumber.label}
                                    onChange={e => this.props.setFieldAndValidate('homePhonenumber', e.target.value)}
                                    value={this.props.patient.mobileNumber}
                                />
                                <Form.Input
                                    label={patientField.mobileNumber.label}
                                    required
                                    onChange={e => this.props.setFieldAndValidate('mobileNumber', e.target.value)}
                                    value={this.props.patient.mobileNumber}
                                />
                            </Form.Group>
                        </Form>
                    </Segment>}
                </Transition.Group>

                <Segment color='yellow' style={{ borderRadius: '2rem' }} onClick={this.handleEditAdress}><h3><Icon name='home' />Adress<Icon style={{ float: 'right' }} name={editAdress ? 'caret down' : 'caret right'} /></h3></Segment>
                <Transition.Group animation={'slide down'} duration={350} divided  >
                    {editAdress &&
                        <Segment style={{ borderRadius: '2rem', marginTop: -15 }}>
                            <Form>
                                <Form.Group widths='equal'>
                                    <Form.Select
                                        control={Dropdown}
                                        search selection
                                        label='ประเภทที่พักอาศัย (Types of Housing)'
                                        options={'options'}
                                        placeholder='ประเภทที่พักอาศัย'
                                    />
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='ที่อยู่(Address) '
                                        placeholder='ที่อยู่'
                                    />
                                    <Form.Select
                                        control={Dropdown}
                                        search selection
                                        label='จังหวัด (Province)'
                                        options={'options'}
                                        placeholder='จังหวัด'
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Select
                                        control={Dropdown}
                                        search selection
                                        label='เขต/อำเภอ (District)'
                                        options={'options'}
                                        placeholder='เขต/อำเภอ'
                                    />
                                    <Form.Select
                                        control={Dropdown}
                                        search selection
                                        label='แขวง/ตำบล (Sub-District)'
                                        options={'options'}
                                        placeholder='แขวง/ตำบล'
                                    />
                                    <Form.Field
                                        id='form-input-control-last-name'
                                        control={Input}
                                        label='รหัสไปรษณีย์ (Postal Code)'
                                        placeholder='รหัสไปรษณีย์'
                                    />
                                </Form.Group>
                            </Form>
                        </Segment >}
                </Transition.Group>


                <Segment color='yellow' style={{ borderRadius: '2rem' }} onClick={this.handleEditEmp}><h3><Icon name='home' />AdressEmp<Icon style={{ float: 'right' }} name={editEmp ? 'caret down' : 'caret right'} /></h3></Segment>
                <Transition.Group animation={'slide down'} duration={350} divided size='mini' >
                    {editEmp &&
                        <Segment style={{ borderRadius: '2rem', marginTop: -15 }}>
                            <Form>
                                <Form.Group widths='equal'>
                                    <Form.Select
                                        control={Dropdown}
                                        search selection
                                        label='คำนำหน้า (Title Name)'
                                        options={'options'}
                                        placeholder='คำนำหน้า'
                                    />
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='ชื่อจริง(Name)'
                                        placeholder='ชื่อจริง'
                                    />
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='นามสกุล ( Surname)'
                                        placeholder='นามสกุล'
                                    />

                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='เกี่ยวข้องเป็น (Relationship)'
                                        placeholder='เกี่ยวข้องเป็น'
                                    />
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='ที่อยู่(Address) '
                                        placeholder='ที่อยู่'
                                    />
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='โทรศัพท์บ้าน (Home Phonenumber)'
                                        placeholder='โทรศัพท์บ้าน'
                                    />

                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Select
                                        control={Dropdown}
                                        search selection
                                        label='โทรศัพท์มือถือ (Mobile Number)'
                                        options={'options'}
                                        placeholder='โทรศัพท์มือถือ'
                                    />
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='ที่อยู่(Address) '
                                        placeholder='ที่อยู่'
                                    />
                                    <Form.Select
                                        control={Dropdown}
                                        search selection
                                        label='จังหวัด (Province)'
                                        options={'options'}
                                        placeholder='จังหวัด'
                                    />

                                </Form.Group>

                                <Form.Group widths='equal'>

                                    <Form.Select
                                        control={Dropdown}
                                        search selection
                                        label='เขต/อำเภอ (District)'
                                        options={'options'}
                                        placeholder='เขต/อำเภอ'
                                    />
                                    <Form.Select
                                        control={Dropdown}
                                        search selection
                                        label='แขวง/ตำบล (Sub-District)'
                                        options={'options'}
                                        placeholder='แขวง/ตำบล'
                                    />

                                    <Form.Field
                                        id='form-input-control-last-name'
                                        control={Input}
                                        label='รหัสไปรษณีย์ (Postal Code)'
                                        placeholder='รหัสไปรษณีย์'
                                    />
                                </Form.Group>
                            </Form>
                        </Segment >}
                </Transition.Group>



                <Segment color='yellow' style={{ borderRadius: '2rem' }} onClick={this.handleUnderAge}><h3><Icon name='home' />under 15 years old<Icon style={{ float: 'right' }} name={underAge ? 'caret down' : 'caret right'} /></h3></Segment>
                <Transition.Group animation={'slide down'} duration={350} divided  >
                    {underAge &&
                        <Segment style={{ borderRadius: '2rem', marginTop: -15 }}>
                            <Form>
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='ชื่อจริงบิดา (Father Firstname)'
                                        placeholder='First name'
                                    />
                                    <Form.Field
                                        id='form-input-control-last-name'
                                        control={Input}
                                        label='นามสกุลบิดา (Father Lastname)'
                                        placeholder='Last name'
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='ชื่อจริงบิดา (Mother Firstname)'
                                        placeholder='First name'
                                    />
                                    <Form.Field
                                        id='form-input-control-last-name'
                                        control={Input}
                                        label='นามสกุลมารดา (Mother Lastname)'
                                        placeholder='Last name'
                                    />
                                </Form.Group>
                            </Form>
                        </Segment >}
                </Transition.Group>

                <Segment color='yellow' style={{ borderRadius: '2rem' }} onClick={this.handleAllergy}><h3><Icon name='home' />Allergy<Icon style={{ float: 'right' }} name={allergy ? 'caret down' : 'caret right'} /></h3></Segment>
                <Transition.Group animation={'slide down'} duration={350} divided  >
                    {allergy &&
                        <Segment style={{ borderRadius: '2rem', marginTop: -15 }}>
                            <Form>
                                <h3 >Do you have a history of allergies<span style={{ color: 'red' }}> * </span></h3 >


                                <Form.Group inline>
                                    <Form.Radio
                                        label=' No '
                                        value='not have'
                                        checked={'this.props.patient.allergy' === 'not have'}
                                        onChange={(e, { value }) => this.chooseChoice('allergy', value)}
                                    />
                                    <Form.Radio
                                        label='Yes, Please specify'
                                        value='other'
                                        checked={'!this.state.disabledOtherallergy'}
                                        onChange={(e, { value }) => this.chooseChoice('allergy', value)}
                                    />
                                    <Form.Input
                                        label=''
                                        placeholder='Please specify'
                                        width={4}
                                        disabled={'this.state.disabledOtherallergy'}
                                        onChange={(e, { value }) => {
                                            this.chooseChoice('allergy', value)
                                            this.setState({ otherallergy: value })
                                        }}
                                        required={'!this.state.disabledOtherallergy'}
                                        value={'this.state.otherallergy'}
                                    />
                                    <br></br>
                                </Form.Group>



                                <h3>สิทธิในการรักษา<span style={{ color: 'red' }}>*</span></h3>
                                <Form.Group inline>
                                    <Form.Radio
                                        value='government officer'
                                        label='government officer'
                                        checked={'this.props.patient.privilege' === 'government officer'}
                                        width={4}
                                        onChange={(e, { value }) => this.chooseChoice('privilege', value)}
                                    />
                                    <Form.Radio
                                        value='family of government officials'
                                        label='family of government officials'
                                        checked={'this.props.patient.privilege' === 'family of government officials'}
                                        width={4}
                                        onChange={(e, { value }) => this.chooseChoice('privilege', value)}
                                    />
                                    <Form.Radio
                                        value='state enterprise officer '
                                        label='state enterprise officer '
                                        checked={'this.props.patient.privilege' === 'state enterprise officer '}
                                        width={4}
                                        onChange={(e, { value }) => this.chooseChoice('privilege', value)}
                                    />
                                </Form.Group>

                                <Form.Group inline>
                                    <Form.Radio
                                        value='family of state enterprise officer '
                                        label='family of state enterprise officer '
                                        width={4}
                                        checked={'this.props.patient.privilege' === 'family of state enterprise officer'}
                                        onChange={(e, { value }) => this.chooseChoice('privilege', value)}
                                    />
                                    <Form.Radio
                                        value='normal person '
                                        label='normal person '
                                        width={4}
                                        checked={'this.props.patient.privilege' === 'normal person '}
                                    />
                                    <Form.Radio
                                        label='other'
                                        value='other'
                                        checked={'!this.state.disabledOtherprivilege'}
                                        onChange={(e, { value }) => this.chooseChoice('privilege', value)}
                                    />
                                    <Form.Input
                                        label=''
                                        placeholder='Please specify other'
                                        width={4}
                                        disabled={'this.state.disabledOtherprivilege'}
                                        required={'!this.state.disabledOtherprivilege'}
                                        onChange={e => {
                                            this.chooseChoice('privilege', e.target.value)
                                            this.setState({ otherprivilege: e.target.value })
                                        }}
                                        value={'this.state.otherprivilege'}
                                    />
                                </Form.Group>
                            </Form>
                        </Segment >}
                </Transition.Group> */}






            </div>
        );
    }
}
