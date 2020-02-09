import { lazy } from 'react';
import Home from '../component/home'
import AlarmList from '../component/alarm'
import AlarmForm from '../component/alarmform'

export var routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/alarmList',
        component: AlarmList,
    },
    {
        path:  '/addAlarm',
        component: AlarmForm,
    },
    {
        path: '/editAlarm/:id',
        component: AlarmForm,
    },
    
  
  
]
