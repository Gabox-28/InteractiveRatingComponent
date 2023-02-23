function lastOver(button){
    const btn = document.querySelector(`.${button}`)

    if(btn.id !== 'selected'){
        btn.style.background = '#7c8898'
        btn.style.color = '#ffffff'
        setTimeout(() =>{
            btn.removeAttribute('style')
        }, 250)
    }
}

function over(button){
    const btn = document.querySelector(`.${button}`)

    if(btn.id !== 'selected'){
        btn.style.background = '#7c8898'
        btn.style.color = '#ffffff'
    }
}

function selected(button){
    const btnSelected = document.querySelector(`.${button}`)
    const buttons = document.querySelectorAll('.button')
    const submitButton = document.querySelector('.submit-button')

    let btn
    for(btn of buttons){
        if(btn.id !== null){
            btn.removeAttribute('id')
            btn.style.background = '#262f38'
            btn.removeAttribute('style')
        }
    }

    btnSelected.id = 'selected'
    btnSelected.style.background = '#fa7711'
    btnSelected.style.color = '#ffffff'

    submitButton.classList.add('button-on')
    submitButton.style.cursor = 'pointer'
    submitButton.removeAttribute('disabled')
}

function submit(){
    const rateCard = document.querySelector('.rate-card')
    const thanksCard = document.querySelector('.thanks-card')
    const rate = document.querySelector('#selected')
    const spanRateSelected = document.querySelector('.rate-selected')

    rateCard.classList.add('inactive')
    thanksCard.classList.remove('inactive')
    spanRateSelected.textContent = rate.textContent
}




