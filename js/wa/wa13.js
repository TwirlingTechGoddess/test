// 
let employees = [
    {"firstname": "Sam", "department": "Tech", "designation": "Manager", "salary": 40000, "raise eligible": true},
    {"firstname": "Mary", "department": "Finance", "designation": "Trainee", "salary": 18500, "raise eligible": true},
    {"firstname": "Bill", "department": "HR", "designation": "Executive", "salary": 21200, "raise eligible": false}
];

let companies =  [
    {"companyName": "Tech Stars", "website": "www.techstars.site", "employees": ["Sam", "Mary", "Bill"]}
];

let newEmployees = [
    {"firstname": "Anna", "department": "Tech", "designation": "Executive", "salary": 25600, "raise eligible": false}
];




// Create JSON for each employee

function  employeeJSON() {
    console.log("Problem 1: ");
    employees.forEach(employee => {
        console.log(employee);
    })
}

// Create JSON for the company

function companyJSON() {
    console.log("Problem 2: ");
    employees.forEach(company => {
        console.log(company);
    })
}


// A new employee has joined the company

function addEmployee() {
    console.log("Problem 3: ");
    employees.push(newEmployees[0]);
    companies[0].employees.push(newEmployees[0].firstname);
    employees.forEach(employee => {
        console.log(employee);
    })
}


// Calculate total salary for employees

function calculateSalary() {
    console.log("Problem 4: ");
    const totalSalary = employees.reduce((accumulator, currentValue) => accumulator + currentValue.salary,
        0,
    );
    console.log(totalSalary);
}


// Update salary for each raised eligible

function updateSalary() {
    console.log("Problem 5: ");
    employees.forEach(employee => {
        if(employee["raise eligible"] === true) {
            employee.salary = (employee.salary * 1.1);
            employee["raise eligible"] = false;
        }
        console.log(employee);
    });
}


// Add a property called 'wfh' to employees

function addProperty() {
    console.log("Problem 6: ");    
}

employeeJSON();
companyJSON();
addEmployee();
calculateSalary();
updateSalary();
addProperty();