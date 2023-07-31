function slider(){
    let prev =document.querySelector('.offer__slider-prev'),
        next=document.querySelector('.offer__slider-next'),
        slider=document.querySelector('.offer__slider'),
        slides=document.querySelectorAll('.offer__slide'),
        current=document.querySelector('#current'),
        field=document.querySelector('.offer__slider-wrapper'),
        wrapper=document.querySelector('.offer__wrapper'),
        width=window.getComputedStyle(field).width,
        counter=1,
        offset=0
        
    function deleteLetters(str){
        return +str.replace(/\D/g,'')
    }
        const dotWrapper=document.createElement('div')
        slider.style.position="relative"
        slider.append(dotWrapper)
        dotWrapper.style.cssText=`
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
        `
        let dots=[]
        for(let i=0;i<slides.length;i++){
            const dot =document.createElement('div') //так щоб додати в кінець кілька елементів їх постійно треба створювати
            dot.classList.add('dot')
            dot.setAttribute('data-id',i+1)
            dotWrapper.append(dot)
            dots.push(dot)
        }
        dots[0].style.opacity= '1';
        dots.forEach(dot=>{
            dot.addEventListener('click',(e)=>{
                const slideId =dot.getAttribute('data-id')  //це було найскладніше
                console.log(slideId)
                counter=slideId
                dots.forEach((dot)=> dot.style.opacity='.5')
                dots[slideId-1].style.opacity= '1'
                offset=deleteLetters(width)*(slideId-1)
                wrapper.style.transform=`translate(-${offset}px)`
                current.textContent=`0${counter}` 
            })
        })
        
    field.style.cssText=`
        
        overflow:hidden
        `
    wrapper.style.cssText=`
    display:flex;
    width: ${100*slides.length}%; 
    transition: 0.5s all;
    `
    next.addEventListener('click',()=>{
        if(offset>=deleteLetters(width)*(slides.length-1)){
           
            offset=0
            wrapper.style.transform=`translate(-${offset}px)`
            counter=1
        }else{
            offset+=deleteLetters(width)
            counter++  
        }
        wrapper.style.transform=`translate(-${offset}px)`
        current.textContent=`0${counter}` 

        dots.forEach((dot)=> dot.style.opacity='.5')
        dots[counter-1].style.opacity='1'

    })
    prev.addEventListener('click',()=>{
        
        if(offset<=0){
            offset=deleteLetters(width)*(slides.length-1)
            counter=4
        }else{
            offset=offset - deleteLetters(width)
            counter--
        }  
        current.textContent=`0${counter}` 
        wrapper.style.transform=`translate(${-offset}px)` 
        dots.forEach((dot)=> dot.style.opacity='.5')
        dots[counter-1].style.opacity='1'
    })
}
export {slider}