
 function closeModal(modalSelector){
    const modal= document.querySelector(modalSelector)
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow=""
}
 function showModal(modalSelector,timeId){
    const modal= document.querySelector(modalSelector)
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow="hidden"  
    if(timeId){
        clearInterval(timeId)
     } 
     //коли користувач відкрив вікно щоб воно потім само не вискакувало
}
 function modal(triggerSelector, modalSelector,timeId){
     ///--------------------------------------------------modal
     let modal= document.querySelector(modalSelector)
     let btns = document.querySelectorAll(triggerSelector)
     btns.forEach((item)=>{
        console.log(timeId)
         item.addEventListener('click' ,()=> showModal(modalSelector,timeId))
     })
     function showModalByScroll(){
         if(document.documentElement.scrollHeight<=document.documentElement.clientHeight+document.documentElement.scrollTop){
             showModal(modalSelector,timeId)
             removeEventListener('scroll',showModalByScroll)
         }
     }   
     window.addEventListener('scroll',showModalByScroll)
     modal.addEventListener('click',(e)=>{
        if(e.target=== modal || e.target.getAttribute('data-close')===''){
         closeModal(modalSelector)
        }
     })
     document.addEventListener('keydown',(e)=>{
         if(e.code=="Escape" && modal.style.display=="block"){
             closeModal(modalSelector)
         }
     }) 
}
export {showModal}
export{closeModal}
export{modal}