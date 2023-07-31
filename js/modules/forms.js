import { showModal,closeModal } from "./modal"
import { postData } from "../servises/servises"
function forms(timeId,formSelector){
    const forms =document.querySelectorAll(formSelector)
    let messeges={
        loading:"img/spinner.svg",
        done:'DONE!!!',
        fail:'ERROR, THY LATER'
    }
    forms.forEach((item)=>{
        bindPostData(item)
        
    })
    function bindPostData(form){
        form.addEventListener('submit', (e)=>{
            e.preventDefault() 
            const formData= new FormData (form)
            const json=JSON.stringify(Object.fromEntries(formData.entries()))
            console.log(json)
            //--------------------------------------------------------------------------
            const spinner=document.createElement('img')
            spinner.src=messeges.loading
            spinner.style.cssText=`
            display: block;
            margin: 0 auto;
            `
            form.insertAdjacentElement('afterend' , spinner);
            postData('http://localhost:3000/requests',json)
            .then(data => {
                console.log(data)
                spinner.remove()
                showDoneModal(messeges.done) 
            }).catch(()=>{
                showDoneModal(messeges.fail)
                spinner.remove()
            }).finally(()=>{
                form.reset() 
            })
        })
        function showDoneModal(message){
            let modalContent= document.querySelector('.modal__content')
            modalContent.classList.add('hide')
            showModal('.modal',timeId)
            const doneModal = document.createElement('div')
            doneModal.classList.add('modal__content')
            let img='';
            if(message==messeges.done){
                img=`<div  ><img style='hegiht:200px;width:300px;display:block;margin:0 auto' src="img/tom.jpg" alt="next"></div>`
            }else {
                img=`<div  ><img style='hegiht:200px;width:300px;display:block;margin:0 auto' src="img/tom2.jpg" alt="next"></div>`
            }
            doneModal.innerHTML=`
                <div data-close class="modal__close">x</div>
                ${img}
                <div style="margin-top:25px"class="modal__title">${message}</div>
            `
            document.querySelector('.modal__dialog').append(doneModal)
            setTimeout(()=>{
                doneModal.remove()
                modalContent.classList.remove('hide')
                closeModal('.modal')
            },2000)
        }
    }
}
export {forms}