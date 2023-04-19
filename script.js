// 1 
var a = prompt("Введите текст");
a = a.toLowerCase();
var v = "аеёиоуыэюя";

function vowels(str) {
    let arr = Array.from(str);
    let newArr = [];
    arr = arr.forEach(function (elem) {
        if (v.indexOf(elem) !== -1) {
            newArr.push(elem);
        }
    });
    return newArr.length;
}
console.log(vowels(a));

function vowels2(str) {
    let arr = Array.from(str);
    let result = arr.filter(function (elem) {
        return v.indexOf(elem) !== -1;
    })
    return result.length;
}
console.log(vowels2(a));

function vowels3(str) {
    let arr = Array.from(str);
    let result = arr.reduce(function (sum, elem) {
        if (v.indexOf(elem) !== -1) {
            sum++;
        }
        return sum;
    }, 0);
    return result;
}
console.log(vowels3(a));






