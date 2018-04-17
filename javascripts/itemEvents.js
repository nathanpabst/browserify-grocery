const itemCards = document.getElementsByClassName('item-add');
const data = require('./data');

const addItems = (e) => {
  const numberToAdd = e.target.parentNode.parentNode.children[1].children[0].children[0].children[1].value;
  const itemId = e.target.parentNode.parentNode.parentNode.children[0].children[0].dataset.itemId;
  // console.log('numberToAdd', numberToAdd);
  // console.log('itemId', itemId);
  data.setCart(itemId, numberToAdd);
};

const addItemEvents = () => {
  for (let i = 0; i < itemCards.length; i++) {
    itemCards[i].addEventListener('click', addItems);
  }
};

module.exports = addItemEvents;
