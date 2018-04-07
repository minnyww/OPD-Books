import React from 'react';
import { Label, Segment, Form, Radio} from 'semantic-ui-react'

const Allergy_English = (props) => {
    const setField = props.setField
    return (
        <div>
            <Segment>
                <Label as='a' color='teal' ribbon><h4 style={{ fontFamily: 'Kanit' }}>History of Food Or Drug Allergy</h4></Label>
                <br></br><br></br>
                <Segment color='teal'>
                    <h3 >Do you have any allergies<span style={{color:'red'}}>*</span></h3 >
                    <br></br>
                    <Form.Group inline>
                        <Form.Radio 
                            label='No' 
                            value='No' 
                            checked={props.allergy.value === 'No'} 
                            onChange={(e, { value }) => setField('allergy', value)} 
                        />
                        <Form.Radio
                            label='Yes (Please specify)'
                            value='other'
                            checked={props.allergy.value === 'other'}
                            onChange={(e, { value }) => setField('allergy', value)}
                        />
                        <Form.Input 
                            label='' 
                            placeholder='Please, specify your allergies.' 
                            width={4} 
                            disabled={props.allergy.disabled}
                            onChange={e => setField('otherallergy', e.target.value)} 
                            value={props.otherallergy}
                        />
                        <br></br>
                    </Form.Group>
                </Segment>
                <Segment color='teal'>
                    <h3>Right to medical treatment<span style={{ color: 'red' }}>*</span></h3>
                    <br></br>
                    <Form.Group inline>
                        <Form.Radio 
                            value='Government-Officer' 
                            label='Government Officer' 
                            checked={props.privilege.value === 'Government-Officer'} 
                            width={4} 
                            onChange={(e, { value }) => setField('privilege', value)}
                        />
                        <Form.Radio 
                            value='Government-family' 
                            label='Government Officer&#39;s family' 
                            checked={props.privilege.value === 'Government-family'} 
                            width={4} 
                            onChange={(e, { value }) => setField('privilege', value)}
                        />
                        <Form.Radio 
                            value='State-Enterprise' 
                            label='State Enterprise Employee '
                            checked={props.privilege.value === 'State-Enterprise'} 
                            width={2} 
                            onChange={(e, { value }) => setField('privilege', value)}
                        />
                    </Form.Group>

                    <Form.Group inline>
                        <Form.Radio 
                            value='State-Enterprise-family' 
                            label='State Enterprise Employee&#39;s family' 
                            width={4} 
                            checked={props.privilege.value === 'State-Enterprise-family'} 
                            onChange={(e, { value }) => setField('privilege', value)}
                        />
                        <Form.Radio 
                            value='General-Public' 
                            label='General Public' 
                            width={4} 
                            checked={props.privilege.value === 'General-Public'} 
                            onChange={(e, { value }) => setField('privilege', value)}
                        />
                        <Form.Radio 
                            value='other' 
                            label='Other'
                            width={2} 
                            checked={props.privilege.value === 'other'}  
                            onChange={(e, { value }) => setField('privilege', value)}
                        />
                        <Form.Input 
                            label=''
                            placeholder='Please, specify your right to medical treatment.' 
                            width={4} 
                            disabled={props.privilege.disabled} 
                            onChange={e => setField('otherprivilege', e.target.value)}
                            value={props.otherprivilege}
                        />
                        <br></br>
                    </Form.Group>
                </Segment>
            </Segment>
            <br></br>
        </div>
    )}

export default Allergy_English
