function zipList(list1, list2) {
  const array = [];
  while ((list2.length > 0) && (list1.length > 0)) {
    array.push(list1[0]);
    array.push(list2[0]);
    list1.shift();
    list2.shift();
  }
  return array;
}

function zipListTheSimpleWay(list1, list2) {
  const list = _.zip(list1, list2);
  return _.flatten(list);
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheSimpleWay(['a', 'b', 'c'], [1, 2, 3]));
