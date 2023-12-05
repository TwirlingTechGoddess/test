// 
let employees = [
    {"firstname": "Sam", "department": "Tech", "designation": "Manager", "salary": 40000, "raise eligible": true},
    {"firstname": "Mary", "department": "Finance", "designation": "Trainee", "salary": 18500, "raise eligible": true},
    {"firstname": "Bill", "department": "HR", "designation": "Executive", "salary": 21200, "raise eligible": false}
];

let company =  [
    {"companyName": "Tech Stars", "website": "www.techstars.site", "employees": ["Sam", "Mary", "Bill"]}
];

let newEmployee = {"firstname": "Anna", "department": "Tech", "designation": "Executive", "salary": 25600, "raise eligible": false};


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

function addEmployee(newEmployee) {
    console.log("Problem 3: ");
    employees.push(newEmployee);
    company.employees.push(newEmployee.firstname);
    employees.forEach(employee => {
        console.log(employee);
    })
}


// Calculate total salary for employees

function calculateSalary() {
    console.log();
}


// Update salary for each raised eligible

function updateSalary() {

}


// Add a property called 'wfh' to employees

function addProperty() {
    
}

employeeJSON();
