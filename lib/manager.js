const Employee = require("./Employee");
class Manager extends Employee {
  constructor(name, id, email, officeNumero) {
    super(name, id, email);
    this.officeNum = officeNumero;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNum() {
    return this.officeNum;
  }
  getOff() {
    return this.officeNum;
  }
}
module.exports = Manager;
