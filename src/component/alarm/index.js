import React,{useEffect,useState} from 'react'
import ClockHeader from '../common/clockheader';
import {Card,ListGroup} from 'react-bootstrap'
import AlarmList from './list'
const Alarm = (props)=>{
    const [isList,setIsList] = useState(true);
    
    const editPage = (flag)=>{
        setIsList(flag);
        console.log('sadasdas')
    }
    
    return(
            <>
                <ClockHeader  isList = {isList}  editList = {editPage}/>   
                <AlarmList   isList = {isList}  />
            </>
        )
}

export default Alarm;