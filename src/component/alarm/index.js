import React,{useEffect,useState} from 'react'
import ClockHeader from '../common/clockheader';
import ClockFooter from '../common/clockfooter';
import {Card,ListGroup} from 'react-bootstrap'
import AlarmList from './list'
const Alarm = (props)=>{
    const [isList,setIsList] = useState(true);
    
    const editPage = (flag)=>{
        setIsList(!isList);
        console.log('sadasdas')
    }
    
    return(
            <>
                <ClockHeader leftTitle = {isList ? "Edit" : "Done"} leftFunc = {editPage}  title = "Alarm List"  rightTitle = "Add" rightFunc = { ()=>{props.history.push('/addAlarm')} }/>   
                <AlarmList   isList = {isList}  />
                <ClockFooter disabledAlarm = {true} />
            </>
        )
}

export default Alarm;