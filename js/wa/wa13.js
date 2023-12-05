// 
let employees = [
    {"firstname": "Sam", "department": "Tech", "designation": "Manager", "salary": 40000, "raise eligible": true},
    {"firstname": "Mary", "department": "Finance", "designation": "Trainee", "salary": 18500, "raise eligible": true},
    {"firstname": "Bill", "department": "HR", "designation": "Executive", "salary": 21200, "raise eligible": false}
]

let company =  [
    {"companyName": "Tech Stars", "website": "www.techstars.site", "employees": ["Sam", "Mary", "Bill"]}
]


// Create JSON for each employee

function  employeeJSON() {
    console.log("Problem 1: ")
    employees.forEach(employee => {
        console.log(employee);
    })
}

// Create JSON for the company

function companyJSON() {

}


// A new employee has joined the company

function addEmployee() {
    
}


// Calculate total salary for employees

function calculateSalary() {

}


// Update salary for each raised eligible

function updateSalary() {

}


// Add a property called 'wfh' to employees

function addProperty() {
    
}

employeeJSON();
