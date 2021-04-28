export function getArrayOfKeysAndValues(obj) {
  const newObj = Object.entries(obj);
  return newObj;
}

export function sortedArraysByValuesLength(obj) {
  const newObj = Object.entries((obj));
  return newObj.sort((a, b) => b.length - a.length);

}

