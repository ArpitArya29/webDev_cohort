const submitButton = document.getElementById('submit_btn');
submitButton.addEventListener('click', ()=>{
    const weight = Number(document.getElementById('weightValue').value);
    const height = Number(document.getElementById('heightValue').value);
    const heightInMet = height/100;
    const bmi = weight/(heightInMet**2);
    
    if(bmi>=0 && bmi<=100){
        document.getElementById("bmi-indicator").style.left = bmi + "%";
        let label = document.getElementById("bmi-label");
        label.innerText = bmi.toFixed(2);
    }
    else{
        alert("Enter Correct Details");
    }
})