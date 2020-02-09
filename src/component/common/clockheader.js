import React from 'react'
import { useHistory } from "react-router-dom";

import {Row,Col,Button} from 'react-bootstrap'
const ClockHeader = (props)=>{
    const history = useHistory();

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
                    <Col>
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