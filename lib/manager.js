const Employee = require("./Employee");
class Manager extends Employee {
  constructor(name, id, email, officeNumero) {
    super(name, id, email);
    this.officeNumber = officeNumero;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getOff() {
    return this.officeNumber;
  }
}
module.exports = Manager;
