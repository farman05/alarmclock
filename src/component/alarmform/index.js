import React,{useState,useEffect} from 'react'
import {Card,Row,Col,Form,ListGroup,Button} from 'react-bootstrap'
import {daysArray,soundArray} from '../../constant';
import validation from './validation';
import useForm from './useForm'
import {setAlarm,removeAllAlarm,getAlarm,updateAlarm,removeSingleAlarm} from '../../storage'
const AlarmForm = (props)=>{
    const [checkboxFlag, setCheckboxFlag] = useState("");
    const [dayArray,setDayArray] = useState([])
    const [alarmData,setAlaramData] = useState({})
    const [editId,setEditId] = useState('')
    const [isEdit,setEditFlag] = useState(false) 
    useEffect(()=>{
        const {match:{params:{id}}} = props;
        console.log({id});
        if(id){
            fetchData(id-1)

        }
    },[])

    const fetchData = (index)=>{
            console.log({index})  
            const result = getAlarm('alarm');
            const data = result[index];
            if(data){
                setEditId(index)
                setEditFlag(true)
                setValues(inputs=>({
                        hr:data.hr,
                        mm:data.mm,
                        time:data.time,
                        day:data.day,
                        sound:data.sound,
                        snooze:data.snooze ? data.snooze : '',
                        label:data.label ? data.label : '',


                }))
            }


    }


    //setting day array 
    const handleCheckboxChange = e => {
        let selectDayArray = [];
        if (e.target.checked) {
            selectDayArray = [...dayArray, e.target.value];
        } else {
            selectDayArray = dayArray.filter(function (val) {
                return val !== e.target.value
            })
        }

        setDayArray(selectDayArray);
        setValues(inputs => ({
            ...inputs,
            day: selectDayArray
        }))
        if (selectDayArray.length >= 1) {
            setCheckboxFlag(1);
        } else {
            setCheckboxFlag("");
        }
    }



    //save form
    const save = ()=>{
        try{
            values.is_active = 1;
            if(isEdit){
                updateAlarm('alarm',editId,values)
            }else{
                setAlarm('alarm',values)
            }
            props.history.push('/alarmList')
        }catch(e){
            alert('Error while adding an alarm')
        }
    }

    const removeAlarm = (index)=>{
        removeSingleAlarm('alarm',editId)
        props.history.push('/alarmList')


    }


    //day listing
    const dayList = ()=>{

            return(
                <Card>
                    <ListGroup variant="flush">
                    {daysArray.map((v,k)=>{
                        const {day = []} = values 
                        return(
                            <ListGroup.Item key = {v.id}>
                                <Row className="justify-content-md-left">
                                    <Col xs = {8} className = "text-left">
                                        {v.name}
                                    </Col>
                                    <Col xs = {4}>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check  name = {`day[${k}]`} value = {v.id} onChange = {handleCheckboxChange} type="checkbox" checked={day.indexOf(v.id.toString()) >= 0 ? true : ''} />
                                    </Form.Group>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )
                    })}
                    </ListGroup>
                </Card>
            )
    }

    const soundList = ()=>{

        return(
            <Card>
                <ListGroup variant="flush">
                {soundArray.map((v,k)=>{
                        const {sound = []} = values 

                    return(
                        <ListGroup.Item key = {v.id}>
                            <Row className="justify-content-md-left">
                                <Col xs = {8} className = "text-left">
                                    {v.name}
                                </Col>
                                <Col xs = {4}>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type='radio' name = {`sound`} value = {v.id} onChange = {handleChange}
                                    checked={sound.indexOf(v.id.toString()) >= 0 ? true : ''}
                                    />
                                </Form.Group>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    )
                })}
                </ListGroup>
            </Card>
        )
}

    const dropDown = (length = 0,start=0)=>{

            let option = []

            for(let i = start;i<=length;i++){
                const value = i < 10 ? '0'+i : i
                option.push(
                        <option key = {value} value = {value}>{value}</option>
                )
            }

            return option;
    }

    const ErrorDiv = ({name})=>{

        if(errors[name]){
            return(
                <span className = "error">{errors[name]}</span>
            )
        }else{
            return(null)
        }
    }

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        setValues,
        setErrors,
        setIsSubmitting,
        isSubmitting
    } = useForm(save, validation);
    console.log({values},'adads')
        return(

            <>
            <Form onSubmit={handleSubmit} noValidate>
             <Card>
                <Card.Body>
                    <Card.Title className = "text">Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    
                            <Row>    
                                <Col xs = {4}>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control value = {values.hr ||  '' } name = "hr" onChange = {handleChange} as="select">
                                        <option>HH</option>
                                        {dropDown(12,1)}
                                        </Form.Control>
                                        <ErrorDiv name = "hr" />
                                    </Form.Group>
                                </Col>
                                <Col xs = {4}>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control value = {values.mm ||  ''}  name = "mm" onChange = {handleChange} as="select">
                                        <option>MM</option>
                                        {dropDown(59)}
                                        </Form.Control>
                                        <ErrorDiv name = "mm" />

                                    </Form.Group>
                                </Col>
                                <Col xs = {4}>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control value = {values.time ||  ''} name = "time" onChange = {handleChange} as="select">
                                        <option>Time</option>
                                        <option value = "AM">AM</option>
                                        <option value = "PM">PM</option>

                                        </Form.Control>
                                        <ErrorDiv name = "ss" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs = {8} className = "text-left">
                                        <label>Snooze</label>
                                </Col>
                                <Col xs = {4}>
                                    <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check name = "snooze" value = {values.snooze ||  ''}   onChange = {handleChange} checked={values.snooze ? true : false} type="checkbox"/>
                                        </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs = {4} className = "text-left">
                                    <label>Label</label>
                                </Col>
                                <Col xs = {8}>
                                <Form.Group controlId="formBasicCheckbox">
                                        <Form.Control name = "label"  value = {values.label || ''}  onChange = {handleChange}  type="text"  />
                                </Form.Group>
                                </Col>
                            </Row>
                    {/* </Card.Text> */}
                </Card.Body>
            </Card>
            <ErrorDiv name = "day" />
            {dayList()}
            {soundList()}
            <div>
                <Button variant="outline-primary" type = "submit"  block>{isEdit ? 'Update' : 'Save'}</Button>
            </div>
            <div>
                <Button variant={`outline-${isEdit ? 'danger' : 'primary'}`} onClick = {()=>{isEdit ? removeAlarm() : props.history.push('/alarmList')}} block>{isEdit ? 'Delete' : 'Cancel'}</Button>
            </div>
            </Form>

            </>
        )
}

export default AlarmForm;