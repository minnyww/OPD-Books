import React, { Component } from 'react';
import { Message, Segment, Header, Icon, Image, Button, Checkbox, Form, Input, Radio, Select, TextArea, Grid, Container } from 'semantic-ui-react'
import { nameTypeTh, bloodgroup, cardType, gender, nameTypeEng } from './Data/FormData'


const InfoPateint = () => (
    <div>
        <Segment>
            <Form.Group widths='equal' >
                <Form.Input fluid id='registerdate' label='วันที่ทำประวัติ (Register Date)' placeholder='' width={4} readOnly disabled/>
                <Form.Field control={Select} label='ประเภทบัตร (Card type)' options={cardType} placeholder='Select Card Type' width={4} required />
                <Form.Input fluid id='cardid' label='เลขบัตรประชาชน  (ID CARD No./Passport No.)' placeholder='' width={5} required />
                <Form.Input label='อายุ' placeholder='อายุ' width={3} />
            </Form.Group>
            <Form.Group>
                <Form.Field control={Select} label='คำนำหน้า' options={nameTypeTh} placeholder='เลือกคำนำหน้า' width={4} required />
                <Form.Input label='ชื่อจริง' placeholder='ชื่อ' width={6} required />
                <Form.Input label='นามสกุล' placeholder='นามสกุล' width={6} required />
            </Form.Group>
            <Form.Group>
                <Form.Field control={Select} label='Title' options={nameTypeEng} placeholder='Select Title' width={4} required />
                <Form.Input label='First name' placeholder='First name' width={6} required />
                <Form.Input label='Last Name' placeholder='Last Name' width={6} required />
            </Form.Group>
            <Form.Group>
                <Form.Input label='วัน/เดือน/ปีเกิด' placeholder='ตัวอย่าง 01/01/1997' width={5} />
                <Form.Field control={Select} label='เพศ (Gender)' options={gender} placeholder='เลือกเพศ' width={3} required />
                <Form.Field control={Select} label='กรุ๊ปเลือด (Blood Group)' options={bloodgroup} placeholder='เลือกกรุ๊ปเลือด' width={4} required />
                <Form.Field control={Select} label='สัญชาติ (Nationality) ' options={nameTypeEng} placeholder='เลือกสัญชาติ' width={4} required />
                <Form.Field control={Select} label='ศาสนา (Religion)' options={nameTypeEng} placeholder='เลือกศาสนา' width={4} required />
            </Form.Group>
            <Form.Group>
                <Form.Field control={Select} label='สถานภาพ (Status)' options={nameTypeEng} placeholder='สถานะ' width={4} required />
                <Form.Input label='อาชีพ (Occupation) ' placeholder='อาชีพทำงาน' width={4} />
                <Form.Input label='โทรศัพท์บ้าน (Home/Phone Number)' placeholder='โทรศัพท์บ้าน' width={4} required />
                <Form.Input label='โทรศัพท์มือถือ (Mobile Number)' placeholder='โทรศัพท์ที่ทำงาน' width={4} />
            </Form.Group>
        </Segment>
        <br></br>
    </div>
)

export default InfoPateint
