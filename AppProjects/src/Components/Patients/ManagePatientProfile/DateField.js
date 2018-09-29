import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import moment from 'moment';
import Date from './Date';

export default class DateField extends Component {
    state = {
        dob: null,
        age: ''
    }

    setDate = async (value) => {
        await this.setState({ dob: value.format('DD/MM/YYYY') })
        this.calculateAge();
        this.props.setFieldAndValidate('dob', value.format('DD/MM/YYYY'))
    }

    calculateAge = () => {
        let dob = '' + this.state.dob
        let year = ((+(moment().format('YYYY'))) - (+dob.substring(6)));
        let month = (+(moment().format('MM'))) - (+dob.substring(3, 5));
        let tmp = year + " ปี"
        if (year === 0) {
            month = month
            tmp = year + " ปี " + month + " เดือน"
        }
        this.props.setField('age',tmp)
        if(year < 15){
            this.props.setField('requiredAllParentField', true)
        }else{
            this.props.setField('requiredAllParentField', false)
        }
    }

    render() {
        return (
            <Form.Field
                control={() => Date({ setDate: this.setDate, dob: this.state.dob })}
                label='วัน/เดือน/ปีเกิด (Dob)'
                width={3}
                required
                error={this.props.errorField.dob}
            />
        )
    }
}