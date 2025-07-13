interface DirectorInterface {
 workFromHome(): string
 getCoffeeBreak(): string
 workDirectorTasks(): string
}

interface TeacherInterface {
 workFromHome(): string
 getCoffeeBreak(): string
 workTeacherTasks(): string
}

class Director implements DirectorInterface {

 workFromHome = (): string => "Working from home"
 getCoffeeBreak = (): string => "Getting a coffee break"
 workDirectorTasks = (): string => "Getting to director tasks"
}

class Teacher implements TeacherInterface {

 workFromHome = (): string => "Cannot Working from home"
 getCoffeeBreak = (): string => "Cannot have a break"
 workTeacherTasks = (): string => "Getting to work"
}

interface createEmployee { salary: string | number }

function createEmployee(salary: string | number): Director | Teacher {
 if (typeof salary === 'number' && salary < 500) {
  return new Teacher()
 }
 return new Director()
}

console.log(createEmployee(200));
console.log(createEmployee('$500'));
console.log(createEmployee(1000));


// 6. Creating functions specific to employees

function isDirector(employee: Director | Teacher): employee is Director {
 return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): string {
 if (isDirector(employee)) {
  return employee.workDirectorTasks();
 }
 return employee.workTeacherTasks();
}

// Test cases
console.log(executeWork(createEmployee(200)));    // Getting to work
console.log(executeWork(createEmployee(1000)));   // Getting to director tasks


// String literal types ------

// Define string literal type
type Subjects = 'Math' | 'History';

// Define function
function teachClass(todayClass: Subjects): string {
 if (todayClass === 'Math') {
  return 'Teaching Math';
 } else {
  return 'Teaching History';
 }
}

// Test examples
console.log(teachClass('Math'));     // Output: Teaching Math
console.log(teachClass('History'));  // Output: Teaching History