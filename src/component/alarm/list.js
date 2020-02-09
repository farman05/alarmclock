import React ,{useState,useEffect} from 'react'
import {Card,ListGroup,Row,Col,Form} from 'react-bootstrap'
import {getAlarm,removeSingleAlarm,activeInactiveAlarm} from '../../storage'
import { useHistory } from "react-router-dom";
import {getDayLabel} from '../../helper'
const AlarmList = (props)=>{

    const [alarmList,setAlarmList] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        getAllAlarm()
    },[props.isList])

    const getAllAlarm = ()=>{
        const result = getAlarm('alarm');
        const newList = result.map((v,k)=>{
                return {
                        ...v,
                        formatTime:v.hr + ':' + v.mm + ':' + v.time,
                        index:k
                }
        })
        modifyResult(newList)
    }

    //sorting by time 
    const modifyResult = (list)=>{
        list.sort(function(a, b) {
            return Date.parse('1970/01/01 ' + a.formatTime.slice(0, -2) + ' ' + a.formatTime.slice(-2)) - Date.parse('1970/01/01 ' + b.formatTime.slice(0, -2) + ' ' + b.formatTime.slice(-2))
          });
          setAlarmList(list)
    }

    const activeInactive = (e,value)=>{
            activeInactiveAlarm('alarm',value.index,!value.is_active)
            getAllAlarm()
    }

    const removeAlarm = (index)=>{
        removeSingleAlarm('alarm',index)
        getAllAlarm()

    }


    const alarmListElement = ()=>{

        return(
            alarmList.map((v,k)=>{
                return(
                    <ListGroup.Item key = {v.index} style = {{background:`${v.is_active == 0 ? '#f9f9f9' : 'transparent'}`}}>
                        <Row className="justify-content-md-left">
                            {!props.isList &&
                                <Col xs = {2} className = "text-left">
                                    <span onClick = {()=>removeAlarm(v.index)} className = "fa fa-times removeIcon"></span>
                                </Col>
                            }
                            <Col  className = "text-left">
                                <div>
                                <strong>{`${v.hr}:${v.mm}`}</strong><sub>{ v.time}</sub>
                                </div>
                                <div>{v.label ? v.label : ''}{ ', '+getDayLabel(v.day)}</div>
                            </Col>
                            {props.isList ?
                                <Col >
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check onChange = {(e)=>activeInactive(e,v)} value={v.is_active} checked={v.is_active ? true : false} type="checkbox"/>
                                    </Form.Group>
                                </Col>
                            :
                                <Col xs = {2} className = "text-right">
                                    <span  className = "fa fa-arrow-right " onClick = {()=>history.push(`/editAlarm/${+v.index + 1}`)}></span>
                                </Col>
                            }
                        </Row>
                    </ListGroup.Item>
                )
        })
        )
    }




    return(
            <>
             <Card>
                    <ListGroup variant="flush">
                        {alarmListElement()}
                    </ListGroup>
                </Card>
            </>
        )
}

export default AlarmList;