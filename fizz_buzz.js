
function fizzbuzz(){
    let newArray = [];
    for (var i = 1; i <= 100; i++) {
        if ((i % 3) && (i % 5) == 0) newArray.push("FizzBuzz");
        else if (i % 3 == 0) newArray.push("Fizz");
        else if (i % 5 == 0) i = newArray.push("Buzz");
        else newArray.push(i);
    }
    document.getElementById('result').setAttribute("value", newArray);
}