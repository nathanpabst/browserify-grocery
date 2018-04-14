const loadDepartments = require('./departments');

// const printToDom = require('./dom');

const departmentArray = [];

const whenDepartmentsLoad = function () {
  const data = JSON.parse(this.responseText).departments;
  console.log('departments', data);
  // printToDom(departmentArray);
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
