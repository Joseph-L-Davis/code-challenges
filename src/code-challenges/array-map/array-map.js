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
  return arr.map(str => {
    if (str.age >= 18) {
      return `${str.name} can go to The Matrix`; 
    } else {
      return `${str.name} is under age!!`;
    }
  });
}

export function readyToPutInTheDom(arr) {
  return arr.map(str => {
    for (str in arr){
      const names = document.createElement('h1');
      names.textContent = str.name;
      const ages = document.createElement('h2');
      ages.textContent = str.age;
    }
  });
}
