const recipes = new Object({});

// const testobject = { prop: 1 }
function updateObjectWithKeyAndValue(testobject, value, key) {
  var newObject = Object.assign({}, testobject, 'prop2': 2);
  newObject[key]=value;
  return newObject
};

function destructivelyUpdateObjectWithKeyAndValue(testobject, value, key) {
  testobject[value]=key
  return testobject
};
