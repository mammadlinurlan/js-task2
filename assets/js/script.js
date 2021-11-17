let str = "hello qaqa world"

function ReverseAll(string) {
    let splittedArr = string.split(" ");
    let reversedArr = splittedArr.reverse();
    for (let i in reversedArr) {
       reversedArr[i] = reversedArr[i].split("").reverse().join("");
    }
    return reversedArr.join(" ")
}
console.log(ReverseAll(str));