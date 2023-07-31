function calc(){
    const result=document.querySelector('.calculating__result span')
result.textContent=`0`
let sex,
weight,
height,
age,
activity
if(localStorage.getItem('gender')){
    sex=localStorage.getItem('gender')
}else{
    sex='women'
}
if(localStorage.getItem('id')){
    activity=localStorage.getItem('id')
}else{
    activity=1.375
}
    function calcDailyKkal(sex,weigth,height,age,activity){

        if (!sex || !weight|| !height || !age || !activity){
            result.textContent=`0`
            return
        }
            
        let formula;
        if(sex==`male`){
                formula=(88.36 + (13.4 *weigth) + (4.8 * height) - (5.7 * age))*(activity) 
        }else{
            formula=(47.6 + (9.2 *weigth) + (3.1 * height) - (4.3  * age))*(activity)
        }
        result.textContent=`${Math.round(formula)}`
    }
    function getFromStorage(selector,active){
        let elements=document.querySelectorAll(`${selector} div`)

        elements.forEach(item=>{

            item.classList.remove(active)
                if(item.getAttribute('data-coefficient')==localStorage.getItem('id')){
                    item.classList.add(active)
                }
                if(item.id==localStorage.getItem('gender')){
                    item.classList.add(active)
                }
        })
    }
    getFromStorage('#gender','calculating__choose-item_active')
    getFromStorage('.calculating__choose_big','calculating__choose-item_active')

    function getStaticData(parentSelector, active){
        let elements =document.querySelectorAll(`${parentSelector} div`)

        elements.forEach(item=>{
            item.addEventListener('click',(e)=>{
                if(e.target.getAttribute('data-coefficient')){
                    activity=+e.target.getAttribute('data-coefficient')
                    localStorage.setItem('id',+e.target.getAttribute('data-coefficient'))
                }else{
                    sex=e.target.id
                    localStorage.setItem('gender',e.target.id)
                }
                elements.forEach(item=>item.classList.remove(active))
                e.target.classList.add(active)
                calcDailyKkal(sex,weight,height,age,activity)
            })
        })
    }   
    
    getStaticData('#gender','calculating__choose-item_active')
    getStaticData('.calculating__choose_big','calculating__choose-item_active')

    function getInputData(parentSelector){
        const input=document.querySelectorAll(`${parentSelector} input`)
        input.forEach(item=>{
            item.addEventListener('input',(e)=>{
                switch(e.target.id){
                    case "height":height=+e.target.value
                    case "weight":weight=+e.target.value
                    case "age":age=+e.target.value
                }
                if((e.target.value.match(/\D/g))){
                    console.log('fwef')
                    e.target.style.border='1px solid red'
                }else{
                    e.target.style.border='none'
                }
                calcDailyKkal(sex,weight,height,age,activity)
            })
        })
    }
    getInputData('.calculating__choose_medium')
}
export {calc}