import * as data1 from './modules/modal.js' 
import * as data2 from './modules/tabs.js' 
import * as data3 from './modules/slider.js' 
import * as data4 from './modules/calc.js' 
import * as data5 from './modules/forms.js' 
import * as data6 from './modules/timer.js' 
import * as data7 from './modules/cards.js' 
import { showModal } from './modules/modal.js'

window.addEventListener("DOMContentLoaded",()=>{
    let timeId= setInterval(() => showModal ('.modal',timeId) , 3000)
    data2.tabs('.tabheader','.tabheader__item','.tabcontent',"tabheader__item_active")
    data4.calc()
    data5.forms(timeId,'form')
    data1.modal('[data-modal]','.modal',timeId)
    data3.slider()
    data6.timer("2023-08-24")
    data7.cards()
})
