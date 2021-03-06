var cos = require("./cosmic");
cos.language(2);
cos.seed(42);

cos.section("demonstrate existence of memory","MATH");
cos.add("define meaning-of-life-universe-everything 39");
cos.add("= 39 $meaning-of-life-universe-everything");
cos.add("= $meaning-of-life-universe-everything 39");
cos.add("define meaning-of-life-universe-everything 40");
cos.add("= $meaning-of-life-universe-everything 40");
cos.add("define meaning-of-life-universe-everything | + 1 $meaning-of-life-universe-everything");
cos.add("= $meaning-of-life-universe-everything 41");
cos.add("assign x (+ 1 $meaning-of-life-universe-everything) | define meaning-of-life-universe-everything $x")
cos.add("= $meaning-of-life-universe-everything 42");

cos.add("define square | ? x | * $x $x");

var bag = cos.bag(0,10);
for (var i=0; i<5; i++) {
    var x = bag[i];
    cos.add(["=", x*x, [-1, "square", x]]);
}

cos.add("define +:+ | ? x | + $x 1");
for (var i=0; i<5; i++) {
    var x = bag[i];
    cos.add(["=", x+1, [-1, "+:+", x]]);
}
