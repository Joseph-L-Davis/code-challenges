export function doubleNumbers(arr) {
  return arr.map(num => num * 2);
}

export function stringItUp(arr) {
  return arr.map(str => String(str));
}

export function capitalizeNames(arr) {
  return arr.map(str => str[0].toUpperCase() + str.toLowerCase().slice(1));
}

export function namesOnly(arr) {
  return arr.map(str => str.name);
}

export function makeStrings(arr) {
  return arr.map(str => str);
}