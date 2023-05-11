const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9

const convertvalues = () => {
    const inputReais = document.getElementById('input-real').value
    const realTextValue = document.getElementById('real-Value-Text')
    const currencyValuetext = document.getElementById('currency-Value-Text')


    realTextValue.innerHTML = new Intl.NumberFormat('pt-br',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if (select.value === 'US$ Dólar americano') {
        currencyValuetext.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)
    }

    if (select.value === '€ Euro') {
        currencyValuetext.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR', }
        ).format(inputReais / euro)
    }
}
changeCurrency = () => {
    const currencyName = document.getElementById("Dólar")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "../images/estados-unidos (1) 1@2x.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "../images/Design sem nome 1.png"
    }

    convertvalues()

}

button.addEventListener('click', convertvalues)
select.addEventListener("change", changeCurrency)