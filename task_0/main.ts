interface Student {
 firsName: string;
 lastName: string;
 age: number
 location: string;
}

const student_one: Student = {
 firsName: "Mouhsin",
 lastName: "Lhaj",
 age: 40,
 location: "Salimia"
}

const student_two: Student = {
 firsName: "Imad",
 lastName: "Tarro",
 age: 40,
 location: "Fes"
}



const studentsList: Student[] = [student_one, student_two];

// Create a table
const table: HTMLTableElement = document.createElement('table');

// Add Header row
const headerRow = table.insertRow();
const nameHeader = document.createElement('th');
nameHeader.textContent = 'First Name';
const locationHeader = document.createElement('th')
locationHeader.textContent = 'Location';
headerRow.appendChild(nameHeader)
headerRow.appendChild(locationHeader)


// Add student rows

studentsList.forEach(student => {
 const row = table.insertRow();
 const nameCell = row.insertCell();
 nameCell.textContent = student.firsName;
 const locationCell = row.insertCell();
 locationCell.textContent = student.location;
})


// Append the table to the document body
document.body.appendChild(table);

