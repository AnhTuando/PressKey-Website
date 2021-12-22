var eKey = document.querySelector('.cart.key p:last-child')
var eLocation = document.querySelector('.cart.location p:last-child')
var eWhich = document.querySelector('.cart.which p:last-child')
var eCode = document.querySelector('.cart.code p:last-child')
var eAlert = document.querySelector('.alert')
var eBox = document.querySelector('.box')
var eResult = document.querySelector('.result')



document.addEventListener('keydown',e=> {

    eAlert.classList.add('hide')
    eBox.classList.remove('hide')

    eKey.innerText = e.key 
    eLocation.innerText = e.location 
    eWhich.innerText = e.which 
    eResult.innerText = e.which 
    eCode.innerText = e.code 

})
