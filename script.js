const convertButton = document.querySelector(".convert-button")


function convertValues(){

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")// valor em real
    const currencyValueConverted = document.querySelector(".currency-value")// outras moedas
    const currencySelect = document.querySelector(".currency-select") 
    
    console.log(currencySelect.value)
        const dolarToday = 5.2
        const euroToday = 6.2

   

    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style:"currency",
            currency:"USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-De",{
            style:"currency",
            currency:"EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    

    
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency:"BRL"
    }).format(inputCurrencyValue)

    function changeCurrency(){
        console.log('trocou de moeda')
        currencySelect.addEventListener("change",changeCurrency) 
    }
    
} 
   
   convertButton,addEventListener("click",convertValues)
   