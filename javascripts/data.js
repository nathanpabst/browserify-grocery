const loadDepartments = require('./departments');

const printToDom = require('./dom');

let departmentArray = [];

const whenDepartmentsLoad = function () {
  departmentArray = JSON.parse(this.responseText).departments;
  // console.log('departments', data);
  printToDom(departmentArray);
};

const errorFunction = function () {
  console.error('shit broke');
};

const initializer = () => {
  loadDepartments(whenDepartmentsLoad, errorFunction);
};

const getDepartments = () => {
  return departmentArray;
};

module.exports = {
  initializer,
  getDepartments,
};
