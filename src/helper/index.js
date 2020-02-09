import moment from 'moment';
import {daysArray,soundArray} from '../constant'
export const getDayOfWeek = ()=>{
    return moment().format('dddd DD MMM, YYYY');

}

export const getCurrentTIme = ()=>{
    return  moment().format("HH:mm:ss");

}


export const getDayLabel = (day)=>{
        
        //check length of day with week array if length matches means alarm is set for every day
        if(day.length == daysArray.length){
            return 'EveryDay'
        }
        
        if(chkWeekendOnly(day,'weekend')){
              return "WeeKends"  
        }

        if(chkWeekendOnly(day,'weekday')){
            return "Weekdays"  
        }

         const label = daysArray.flatMap(o => day.includes(o.id.toString()) ? [o.name] : []).join(",");
         return label;



}

const chkWeekendOnly = (day,type)=>{

        const weekendArray =  daysArray.filter((v,k)=>{ return v.type.toLowerCase() == type });
        const weekendLength = weekendArray.length
        if(weekendLength == day.length){
               const matchLength = weekendArray.filter((w,q)=>{  return day.includes(w.id.toString())  })
               return weekendLength == matchLength.length ? true : false 
        }else{
            return false;
        }
}

export const fetchCurrentAlarm = (alarmArray)=>{
    //get day hr minute am/pm
    const day =  moment().format('dddd')
    const now =  moment().format('hh:mm:A');
    const currentDay = daysArray.filter((i,j)=>{ return i.name.toLowerCase() == day.toLowerCase()})
    const result = alarmArray.filter((v,k)=>{
                return v.day.includes(currentDay[0].id.toString()) && v.is_active == 1;
    })
    let alarmData = "" 
    if(result.length){
       result.map((o,l)=>{
                const settime = o.hr + ':' + o.mm + ':' + o.time
                if(settime == now){
                    alarmData =  o
                    alarmData.sound =  getSoundFile(parseInt(alarmData.sound))
                   
                }
        })
    }
    return alarmData

}

export const getSoundFile = (soundId)=>{
            const result = soundArray[soundArray.findIndex(x=>x.id == (soundId))]
            return result ? result.sound : ''
} 

