export function capitalizeObjectKeys(obj) {
  const newObj = Object.keys(obj);
  return newObj.map(str => str[0].toUpperCase() + str.toLowerCase().slice(1));
}

export function sortedKeys(obj) {
  const newObj = Object.keys((obj));
  return newObj.sort((a, b) => a.length - b.length);
}

export function getFilteredKey(obj) {
  const ageObj = Object.keys((obj));
  return ageObj.filter(str => str === 'age'); 
}