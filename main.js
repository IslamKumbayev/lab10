let lab1 = [5,5,5,5,10,10]
let lab2 = [5,5,5,5,5,5,10]
let lab3 = [5,10,10,15]
let lab4_5 = [10,5,5,5,5,5,10,10,10,10,3]
let lab6 = [5,5,10,5,5,10]
let lab8 = [5,10,10,10,5]


let sum1=0
let sum2=0
let sum3=0
let sum4_5=0
let sum6=0
let sum8=0

let quiz1 = 38

let labs = [lab1,lab2,lab3,lab4_5,lab6,lab8]
let sums = [sum1,sum2,sum3,sum4_5,sum6, sum8]

function get_sum () { // function for counting each sum for each lab
    for (let i = 0; i < sums.length; i++) {
        for (let j = 0; j < labs[i].length; j++) {
            sums[i] += labs [i][j];
        }
    }
    return sums;
}

console.log (get_sum(sums)) // checking the function for the sum


function summa(sums) { //sum of all sums, to find the total score
    let a = 0;
    for (let i = 0; i < sums.length; i++) {
        a += sums[i];
    }
    return a;
}

let labsum = summa(sums); 

let total_score = 100 * ((labsum/7*0.6) + (quiz1*0.4)) / 40

function main() {
    let obj = {
        lab1:labs[0], //below printed all labs
        lab2:labs[1],
        lab3:labs[2],
        lab4_5:labs[3],
        lab6:labs[4],
        lab8:labs[5],
        quiz1: 38, //print quiz score
        sums: sums, //sum of every lab
        labsum: labsum, //sum of sums
        total_score: total_score, //total score by formula above
    }
    return obj;
}

let results = main();
console.log(results)