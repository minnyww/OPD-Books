import React from "react";
import {
    Segment, Container, Icon, Button, Modal, Form, Input, Transition, Header, Dropdown, Responsive
} from "semantic-ui-react";
import swal from 'sweetalert2';
import FormEditProfile from './FormEditProfile'
import ProfilePatientMobile from './ProfilePatientMobile'
const provincesData = require('./../../Static/Data/Provinces')
const amphursData = require('./../../Static/Data/Amphurs')
const districtsData = require('./../../Static/Data/Districts')


export default class EditProfile extends React.Component {
    state = { 
              open: false,
              infoPatient:false
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
    
    InfoPatients = () => {
        if(this.state.infoPatient==true){
            return <ProfilePatientMobile/>
        }else if(this.state.infoPatient==false){
            return <div><h2><Icon name='arrow left' onClick={() => this.setState({infoPatient:true})}/> Edit Profile</h2>
                <FormEditProfile/></div>
        } 
        
    }
    render() {
        const { open,infoPatient} = this.state
        

        return (
            <div>
                <Responsive {...Responsive.onlyComputer}>
                <Container>
                    <Icon name='setting' onClick={this.closeConfigShow(true, false)}></Icon>
                    
                    <Modal 
                        style={{ borderRadius: '2rem' }}
                        open={open}
                        onClose={this.close} 
                        >
                        <Modal.Content >
                             <Header as='h1'>Edit Profile</Header>
                            <FormEditProfile/>
                        
                        </Modal.Content>
                        <Modal.Actions style={{ border: 0 }} >
                            <Button size='hug' onClick={this.close} style={{ borderRadius: '2rem' }} color='red'>
                                Cancel
                            </Button>
                            <Button size='hug'style={{ borderRadius: '2rem' }} color='green'>
                                Success 
                            </Button>
                        </Modal.Actions>
                    </Modal>
                    
                </Container>
                </Responsive>



                <Responsive {...Responsive.onlyMobile}>
                    <Container>
                          {this.InfoPatients()}
                    </Container>
                </Responsive>
            </div>
        );
    }
}
