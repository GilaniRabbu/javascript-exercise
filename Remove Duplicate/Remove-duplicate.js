// Remove duplicate number from an array

var Name = [1, 2, 3, 4, 5, 2, 6, 3, 7, 8];

var unique = [];

for (var i = 0; i < Name.length; i++) {
    var element = Name[i];

    var index = unique.indexOf(element);

    if (index == -1) {
        unique.push(element);
    }
}

console.log(unique);