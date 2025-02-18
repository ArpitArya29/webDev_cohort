# The Calculator Project

## Structure (HTML)

- Main container
  - Result Container
  - Buttons Container

## Design (CSS)

- body -> flex, centre for positioning on main axis
- main container -> flex, flex-dir: column
- result container -> text-align: right
- button container -> grid (4 X 5), required gap of 5px
- set the positions and the span of different buttons, here i set for
  - 0 button
  - = button

## Logic (javaScript)

- get the button container
- add click eventlistener and find "event.target"
- if the target node is button, then only do the following operations
  - extract the innertext of button as value
  - get the container to update result
  - if value is 'C'
    - clear the result container
  - if value is '='
    - get the vaue of result container
    - evaluate the complete expression: built-in fun "eval()"
    - update the result to the result container
  - if value if 'DEL'
    - remove the last character of result string using string slice
  - if value is any operant or operator
    - add it to the result field forming the expression
