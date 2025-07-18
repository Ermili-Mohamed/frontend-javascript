interface Teacher {
 readonly firstName: string;
 readonly lastName: string;
 fullTimeEmployee: boolean;
 yearsOfExperience?: number;
 location: string;
 [key: string]: any; // allow extra properties
}

// Example usage:
const teacher3: Teacher = {
 firstName: 'John',
 lastName: 'Doe',
 fullTimeEmployee: false,
 location: 'London',
 contract: false,
};

console.log(teacher3);


// Directors Interface

interface Directors extends Teacher {
 numberOfReports: number
}

const director1: Directors = {
 firstName: 'John',
 lastName: 'Doe',
 location: 'London',
 fullTimeEmployee: true,
 numberOfReports: 17,
};
console.log(director1);


// Printing teachers function

interface printTeacherFunction {
 (firstName: string, lastName: string): string

}

const printTeacher: printTeacherFunction = ((firstName, lastName) => {
 return `${firstName.charAt(0)}. ${lastName}`
})

// Writing a class

// Interface for class methods
interface StudentClassInterface {
 workOnHomework(): string;
 displayName(): string;
}

// Interface for constructor
interface StudentConstructor {
 new(firstName: string, lastName: string): StudentClassInterface;
}

// Class implementing the interface
class StudentClass implements StudentClassInterface {
 constructor(private firstName: string, private lastName: string) { }

 workOnHomework = (): string => "Currently working";

 displayName = (): string => this.firstName;
}