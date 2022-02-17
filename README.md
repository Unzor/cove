# cove
Simplify HTML then recompile it later.

Cove takes a sequence (like "{{hello}}") and evaluates it. You can even get a variable from it! Once compiled, it replaces all of the sequences found with its returned result
# Usage
```
cove main.cov
```
main.cov (before):
```html
<script>
window.world = "world"
</script>
<h1> Hello {{world}}! </h1>
```
main.cov (after):
```html
<script>
window.world = "world"
</script>
<h1> Hello world! </h1>
```

# Examples
## Math
```html
<h1> 5 + 5 is {{ 5 + 5 == 10 ? "10" : "not 10" }} </h1>
```
Result:
```html
<h1> 5 + 5 is 10 </h1>
```
