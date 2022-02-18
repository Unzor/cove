function cove(code) {
    var result;

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

    var conts = code;

    var root = new DOMParser().parseFromString(conts, "text/html");
    root.querySelectorAll("script").forEach(function(sc) {
        sc = sc.innerText;
        eval(sc);
    })

    var ranges = rangethrough(["{{", "}}"], conts);
    ranges.forEach(function(r) {
        if (r.startsWith("{{") && r.endsWith("}}")) {
            var res = eval(r.slice(0, -2).slice(2, r.length));
            result = conts.replaceAll(r, res);
        }
    })
    return result;
}
