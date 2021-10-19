letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for (var i = 26; i--;) {
    for (var j = 10; j--;) console.log(letters[i]+j);
    for (var j = 26; j--;) console.log(letters[i]+letters[j]);
}