const { clear } = require('console');
const { get } = require('http');
const { resolve } = require('path');
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
let grades = 0

async function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

// let midTermDefaultWeight = (1)
// let projectDefaultWeight = (1)
// let finalDefaultWeight = (2)
async function gpa(object) {
    // return new Promise ((resolve, reject) => {
let midTermGrade;
let midTermWeight;
let projectGrade;
let projectWeight;
let finalExamGrade;
let finalExamWeight;

async function enterMidTermGrade() {
    midTermGrade = await ask(`Please enter the Mid-Term Grade: `)
        if (isNaN(parseInt(midTermGrade))) {
            console.log("Please enter a number between 0 and 100")
            enterMidTermGrade()
        } else if (parseInt(midTermGrade) > 100 || parseInt(midTermGrade) < 0) {
            console.log("Please enter a number between 0 and 100")
            enterMidTermGrade()}
    }
enterMidTermGrade();

async function enterMidTermWeight() {
    midTermWeight = await ask(`Please enter the Mid-Term Weight: `)
        if (isNaN(parseInt(midTermWeight))) {
            console.log("Please enter a number between 0 and 10")
            enterMidTermGrade()
        } else if (parseInt(midTermWeight) > 10 || parseInt(midTermWeight) < 0) {
            console.log("Please enter a number between 0 and 10")
            enterMidTermGrade()}
    }
enterMidTermWeight();

async function enterProjectGrade(){
    projectGrade = await ask(`Please enter the Project Grade: `)
        if (isNaN(parseInt(projectGrade))) {
            console.log("Please enter a number between 0 and 100")
            enterProjectGrade()
        } else if (parseInt(projectGrade) > 100 || parseInt(projectGrade) < 0) {
            console.log("Please enter a number between 0 and 100.")
            enterProjectGrade()}
    }
enterProjectGrade();

async function enterProjectWeight() {
    projectWeight = await ask(`Please enter the Project Weight: `)
        if (isNaN(parseInt(projectWeight))) {
            console.log("Please enter a number between 0 and 10")
            enterProjectGrade()
        } else if (parseInt(projectWeight) > 10 || parseInt(projectWeight) < 0) {
            console.log("Please enter a number between 0 and 10")
            enterProjectWeight()}
    }
enterProjectWeight();

async function enterFinalExamGrade() {
    finalExamGrade = await ask(`Please enter the Final Exam Grade: `); 
        if (isNaN(parseInt(finalExamGrade))) {
            console.log("Please enter a number.")
            enterFinalExamGrade()
        } else if (parseInt(finalExamGrade) > 100 || parseInt(finalExamGrade) < 0) {
            console.log("Please enter a number between 0 and 100.")
            enterFinalExamGrade()}
    }
enterFinalExamGrade();

async function enterFinalExamWeight() {
    finalExamWeight = await ask(`Please enter the Final Exam Weight: `)
        if (isNaN(parseInt(finalExamWeight))) {
            enterFinalExamGrade()
        } else if (parseInt(finalExamWeight) > 10) {
            enterFinalExamGrade()}
    }
enterFinalExamWeight();

let grades = {
  midterm: {
    // build sub-object
    grade: midTermGrade,
    weight: midTermWeight,
  },
  project: {
    // build sub-object
    grade: projectGrade,
    weight: projectWeight,
  },
  final: {
    // build sub-object
    grade: finalExamGrade,
    weight: finalExamWeight,
  }
}

  // write your code here
  let gradesToWeight = Object.keys(object);
  let gradeSum = 0;
  let weightSum = 0;
  gradesToWeight.forEach(key => {
    gradeSum += (object[key].grade * object[key].weight);
    weightSum += (object[key].weight);
  })

  let weightedGrade = gradeSum / weightSum;
  console.log(weightedGrade);
// })
  return weightedGrade;
}

gpa(grades);
console.log('The final GPA is ' + gpa(grades));

// should print: 'The final GPA is 3.425'