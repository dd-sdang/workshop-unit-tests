export class Person {
  constructor(name, age, role) {
    this.name = name;
    this.age = age;
    this.role = role;
  }

  updateAge(age) {
    this.age = age
  }
  
  updateName(newName) {
    this.name = newName
  }
  
  updateRole(role) {
    this.role = role
  }
}