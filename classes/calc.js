let displayValue= '';

function appendToDisplay(value){
    const operators= ['+', '-', '*', '/'];
    
    if (operators.includes(value) && operators.includes(displayValue.slice(-1))){
        displayValue = displayValue.slice(0, -1) + value;
    }
    else{
        displayValue += value;
    }
    document.getElementById('display').value= displayValue;
}

function clearDisplay(){
    displayValue= '';
    document.getElementById('display').value= displayValue;

}

function deleteLastCharacter(){
    displayValue= displayValue.slice(0, -1);
    document.getElementById('display').value= displayValue;
}

function calculate(){
    try{
    const result= eval(displayValue);
    document.getElementById('display').value= result;
    displayValue= result.toString();
    } catch(error){
        document.getElementById('display').value= 'Error';
        displayValue= '';
    }
}