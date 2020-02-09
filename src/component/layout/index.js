import React,{useEffect, useState} from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import AlarmScreen from '../triggeralarm'
const Layout = (props)=>{

        return(
            <Container>
                 <Row>
                    <Col></Col>
                    <Col className = "children" sm = {6} xs={12}>
                      {props.children}
                       <AlarmScreen/>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
           
        )
}

export default Layout;