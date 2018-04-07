import React from 'react';
import { nameTypeData, bloodgroupData, cardTypeData, genderData, nationalityData, religionData, statusData, countryData } from './Data/FormData'
import { Segment, Form, Select, Dropdown } from 'semantic-ui-react'
import Date from './Date'
import OtherDropdown from './OtherDropdown'
import DropdownTest from './Test';
import HeaderForm from './HeaderForm';



const InfoPateint = (props) => {
    const setField = props.setField
    const dob = props.dob
    const setDateOfBirth = props.setDateOfBirth
    const calculateAge = props.calculateAge

    return (
        <div>
            <Segment.Group>
                <Segment>
                    <Form.Group widths='equal' >
                        <Form.Input fluid
                            id='registerdate'
                            style={{ border: '0 px' }}
                            label='วันที่ทำประวัติ (Register Date)'
                            placeholder=''
                            width={4}
                            readOnly
                            value={props.registerDate}
                        />
                    </Form.Group>
                    <HeaderForm />
                </Segment>
                <Segment>
                    <Form.Group widths='equal' >
                        <Form.Field
                            control={Select}
                            label='ประเภทบัตร (Card type)'
                            options={cardTypeData}
                            placeholder='เลือกประเภทบัตร'
                            width={4}
                            onChange={(e, { value }) => setField('cardType', value)}
                            value={props.cardType}
                            required
                        />
                        <Form.Input
                            loading={false}
                            fluid
                            label='เลขบัตรประชาชน (ID CARD No./Passport No.)'
                            placeholder='เลขบัตรประชาชน/Passport No.'
                            width={6}
                            onBlur={e => props.checkIdcard(e)}
                            onChange={e => setField('idCard', e.target.value)}
                            value={props.idCard}
                            error={props.errorIdCard}
                            autoFocus
                            required
                        />
                        <Form.Field
                            control={() => Date({ setDateOfBirth, calculateAge, dob })}
                            label='วัน/เดือน/ปีเกิด (Dob)'
                            width={3}
                            required
                        />
                        <Form.Input
                            label='อายุ'
                            placeholder='อายุ'
                            width={3}
                            value={props.age}
                            readOnly
                            required
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Field
                            control={Select}
                            label='คำนำหน้า (Title)'
                            options={nameTypeData}
                            placeholder='เลือก (Select)'
                            width={3}
                            onChange={(e, { value }) => setField('nameTitle', value)}
                            value={props.nameTitle.value}
                            required
                        />
                        <Form.Input
                            label='คำนำหน้าอื่นๆ (Title Other.)'
                            placeholder='คำนำหน้าอื่นๆ'
                            width={3}
                        />
                        <Form.Input
                            label='ชื่อจริง (Firstname)'
                            placeholder='ชื่อจริง (Firstname)'
                            width={5}
                            onChange={e => setField('firstname', e.target.value)}
                            value={props.firstname}
                            required
                        />
                        <Form.Input
                            label='นามสกุล (Lastname)'
                            placeholder='นามสกุล (Lastname)'
                            width={5}
                            onChange={e => setField('lastname', e.target.value)}
                            value={props.lastname}
                            required
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Input
                            label='โรคประจำตัว (Congenital Disease)'
                            placeholder='โรคประจำตัว'
                            width={4}
                            required
                            onChange={e => setField('congenitalDisease', e.target.value)}
                            value={props.congenitalDisease}
                        />
                        <Form.Field
                            control={Select}
                            label='เพศ (Gender)'
                            options={genderData}
                            placeholder='เลือกเพศ'
                            width={4}
                            onChange={(e, { value }) => setField('gender', value)}
                            value={props.gender}
                            required
                        />
                        <Form.Field
                            control={Select}
                            label='กรุ๊ปเลือด (BloodGroup)'
                            options={bloodgroupData}
                            placeholder='เลือกกรุ๊ปเลือด'
                            width={4}
                            onChange={(e, { value }) => setField('bloodgroup', value)}
                            value={props.bloodgroup}
                            required
                        />
                        <Form.Field
                            control={Dropdown}
                            search selection
                            wrapSelection={false}
                            options={countryData}
                            placeholder='เลือกประเทศ'
                            label='ประเทศ (Country)'
                            width={4}
                            onChange={(e, { value }) => setField('country', value)}
                            value={props.country}
                            required
                        />

                    </Form.Group>
                    <Form.Group>
                        {/* <Form.Field
                            control={() => OtherDropdown({ 
                                    field: 'religion', 
                                    options: props.religionData, 
                                    placeholder: 'เลือกศาสนา', 
                                    value: props.religionTest, 
                                    setField }
                            )}
                            label='ศาสนา (Religion)'
                            width={4 }
                            required
                        /> */}
                        <Form.Field
                            control={Dropdown}
                            search
                            selection
                            allowAdditions
                            onAddItem={(e, { value }) =>{
                                const arr = props.religionData
                                setField('religionData', [{ text: value, value }, ...props.religionData])
                            }}
                            additionLabel='other : '
                            label='ศาสนา (Religion)'
                            options={props.religionData}
                            placeholder='เลือกศาสนา'
                            width={4}
                            onChange={(e, { value }) => setField('religion', value)}
                            value={props.religion}
                            required
                        />

                
                        {/* <Dropdown search selection wrapSelection={false} options={countryData} placeholder='Choose an option' /> */}
                        <Form.Field
                            control={Dropdown}
                            search
                            selection
                            allowAdditions
                            onAddItem={(e, { value }) => {
                                const arr = props.nationalityData
                                setField('nationalityData', [{ text: value, value }, ...props.nationalityData])
                            }}
                            additionLabel='other : '
                            label='สัญชาติ (Nationality)'
                            options={props.nationalityData}
                            placeholder='เลือกสัญชาติ'
                            width={4}
                            onChange={(e, { value }) => setField('nationality', value)}
                            value={props.nationality}
                            required />
                        <Form.Input
                            label='สัญชาติอื่นๆ (Nationality other)'
                            placeholder='สัญชาติอื่นๆ'
                            width={4}
                            disabled={props.nationality.disabled}
                            onChange={e => setField('othernationality', e.target.value)}
                            value={props.othernationality} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Field
                            control={Select}
                            label='สถานภาพ (Status)'
                            options={statusData}
                            placeholder='สถานะ'
                            width={4}
                            onChange={(e, { value }) => setField('status', value)}
                            value={props.status}
                            required
                        />
                        <Form.Input
                            label='อาชีพ (occupartion)'
                            placeholder='อาชีพทำงาน'
                            width={4}
                            onChange={e => setField('occupartion', e.target.value)}
                            value={props.occupartion}
                        />
                        <Form.Input
                            label='โทรศัพท์บ้าน (Home Phonenumber)'
                            placeholder='โทรศัพท์บ้าน'
                            width={4}
                            onChange={e => setField('homePhonenumber', e.target.value)}
                            value={props.homePhonenumber}
                        />
                        <Form.Input
                            label='โทรศัพท์มือถือ (Mobile Number)'
                            placeholder='โทรศัพท์ที่ทำงาน'
                            width={4}
                            onChange={e => setField('mobileNumber', e.target.value)}
                            value={props.mobileNumber}
                            required />
                    </Form.Group>
                </Segment>
            </Segment.Group>
            <br></br>
        </div>
    )
}


export default InfoPateint
