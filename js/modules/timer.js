export function timer(deadline){
  
    function getTimeDiffrence(time){
    let diff = new Date(time)- new Date(),
        days= Math.round(diff/(1000*60*60*24)),
        hours= Math.round(diff/(1000*60*60)%24),
        minutes= Math.round(diff/(1000*60)%60),
        seconds= Math.round(diff/(1000)%60)
        return{
            'diff':diff,
            'days':days,
            'hours':hours,
            'minutes':minutes,
            'seconds':seconds
        }
    }
    function fillClock(){
        let t=getTimeDiffrence(deadline)
        document.querySelector('#days').textContent=t.days
        document.querySelector('#hours').textContent=t.hours
        document.querySelector('#minutes').textContent=t.minutes
        document.querySelector('#seconds').textContent=t.seconds
        if(t.diff>=0){
            setInterval(fillClock, 1000)
        }
    }
    fillClock()
    getTimeDiffrence(deadline)
}

