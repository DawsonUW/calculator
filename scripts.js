// const {evaluate} = require("mathjs");
let isResultDisplayed = false

function clearScreen(){
    document.getElementById("result").value="0";
    isResultDisplayed = true
}

function display(userValue){
    const resultField = document.getElementById('result');
    let currentValue = resultField.value

    // define a regex to check for consecutive operators
    const invalidExpressionRegex=/([+\-*/]{2,})/;

    // check if the current expression is valid
    if (invalidExpressionRegex.test(currentValue+userValue)){
        resultField.value="Error: Invalid Expression"
        isResultDisplayed=true
        return
    }

    if(isResultDisplayed){
        resultField.value = userValue;
        isResultDisplayed = false;
    }else {
        if (!isNaN(userValue)){
            const parts = currentValue.split(/([+\-*/])/);
            const lastPart = parts[parts.length-1]

            if(lastPart==="0" && userValue!=="."){
                resultField.value=currentValue.slice(0,-1)+userValue
            }else{
                resultField.value+=userValue
            }
        }else{
            resultField.value+=userValue
        }
    }
}


function calculate() {
    let expression = document.getElementById("result").value;

    try{
        document.getElementById('result').value = math.evaluate(expression);

    }catch (error){
        document.getElementById('result').value="Error"
    }
    isResultDisplayed = true
}


// add even listener for keydown events
document.addEventListener('keydown',function(event){
  const inputKey = event.key
  if(inputKey>='0'&& inputKey<="9"){
      display(inputKey)
  }  else if(inputKey ==='+'||inputKey==='-'||inputKey==='*'||inputKey==='/'){
      display(inputKey)
  } else if(inputKey === 'Enter' || inputKey==='='){
      calculate()

  }else if(inputKey === 'Backspace' ){
      clearScreen()
  }else if(inputKey === 'c' || inputKey==='C'){
      clearScreen()
  }
})

module.exports={clearScreen,display,calculate}