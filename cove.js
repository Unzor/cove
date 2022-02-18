var window = global;
var file = process.argv[2];
var HTMLParser = require('node-html-parser');
const fs = require("fs");

function rangethrough(sequence, str) {
    var a2 = [];
    str.split(sequence[0]).forEach(function(e) {
        var h = e.split(sequence[1]);
        if (h.length == 1) {
            h = h[0];
        }
        a2.push(h)
    })
    var a3 = [];
    a2.forEach(function(e) {
        var type = typeof e;
        if (type == "object") {
            a3.push(sequence[0] + e[0] + sequence[1]);
            a3.push(e[1]);
        } else {
            a3.push(e);
        }
    })
    return a3;
}

var conts = fs.readFileSync(file).toString();

var root = HTMLParser.parse(conts);
root.querySelectorAll("script").forEach(function(sc){
  if (sc.getAttribute("cove") !== null) {
  sc = sc.innerText;
    eval(sc);
  }
})

var ranges = rangethrough(["{{", "}}"], conts);
ranges.forEach(function(r){
  if (r.startsWith("{{") && r.endsWith("}}")) {
    var res = eval(r.slice(0, -2).slice(2, r.length));
    fs.writeFileSync(file, conts.replaceAll(r, res))
  }
})
