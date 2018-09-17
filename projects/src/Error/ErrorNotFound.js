import React from "react";
import {
    Grid, Menu, Segment, Container, Divider, Header,
    Icon, Image, Table, Label, List, Dropdown, Item,
    Responsive, Sidebar, Visibility, Statistic, Button,
    Modal, Popup, Form, TextArea, Pagination
} from "semantic-ui-react";
import styled from "styled-components";
import notfound from '../Static/Img/Error/404.gif'
import { Link } from "react-router-dom";
const Notfounds = styled(Image) `
  background: url(${notfound}) ;
  
`;

export default class ErrorNotFound extends React.Component {

    render() {
        return (
           <div>
                <Menu
                    size="medium"
                    pointing={true}
                    borderless={true}
                    style={{ border: "0px" }}
                >
                    <Menu.Item>
                        <Icon color="red" size="big" name="heartbeat" />
                        <span style={{ fontSize: "2em", color: "#00B5AD" }}>
                            OPD BOOKS
                  </span>
                    </Menu.Item>

                    <Menu.Menu position="right">
                        <Menu.Item>
                            <Link to="/signin"><Button basic  color='teal'>
                                Sign In
                    </Button></Link>
                        </Menu.Item>

                        <Menu.Item>
                            <Link to="/signup"><Button   color='teal' >
                                Sign Up
                    </Button></Link>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <Image src={notfound} fluid />
                <Container>
                    <Grid width={16}>
                        <Grid.Column width={2}>
                            
                        </Grid.Column>
                        <Grid.Column width={2} >
                            <Container>
                            <Link to="/">
                            <Button basic color='teal' size='massive' style={{ borderRadius: '2rem' }}>
                                Homepage
                            </Button>
                            </Link>
                            </Container>
                    </Grid.Column>
                </Grid>
                   
            
                </Container>
            </div>
        );
    }
}
