class Company {
    constructor() {
        this.departments = [];
    }
    addEmployee(name, salary, position, department) {
        if (this.isValid(name) && this.isValid(salary) && this.isValid(position) && this.isValid(department)) {
            throw new Error('Invalid input!');
        }
        if (Number(salary) < 0) {
            throw new Error('Invalid input!');
        }
        this.departments[department].push([name, Number(salary), position]);
        return `New employee is hired. Name: ${employee.name}. Position: ${employee.position}`;
    }
    bestDepartment() {

    }

    isValid(value) {
        return !value && value == '';
    }
}