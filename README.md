# cove
Simplify HTML then recompile it later.

Cove takes a sequence (like "{{hello}}") and evaluates the code inside it. You can get a variable from it, or evaluate JavaScript code. Once compiled, it replaces all of the sequences found with its returned result.

To use variables, create a script and give it the "cove" attribute to be ran on compilation.

# Installation 
```
npm install -g cove-compiler
```
# Usage
```
cove main.cov
```
main.cov (before):
```html
<script cove>
window.world = "world"
</script>
<h1> Hello {{world}}! </h1>
```
main.cov (after):
```html
<script cove>
window.world = "world"
</script>
<h1> Hello world! </h1>
```

# Examples
## Math
```html
<h1> {{ var equation = "5 + 5"; eval(equation) == 10 ? equation.toString() + " is 10" : equation.toString() + " is not 10" }} </h1>
```
Result:
```html
<h1> 5 + 5 is 10 </h1>
```
## In Browser 
```javascript
cove(`<h1> {{ var equation = "5 + 5"; eval(equation) == 10 ? equation.toString() + " is 10" : equation.toString() + " is not 10" }} </h1>`);
```
Returns: 
```html
<h1> 5 + 5 is 10 </h1>
```
