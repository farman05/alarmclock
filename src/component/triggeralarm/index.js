import React,{useState,useEffect} from 'react'
import {Card,Button} from 'react-bootstrap';
import {fetchCurrentAlarm,getDayOfWeek,getCurrentTIme} from '../../helper'
import {getAlarm} from '../../storage';
import Clock from '../clock'
const AlarmScreen = (props)=>{
        
    const [alarm,setAlarm ] = useState({});
    const [audio,setAudio] = useState(new Audio(''))
    const [time,setTime] = useState()    
    const [date,setDate] = useState()
    const [isStop,setStop] = useState(false);


    //get current time
    const currentTime  =()=>  {
            setTime(getCurrentTIme())
    }

    //get current date
    const currentDate = ()=>{
        setDate(getDayOfWeek());

    }

    useEffect(()=>{

        const interval = setInterval(() => {
            callInterval()
          }, 1000);
          return () => clearInterval(interval);
       
    },[time])


    const callInterval = ()=>{
        if(audio && (alarm && alarm.hr)){
                // consol/e.log('heree')
                audio.play()
        }
        currentTime()
        currentDate()
        if(!alarm.hr && !isStop){
            getAllAlarmData()
        }
         
    }



    const getAllAlarmData = ()=>{
        const result = getAlarm('alarm')
        const alarmData = fetchCurrentAlarm(result)
        if(alarmData && !isStop){
            if(alarmData.sound){
               let  audioPlay = new Audio(alarmData.sound);
                setAudio(audioPlay)
            }
            setAlarm(alarmData)
        }

    }

    const stopAlarm = ()=>{
        setAlarm('')
        if(audio){
            audio.pause()
        }
        setAudio(new Audio(''))
        setStop(true)

        setTimeout(()=>{
             setStop(false);
        },60000)
    }


      

        return(
            <>
            {alarm && alarm.hr ?    
            <div className="text-center alaram-card alarm-screen h100">
                <div className = " alarm-screen alaram-card alarm-screen-div h100">    
                    <Card className="text-center alaram-card h100">
                        <Card.Body>
                            <Card.Text>
                                {time}
                            </Card.Text>
                            <Card.Text>
                                {date}
                            </Card.Text>
                            <Card.Text className = "alarm-label" >
                                <span>{alarm.label}</span>
                            </Card.Text>
                            <div>
                                {alarm.snooze &&
                                    <Button variant="outline-primary" onClick = {()=>{alert('Work in Progress')}}  block>Snooze</Button>
                                }
                                    <Button variant="outline-primary" onClick = {()=>stopAlarm()} block>Stop</Button>

                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            :
            null 
            }
            </>
        )
}

export default AlarmScreen;