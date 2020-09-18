function calcular(type, value) {
    if(type === 'action') {
        if (value === 'ac'){
          document.querySelector('input#result').value = ''
        }
        if (value === '+' || value === '-' || value === '*' || value === '/' || value === '.' || value === `(` || value === `)`){
          document.querySelector('input#result').value += value
        }
        if (value === '=') {
          var value_camp = eval(document.querySelector('input#result').value)
          document.querySelector('input#result').value = value_camp
        }
        if (value === `%`) {
            document.querySelector('input#result').value = (value*value)/100
            console.log(value)
        }
      } else if (type === 'value') {

        document.querySelector('input#result').value += value
      }
}