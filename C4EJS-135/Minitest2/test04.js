/*
  - Trong đó:
    - workingTime: là số giờ làm việc trên trên tháng
    - salary: là lương/ 1h làm việc
 */
const employeesInfo = [
  { nameItem: "David", workingTime: 98, salary: 10 },
  { nameItem: "Luiz", workingTime: 78, salary: 20 },
  { nameItem: "Silva", workingTime: 165, salary: 25 },
  { nameItem: "Alex", workingTime: 143, salary: 28 },
  { nameItem: "Santos", workingTime: 215, salary: 30 },
  
];

// Cau a: Viết hàm tính tổng lương công ty phải trả trong 1 tháng
// Goi y: Luong nhan vien = workingTime * salary 
function getTotalSalaryOfCompany() {
  let salaryItem = 0;
  let totalSalary = 0;
  for (let i in employeesInfo) {
    let employess = employeesInfo[i];
    salaryItem = employess.workingTime * employess.salary;
    totalSalary += salaryItem;
  }
  return totalSalary;
}
console.log(getTotalSalaryOfCompany()); // →  17119

//Cau b: Viet ham tinh luong cua 1 nhan vien bat ki trong danh sach employeesInfo
/*
  - Lương của nhân viên = workingTime * salary + bonus
  - Cách tính bonus:
    - Nếu số giờ làm việc >= 150: bonus = 200
    - Nếu số giờ làm việc >= 100 và < 150: bonus = 150
    - Nếu số giờ làm việc >= 50 và < 100 : bonus = 100
    - Nếu số giờ làm việc  < 50: bonus = 50
 */
/*
  - Input: ten 1 nhan vien bat ki trong employees list
  - Output: Luong cua nhan vien do
  - Goi y: su dung ham obj.hasOwnProperty(key) de kiem tra key co ton tai trong obj hay khong.
  - Co the tach nho logic tinh bonus thanh 1 function rieng => De dang hon.
*/
function getBonusofEmployee() {
  let bonus = 0;

  let workingTimeItem = employeesInfo.workingTime;
  if (workingTimeItem >= 150) {
    bonus = 200;
  } else if (workingTimeItem >= 100) {
    bonus = 150;
  } else if (workingTimeItem >= 50) {
    bonus = 100;
  } else {
    bonus = 50;
  }
  return bonus;
}


function getTotalSalaryOfEmployee(nameItem) {
  let bonus = 0;
  let totalSalary = 0;

  

  for (let i =0; i< employeesInfo.length; i++) {
    let employess = employeesInfo[i];
    let nameOfGuest = employess.hasOwnProperty(nameItem[]);
  console.log(nameOfGuest);
  if(nameOfGuest === false){
    return "Nhân viên không tồn tại";
  }
    let workingTimeItem = employess.workingTime;
    if (workingTimeItem >= 150) {
      bonus = 200;
    } else if (workingTimeItem >= 100) {
      bonus = 150;
    } else if (workingTimeItem >= 50) {
      bonus = 100;
    } else {
      bonus = 50;
    }
    nameItem = employess.name;
    switch (nameItem) {
      case "David":
        totalSalary = workingTimeItem * employess.salary + bonus;
        break;
      case "Alex":
        totalSalary = workingTimeItem * employess.salary + bonus;
        break;
      case "Silva":
        totalSalary = workingTimeItem * employess.salary + bonus;
        break;
      case "Santos":
        totalSalary = workingTimeItem * employess.salary + bonus;
        break;
      case "Luiz":
        totalSalary = workingTimeItem * employess.salary + bonus;
        break;
      default:
        break;
    }
  }
  return totalSalary;
}

// console.log(getTotalSalaryOfEmployee("Alex")); //=> "Nhân viên không tồn tại"
// getTotalSalaryOfEmployee("Alex") //=> "Alex's salary: $4154"
console.log(getTotalSalaryOfEmployee("Luiz")); //=> "Luiz's salary: $1660"
