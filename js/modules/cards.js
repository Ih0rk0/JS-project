import { getData } from "../servises/servises"
 function cards(){
     //-------------------------------cards
     const container=document.querySelector('[data-item]')
    
     class MenuCard{
         constructor(scr,alt ,tiitle ,subtitle,price ,parent){
             this.scr=scr
             this.alt=alt
             this.tiitle=tiitle
             this.subtitle=subtitle
             this.price=price
             this.parent=parent
         }
          render(){
             let item1=document.createElement('div')
             item1.innerHTML=`<div class="menu__item">
             <img src="${this.scr}" alt="${this.alt}" >
             <h3 class="menu__item-subtitle">${this.tiitle}</h3>
             <div class="menu__item-descr">${this.subtitle}</div>
             <div class="menu__item-divider"></div>
             <div class="menu__item-price">
                 <div class="menu__item-cost">Цена:</div>
                 <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
             </div>
         </div>`
         this.parent.append(item1)
         }
     }

     getData('http://localhost:3000/menu')
     .then(data=>{
         data.forEach(({img,altimg,title,descr,price})=>{
             new MenuCard(img,altimg,title,descr,price,container).render()
         })
     })
 }
 export{cards}