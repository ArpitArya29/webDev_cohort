const button = document.querySelector('.button_container');

button.addEventListener('click',(e)=>{
    
    // checks if button is being clicked
    if(e.target.nodeName==='BUTTON'){
        
        const value = e.target.innerText; // checking which button is clicked
        const inputValue = document.getElementById('result_container');

        switch(value){
            case 'C':
                inputValue.innerText = '';
                break;

            case '=':
                const result = eval(inputValue.innerText);
                inputValue.innerText = result;
                break;

            case 'DEL':
                let val = inputValue.innerText;
                inputValue.innerText = val.slice(0,val.length-1); // if it is a DEL button, we remove the last character by slicing the string
                break;

            default:
                const updatedValue = inputValue.innerText + value;
                inputValue.innerText=updatedValue;
        }

    }
})
