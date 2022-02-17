# cove
Simplify HTML then recompile it later.

Cove 
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
