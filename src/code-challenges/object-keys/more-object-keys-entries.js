export function getHouses(arr) {
  return arr.map(str => str.house); 
}

export function updateNumbers(obj) {
  const newObj = Object.entries(obj);
  return newObj.map(str => String(str[0] + ': ' + str[1]));
}

export function totalCharacters(arr) {
  const newArr = arr.map(str => str.name + str.spouse + str.children);
  return newArr;

}

export function hasChildrenEntries(arr, character) {
  for (character in arr) {
    if (character.children) {
      return true;
    }
  }
}