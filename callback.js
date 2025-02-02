function add(adder){
    let a = +prompt("Enter the number1: ");
    let b = +prompt("Enter the number2: ");
    adder(a,b)
}
function addition(a,b){
    sum = a+b;
    console.log(`sum is ${sum}`);
}
add(addition)


// addition of given numbers using callback

function num(callback){
    let startNum = +prompt("Enter the start num: ");
    let endNum = +prompt("Enter the end num: ");
     callback(startNum,endNum)
}
function additionOfNumbers(a,b){
    let sum = 0;
    for(i=a;i<=b;i++){
        sum+=i;
    }
    console.log(sum);
}
num(additionOfNumbers)


// callback

function fun1(function2){
    console.log("function 1");
    function2()
}
function fun2(){
    console.log("function 2");
}
fun1(fun2)



// printing table using callback

function multiplication(tables){
    let number = +prompt("Enter the number: ");
    tables(number)
}
function table(a){
    for(i=1;i<=10;i++){
        let mul = a * i;
        console.log(`${a}*${i}=${mul}`)
    }
}
multiplication(table)