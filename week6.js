//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return '<li>${step}</li>';
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join('');

let grades = ['A', 'B', 'A', 'C'];

let gpaPoints = grades.map(function(grade) {
    switch (grade){
        case 'A':
            point = 4;
            break;
        case 'B':
            point = 3;
            break;
        case 'C':
            point = 2;
            break;
        case 'D':
            point = 1;
            break;
        case 'F':
            point = 0;
        default:
            alert('not a valid grade');
    }
    return point;
})

console.log(gpaPoints);

let totalPoint = gpaPoints.reduce(getTotal);

function getTotal(total, item){
    return total + item;
}
console.log(totalPoint);

let gpaAverage = totalPoint/gpaPoints.length;

console.log(gpaAverage);

let fruit = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

let shortWords = fruit.filter(function(item) {
    return item.length < 6;
})

let shortFruit = fruit.filter((item)=> item.length < 6);

console.log(shortFruit);