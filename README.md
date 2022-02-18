# cove
Simplify HTML then recompile it later.

Cove takes sequences (like "{{5 + 5}}") and evaluates the code inside it. You can get a variable from it, or evaluate JavaScript code. Once compiled, it replaces all of the sequences found with its returned result. There are currently two syntaxes, and more will come soon. Here are some examples:
#### JavaScript Evaluation inside of syntax
```
{{ 9 + 10}}
```
#### Element Query Selection
```
{element{h1})
```

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
## Query Selection
Before
```html
<h1> Hello World! </h1>
<script> 
console.log(({element{h1}).innerText); // Hello World!
</script>
```
After
```html
<h1> Hello World! </h1>
<script> 
console.log(document.querySelector("h1").innerText); // Hello World!
</script>
```
## In Browser 
```javascript
cove(`<h1> {{ var equation = "5 + 5"; eval(equation) == 10 ? equation.toString() + " is 10" : equation.toString() + " is not 10" }} </h1>`);
```
Returns: 
```html
<h1> 5 + 5 is 10 </h1>
```
