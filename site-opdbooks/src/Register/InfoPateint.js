import React from 'react';
import styled from 'styled-components'
import { Segment, Header, Image, Form, Select, Grid } from 'semantic-ui-react'
import { nameTypeTh, bloodgroupData, cardTypeData, genderData, nameTypeEng, nationalityData, religionData, statusData } from './Data/FormData'

const GridColumn = styled(Grid.Column) `
    display: flex;
    justify-content: center;
    align-items: center;
`

const InfoPateint = ({
    //method
    setField, calculateAge,
    //attribute
    registerDate, cardType, idCard,
    nameTitleTH, firstnameTH, lastnameTH, nameTitleEN, firstnameEN,
    lastnameEN, gender, dob, age, bloodgroup, nationality, religion, status,
    occupartion, homePhonenumber, mobileNumber
    // picture
}) => (
        <div>
            <Segment>
                <Header as='h2' attached='top' textAlign='center'>
                    ใบลงทะเบียนผู้ป่วยใหม่
                        <br></br>
                    NEW PATIENT RESGISTRATION FORM
                </Header>
                <div>
                    <Header as='h2' icon textAlign='center'>
                        <Header.Content>
                            <p>รูปประจำตัว</p>
                        </Header.Content>
                        <GridColumn width={16}><Image src='https://react.semantic-ui.com/assets/images/avatar/large/stevie.jpg' size='small' circular /></GridColumn>
                    </Header>
                    <br></br>
                </div>
                <Form.Group widths='equal' >
                    <Form.Input fluid id='registerdate' label='วันที่ทำประวัติ (Register Date)' placeholder='' width={4} readOnly disabled />
                    <Form.Field control={Select} label='ประเภทบัตร (Card type)' options={cardTypeData} placeholder='Select Card Type' width={4} required onChange={(e, { value }) => setField('cardType', value)} />
                    <Form.Input fluid id='cardid' label='เลขบัตรประชาชน  (ID CARD No./Passport No.)' placeholder='' width={8} required onChange={e => setField('idCard', e.target.value)} value={idCard} />
                </Form.Group>
                <Form.Group>
                    <Form.Field control={Select} label='คำนำหน้า' options={nameTypeTh} placeholder='เลือกคำนำหน้า' width={4} required onChange={(e, { value }) => setField('nameTitleTH', value)} />
                    <Form.Input label='ชื่อจริง' placeholder='ชื่อ' width={6} required onChange={e => setField('firstnameTH', e.target.value)} value={firstnameTH} />
                    <Form.Input label='นามสกุล' placeholder='นามสกุล' width={6} required onChange={e => setField('lastnameTH', e.target.value)} value={lastnameTH} />
                </Form.Group>
                <Form.Group>
                    <Form.Field control={Select} label='Title' options={nameTypeEng} placeholder='Select Title' width={4} required onChange={(e, { value }) => setField('nameTitleEN', value)} />
                    <Form.Input label='First name' placeholder='First name' width={6} required onChange={e => setField('firstnameEN', e.target.value)} value={firstnameEN} />
                    <Form.Input label='Last Name' placeholder='Last Name' width={6} required onChange={e => setField('lastnameEN', e.target.value)} value={lastnameEN} />
                </Form.Group>
                <Form.Group>
                    <Form.Input label='วัน/เดือน/ปีเกิด (DOB)' placeholder='ex. 01/01/1997' width={3} onChange={e => setField('dob', e.target.value)} onBlur={() => calculateAge()} value={dob} />
                    <Form.Input label='อายุ (age)' placeholder='อายุ' width={2} value={age} readOnly />
                    <Form.Field control={Select} label='เพศ (Gender)' options={genderData} placeholder='เลือกเพศ' width={3} required onChange={(e, { value }) => setField('gender', value)} />
                    <Form.Field control={Select} label='กรุ๊ปเลือด (Blood Group)' options={bloodgroupData} placeholder='เลือกกรุ๊ปเลือด' width={4} required onChange={(e, { value }) => setField('bloodgroup', value)} />
                    <Form.Field control={Select} label='สัญชาติ (Nationality) ' options={nationalityData} placeholder='เลือกสัญชาติ' width={4} required onChange={(e, { value }) => setField('nationality', value)} />
                    <Form.Field control={Select} label='ศาสนา (Religion)' options={religionData} placeholder='เลือกศาสนา' width={4} required onChange={(e, { value }) => setField('religion', value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Field control={Select} label='สถานภาพ (Status)' options={statusData} placeholder='สถานะ' width={3} required onChange={(e, { value }) => setField('status', value)} />
                    <Form.Input label='อาชีพ (occupartion) ' placeholder='อาชีพทำงาน' width={4} onChange={e => setField('occupartion', e.target.value)} value={occupartion} />
                    <Form.Input label='โทรศัพท์บ้าน (Home Phonenumber)' placeholder='โทรศัพท์บ้าน' width={5} onChange={e => setField('homePhonenumber', e.target.value)} value={homePhonenumber} />
                    <Form.Input label='โทรศัพท์มือถือ (Mobile Number)' placeholder='โทรศัพท์ที่ทำงาน' width={4} onChange={e => setField('mobileNumber', e.target.value)} value={mobileNumber} required/>
                </Form.Group>
              
            </Segment>
            <br></br>
        </div>
    )

export default InfoPateint
