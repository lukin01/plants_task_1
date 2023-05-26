let accordion = document.querySelectorAll('.accordion__btn');

accordion.forEach((item) => {

    
    let itemBody = item.querySelector('.accordion__body')
    
    let itemHeight = itemBody.clientHeight;
    
    itemBody.style.height = '0px'
    

    item.querySelector('.accordion__head').onclick = function () {

        if(itemBody.style.height == '0px') {
            item.style.background = '#D6E7D2'
        } else item.style.background = '#EDF2EC'

        let accordionBody = this.closest('.accordion__btn').querySelector('.accordion__body')
        accordionBody.classList.toggle('accordion__body_open')

        if(accordionBody.classList.contains('accordion__body_open')) {
            itemBody.style.height = itemHeight + 'px';
        } else itemBody.style.height = '0px'
    }
// попытка исключить другие
    let dropOtherAccordions = function () {
        let nextItem = item.nextElementSibling.querySelector('.accordion__body')

        if(nextItem.classList.contains('accordion__body_open')) {
            nextItem.style.height = '0px'
        } 
    } 
    dropOtherAccordions();
})

