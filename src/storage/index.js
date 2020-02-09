export const setAlarm = (key,data)=>{

        const fetchAlaram =  getAlarm(key);
        const newAlarmList = [...fetchAlaram,data];
        return localStorage.setItem(key,JSON.stringify(newAlarmList));

}

export const getAlarm = (key)=>{

    const alarmList = localStorage.getItem(key);
    if(alarmList){
        return JSON.parse(alarmList)
    }else{
        return []
    }
}

export const removeAllAlarm = (key)=>{
    localStorage.removeItem(key);

}

export const removeSingleAlarm = (key,index)=>{
    const fetchAlaram =  getAlarm(key);
    fetchAlaram.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(fetchAlaram));

}

export const activeInactiveAlarm = (key,index,status)=>{
            const result = getAlarm(key);
            result[index].is_active = status
            localStorage.setItem(key, JSON.stringify(result));

}

export const updateAlarm = (key,index,values)=>{
    const result = getAlarm(key);
    result[index] = values
    localStorage.setItem(key, JSON.stringify(result));

}