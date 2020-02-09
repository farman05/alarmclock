import React from 'react'
import { useHistory } from "react-router-dom";

import {Row,Col,Button} from 'react-bootstrap'
const ClockFooter = (props)=>{
    const history = useHistory();

        return(
            <div className = "clockFooter">
                <Row>   
                    <Col>
                        <Button href="#" variant="link" size="lg">
                            Clock
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick = {()=>history.push('/alarmList')} href="#" variant="link" size="lg">
                            Alarm
                        </Button>
                    </Col>
                </Row>
            </div>
        )
}

export default ClockFooter;