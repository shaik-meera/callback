function totalPrice(price) {
    sum = 0;
    category1 = [];
    category2 = [];
    category3 = [];
    for (i = 0; i < price.length; i++) {
        sum = sum + price[i];
        if (price[i] < 100) {
            category1.push(price[i])
        }
        else if (price[i] >= 100 && price[i] <= 200) {
            category2.push(price[i]);
        }
        else if (price[i] > 200 && price[i] <= 300) {
            category3.push(price[i]);
        }
        else {
            console.log("Enter the valid price");
        }
    }
    console.log(`Total cost of books = ${sum}`);
    console.log(`Category 1 = ${category1}`);
    console.log(`Category 2 = ${category2}`);
    console.log(`Category 3 = ${category3}`);

}
let price = [];
let noofbooks = parseInt(prompt("enter the number of books:"));
for (i = 1; i <= noofbooks; i++) {
    let bookPrice = parseFloat(prompt(`enter the price of book${i}: `));
    price.push(bookPrice);
}
totalPrice(price);




// 27 Movie Rating Calculator

function movieRatingCalculator() {
    for (let i = 1; i <= numberOfViewers; i++) {
        let rating = parseInt(prompt(`Enter the rating of viewer ${i}: `));
        ratings.push(rating);
    }

    let totalRating = 0;
    for (let i = 0; i < ratings.length; i++) {
        totalRating += ratings[i];
    }

    const averageRating = totalRating / ratings.length;
    console.log("Average Rating:", averageRating);
}
let ratings = [];
let numberOfViewers = parseInt(prompt("Enter the number of viewers: "));
movieRatingCalculator()




// 28 Personal Savings Calculator

function savingsCalculator() {
    let savings = monthlyIncome - expenses;
    if (savings > expenses) {
        console.log(`${savings} you are a good saver`);
    }
    else if (savings < expenses) {
        console.log(`${savings} you are not a good saver`);
    }
    else {
        console.log("Invalid");
    }
}
const monthlyIncome = parseInt(prompt("Enter the monthly Income: "));
const expenses = parseInt(prompt("Enter the monthly expenses: "));
savingsCalculator()




// 29 Journey Time Estimation



function journeyTimeEstimation() {
    let time = distance / speed;
    console.log(`${time} hours`);
}
let distance = parseInt(prompt("Enter the distance to travel: "));
let speed = parseInt(prompt("Enter the speed(in kmph): "));
journeyTimeEstimation()




// 30 School Marksheets


function totalMarks(students, subjects) {
    for (i = 1; i <= students; i++) {
        console.log(`Enter the marks of student ${i}`);
        let marks = 0
        for (j = 0; j < subjects; j++) {
            let mark = parseFloat(prompt(`Enter the marks of each subject of student ${i}:`));
            marks = marks + mark;
        }
        console.log(marks);
        avgmarks = marks / subjects;
        console.log(`Average marks of a student ${i} = ${avgmarks}`);
    }
}

let students = parseInt(prompt("Enter the number of students in a class:"));
let subjects = parseInt(prompt("Enter the number of subjects:"));
totalMarks(students, subjects);