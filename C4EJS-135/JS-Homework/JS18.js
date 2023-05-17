/* Bài 18 Hãy tính tổng budgets của một mảng các nhân viên sau */

function getTotalSalary(employees) {
    let total = 0;
    for (let i = 0; i < employees.length; i++) {
      const employee = employees[i];
      total += employee.salary;
    }
  
    return total;
  }
  
  console.log(
    getTotalSalary([
      { name: "John", age: 21, salary: 23000 },
      { name: "Steve", age: 32, salary: 40000 },
      { name: "Martin", age: 16, salary: 2700 },
    ]));