import React from 'react'
import { useHistory } from "react-router-dom";

import {Row,Col,Button} from 'react-bootstrap'
const ClockHeader = (props)=>{
    const history = useHistory();


       return(
            <div className = "clockHeader">
                <Row>
                    <Col xs = {3}>
                        {/* {props.leftTitle && */}
                        <Button onClick = {()=>props.leftFunc ? props.leftFunc() : ''} href="#" variant="link" size="lg">
                                {props.leftTitle}&nbsp;
                        </Button>
                        {/* } */}
                    </Col>
                    <Col xs = {6}>
                       <div className = "header-title">{props.title}</div>
                    </Col>
                    <Col xs = {3}>
                        <Button onClick = {()=>props.rightFunc ? props.rightFunc() : ''} href="#" variant="link" size="lg">
                                {props.rightTitle}
                        </Button>
                    </Col>
                </Row>    
            </div>
       ) 


        return(
            <div className = "clockHeader">
                {props.isList ?
                    <Row>   
                        <Col>
                            <Button onClick = {()=>props.editList(!props.isList)} href="#" variant="link" size="lg">
                                Edit
                            </Button>
                        </Col>
                        <Col>
                            <Button onClick = {()=>history.push('/addAlarm')} href="#" variant="link" size="lg">
                                Add
                            </Button>
                        </Col>
                    </Row>
                :
                <Row>   
                    <Col xs = {6}>
                        <Button onClick = {()=>props.editList(!props.isList)} href="#" variant="link" size="lg">
                            Done                        
                        </Button>
                    </Col>
                </Row>
                }
            </div>
        )
}

export default ClockHeader;