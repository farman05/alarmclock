import React,{useState,useEffect} from 'react'
import {Card} from 'react-bootstrap';
import ClockFooter from '../common/clockfooter';
import {getDayOfWeek,getCurrentTIme,fetchCurrentAlarm} from '../../helper'
import {getAlarm} from '../../storage'
const Clock = (props)=>{
        
    const [time,setTime] = useState()    
    const [date,setDate] = useState()



    //get current time
    const currentTime  =()=>  {
            setTime(getCurrentTIme())
            setTimeout(function(){ currentTime();currentDate() }, 1000); 
    }

    //get current date
    const currentDate = ()=>{
        setDate(getDayOfWeek());

    }

    useEffect(()=>{
        currentTime()
        currentDate()
    },[])
      
      
       
        return(
            <>
                <Card className="text-center">
                    <Card.Header>Clock</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {time}
                        </Card.Text>
                        <Card.Text>
                            {date}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <ClockFooter/>
               
            </>
        )
}

export default Clock;