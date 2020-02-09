import { lazy } from 'react';
import Home from '../component/home'
import AlarmList from '../component/alarm'
import AlarmForm from '../component/alarmform'

export var routes = [
    {
        path: process.env.PUBLIC_URL+'/',
        component: Home,
    },
    {
        path: process.env.PUBLIC_URL+'/alarmList',
        component: AlarmList,
    },
    {
        path: process.env.PUBLIC_URL+ '/addAlarm',
        component: AlarmForm,
    },
    {
        path: process.env.PUBLIC_URL+'/editAlarm/:id',
        component: AlarmForm,
    },
    
  
  
]
