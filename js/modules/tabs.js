function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass){
    //Tabs
    const tabsParent=document.querySelector(tabsSelector),
        tabs=document.querySelectorAll(tabsContentSelector),
        tabContents=document.querySelectorAll(tabsParentSelector)
    function hideContent(){
        tabContents.forEach(element => {
            element.classList.add('hide')
        });
        tabs.forEach(element =>{
            if(element.classList.contains(activeClass)){
                element.classList.remove(activeClass)
            }
        })
    }
    hideContent()
    function showContent(i=0){
        tabContents[i].classList.add('fade')
        tabContents[i].classList.remove('hide')
        tabs[i].classList.add(activeClass)
    }
    showContent()
    tabsParent.addEventListener('click', (e)=>{
        if(e.target.classList.contains(tabsContentSelector.slice(1))){
            tabs.forEach((item,i)=>{
                if(e.target==item){
                    hideContent()   
                    showContent(i)
                }
            })
        }
    })
}
export{tabs}