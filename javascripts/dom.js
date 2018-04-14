// print to dom function
// call domString function
// 2 rows of 4 use bootstrap grid
// make a card with class of department
// each card should have image tag and h3 tag
// h3 tag should have class hide
const departmentOutputDiv = document.getElementById('departments');

const domString = (departments) => {
  let domStrang = '';
  departments.forEach((department) => {
    domStrang += `<div class='col-sm-3 department'>`;
    domStrang +=   `<h3 class='hide'>${department.name}</h3>`;
    domStrang +=   `<img class='department-image' src='${department.img}'>`;
    domStrang += `</div>`;
  });
  return domStrang;
};

const printToDom = (departments) => {
  departmentOutputDiv.innerHTML = domString(departments);
  // domEvents();
};

module.exports = printToDom;
