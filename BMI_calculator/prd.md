# Project Body Mass Calculator

## Structure (HTML)

- main container

  - inputs
    - weight input (in kg)
    - height input (in cms)
  - submit button
  - bmi scale
    - bmi indicator
    - bmi label

- chart
  - a table that shows the different category of bmi according to its value

## Design (CSS)

- main container -> flex, flex-dir: column
- style input fields accordingly
- submit button -> 100% width of its parent element
- bmi scale -> background of linear gradient to the right for different category window
- chart -> choose styles according to your choice

## Logic (javaScript)

- get the submit button from the ducoment
- add eventlistener of "click"
- get the values of inputs: height(in cms) and weight(in kg)
- convert the height input in metre: (height/100)
- calculate bmi: (weight/heightInMetre^2)
- if bmi is in range (0-100)
  - update the bmi indicator by add style as: indicator.style.left = bmi %
  - set the innertext of label to view the exact value upto 2 d.p
- else
  - alert the user to enter a proper input value
